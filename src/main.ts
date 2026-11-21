import './style.css';
import type {
  BibleBook,
  BibleTranslationId,
  BiblicalDivision,
  DictionaryCategory,
  HighlightColor,
  QACategory,
  ResolvedPassage,
  VersePassageRef
} from './types';
import { BOOKS_METADATA, BIBLE_TRANSLATIONS } from './data/books-metadata';
import { DICTIONARY_CATEGORIES, POPULAR_DICTIONARY_TOPICS } from './data/dicionario-biblico';
import { QA_CATEGORIES } from './data/tira-duvidas';
import { REFUGIO_BIBLICO_DATA } from './data/refugio-biblico';
import { bibleService } from './services/bible-service';
import {
  getAvailableLetters,
  getSortedDictionaryEntries,
  searchDictionary
} from './services/dictionary-engine';
import { searchQuestions } from './services/qa-engine';
import { storageService } from './services/storage-service';

const FEATURED_PASSAGES: VersePassageRef[] = [
  { bookAbbrev: 'sl', chapter: 119, verseStart: 105 },
  { bookAbbrev: 'hb', chapter: 4, verseStart: 12 },
  { bookAbbrev: 'jo', chapter: 3, verseStart: 16 },
  { bookAbbrev: 'rm', chapter: 8, verseStart: 28 },
  { bookAbbrev: 'js', chapter: 1, verseStart: 9 },
  { bookAbbrev: 'sl', chapter: 23, verseStart: 1 },
  { bookAbbrev: 'is', chapter: 41, verseStart: 10 },
  { bookAbbrev: 'lm', chapter: 3, verseStart: 22, verseEnd: 23 },
  { bookAbbrev: 'fp', chapter: 4, verseStart: 6, verseEnd: 7 },
  { bookAbbrev: 'pv', chapter: 3, verseStart: 5, verseEnd: 6 }
];

const DIVISION_ORDER: BiblicalDivision[] = [
  'Pentateuco (Lei)',
  'Históricos (AT)',
  'Poéticos e Sapienciais',
  'Profetas Maiores',
  'Profetas Menores',
  'Evangelhos',
  'Histórico (NT)',
  'Cartas Paulinas',
  'Cartas Gerais',
  'Profético (Apocalipse)'
];

const HIGHLIGHT_LABELS: Record<HighlightColor, string> = {
  gold: 'Promessa',
  blue: 'Doutrina',
  green: 'Sabedoria',
  rose: 'Adoração'
};

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

async function copyTextSafe(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Segue para fallback compatível com WebView / contextos locais
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', 'true');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    ta.style.pointerEvents = 'none';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function getTranslationCode(id: BibleTranslationId): string {
  return id === 'aa' ? 'ARA' : id.toUpperCase();
}

function cleanQuoteText(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed;
  }
  return `"${trimmed.replace(/^"+/, '')}"`;
}

class VerboVivoApp {
  private currentTab = 'biblia';
  private currentTranslation: BibleTranslationId = storageService.getTranslation();
  private currentBookAbbrev: string = storageService.getLastLocation().bookAbbrev;
  private currentChapter: number = storageService.getLastLocation().chapter;
  private selectedVerseNumber: number | null = null;
  private fontSize: number = storageService.getFontSize();
  private booksList: BibleBook[] = [];

  // Book Picker modal state
  private pickerTestament: 'ALL' | 'AT' | 'NT' = 'ALL';
  private pickerFilterQuery = '';
  private pickerPendingBookAbbrev: string | null = null;

  // Featured verse state
  private featuredIdx = 0;

  // Dictionary state
  private currentDictCategory: DictionaryCategory | 'TODAS' = 'TODAS';
  private currentDictLetter: string | 'TODAS' = 'TODAS';
  private currentDictQuery = '';
  private activeDictEntryId: string = POPULAR_DICTIONARY_TOPICS[0];

  // Refúgio state
  private activeRefugioId: string = REFUGIO_BIBLICO_DATA[0].id;

  // Tira-Dúvidas state
  private currentQACategory: QACategory | 'TODAS' = 'TODAS';
  private currentQAQuery = '';
  private expandedQAIds: Set<string> = new Set(['certeza-da-salvacao']);

  // Marcações state
  private currentStudyFilter: 'ALL' | 'NOTES' | HighlightColor = 'ALL';
  private currentStudyQuery = '';

  // Render sequence tokens (evita condições de corrida em renderizações assíncronas)
  private chapterRenderSeq = 0;
  private dictRenderSeq = 0;
  private refugioRenderSeq = 0;
  private qaRenderSeq = 0;

  public async init(): Promise<void> {
    this.initTheme();
    this.bindGlobalNavigation();
    this.bindGlobalTranslationSwitcher();
    this.bindKeyboardShortcuts();
    this.updateCounters();

    // Carrega tradução inicial antes de renderizar os módulos orientados a versículos
    this.booksList = await bibleService.loadTranslation(this.currentTranslation);
    this.validateInitialLocation();

    this.initBibleReader();
    this.initBookPickerModal();
    this.initFeaturedVerseRibbon();
    this.initDictionarySection();
    this.initRefugioSection();
    this.initQASection();
    this.initMarcacoesSection();

    await Promise.all([
      this.renderCurrentChapter(),
      this.renderFeaturedVerse(),
      this.renderActiveDictionaryEntry(),
      this.renderActiveRefugio(),
      this.renderQACards()
    ]);
  }

  private validateInitialLocation(): void {
    const found = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    if (!found) {
      this.currentBookAbbrev = 'jo';
      this.currentChapter = 1;
      return;
    }
    if (this.currentChapter < 1 || this.currentChapter > found.chapters.length) {
      this.currentChapter = 1;
    }
  }

  // ─── TEMA (ESCURO / CLARO) ───────────────────────────────────────────
  private initTheme(): void {
    const savedTheme = storageService.getTheme();
    this.applyTheme(savedTheme);

    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      storageService.setTheme(next);
    });
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const label = document.getElementById('theme-label');
    const metaTheme = document.getElementById('meta-theme-color');

    if (theme === 'dark') {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
      if (label) label.textContent = 'Claro';
      metaTheme?.setAttribute('content', '#111317');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
      if (label) label.textContent = 'Escuro';
      metaTheme?.setAttribute('content', '#f7f3ea');
    }
  }

  // ─── NAVEGAÇÃO GLOBAL (DESKTOP + MOBILE BOTTOM BAR) ──────────────────
  private bindGlobalNavigation(): void {
    const allNavTriggers = document.querySelectorAll<HTMLButtonElement>('[data-tab]');
    allNavTriggers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        if (target) this.switchTab(target);
      });
    });

    document.getElementById('brand-home')?.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.switchTab('biblia');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  public switchTab(tabId: string): void {
    this.currentTab = tabId;
    document.querySelectorAll<HTMLElement>('[data-tab]').forEach((btn) => {
      const isActive = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── SELETOR GLOBAL DE TRADUÇÃO (ACF | NVI | ARA) ────────────────────
  private bindGlobalTranslationSwitcher(): void {
    const pills = document.querySelectorAll<HTMLButtonElement>('[data-translation]');
    const syncActivePill = () => {
      pills.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-translation') === this.currentTranslation;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-pressed', String(isCurrent));
      });
    };

    syncActivePill();

    pills.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const next = btn.getAttribute('data-translation') as BibleTranslationId | null;
        if (!next || next === this.currentTranslation) return;
        this.currentTranslation = next;
        storageService.setTranslation(next);
        syncActivePill();

        this.booksList = await bibleService.loadTranslation(this.currentTranslation);
        await Promise.all([
          this.renderCurrentChapter(),
          this.renderFeaturedVerse(),
          this.renderActiveDictionaryEntry(),
          this.renderActiveRefugio(),
          this.renderQACards()
        ]);
      });
    });
  }

  // ─── ATALHOS DE TECLADO (DESKTOP) ────────────────────────────────────
  private bindKeyboardShortcuts(): void {
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        this.closeBookPicker();
        this.closeVerseInspector();
        document.getElementById('bible-search-results-panel')?.classList.add('hidden');
        return;
      }

      if (this.currentTab === 'biblia' && ev.altKey) {
        if (ev.key === 'ArrowLeft') {
          ev.preventDefault();
          this.stepChapter(-1);
        } else if (ev.key === 'ArrowRight') {
          ev.preventDefault();
          this.stepChapter(1);
        }
      }
    });
  }

  private updateCounters(): void {
    const readChapters = storageService.getReadChapters().length;
    const studiesCount = storageService.getVerseStudies().length;

    const elProgress = document.getElementById('bible-progress-label');
    if (elProgress) {
      elProgress.textContent = `${readChapters} de 1.189 lidos`;
    }

    const desktopBadge = document.getElementById('badge-saved-count');
    const mobileBadge = document.getElementById('mobile-badge-saved-count');
    [desktopBadge, mobileBadge].forEach((badge) => {
      if (!badge) return;
      badge.textContent = String(studiesCount);
      badge.classList.toggle('hidden', studiesCount === 0);
    });
  }

  // ─── FAIXA DISCRETA DE VERSÍCULO EM DESTAQUE ─────────────────────────
  private initFeaturedVerseRibbon(): void {
    document.getElementById('btn-random-promise')?.addEventListener('click', () => {
      this.featuredIdx = (this.featuredIdx + 1) % FEATURED_PASSAGES.length;
      void this.renderFeaturedVerse();
    });

    document.getElementById('btn-open-featured-verse')?.addEventListener('click', () => {
      const ref = FEATURED_PASSAGES[this.featuredIdx];
      void this.navigateToScripture(ref.bookAbbrev, ref.chapter, ref.verseStart);
    });
  }

  private async renderFeaturedVerse(): Promise<void> {
    const ref = FEATURED_PASSAGES[this.featuredIdx];
    const resolved = await bibleService.resolvePassage(this.currentTranslation, ref);
    if (!resolved) return;

    const quoteEl = document.getElementById('hero-featured-quote');
    const refEl = document.getElementById('hero-featured-ref');
    if (quoteEl) quoteEl.textContent = cleanQuoteText(resolved.text);
    if (refEl) refEl.textContent = `${resolved.label} (${getTranslationCode(this.currentTranslation)})`;
  }

  // ─── TAB 1: LEITOR BÍBLICO EDITORIAL ─────────────────────────────────
  private initBibleReader(): void {
    document.getElementById('btn-prev-chapter')?.addEventListener('click', () => this.stepChapter(-1));
    document.getElementById('btn-next-chapter')?.addEventListener('click', () => this.stepChapter(1));
    document.getElementById('btn-prev-chapter-bottom')?.addEventListener('click', () => this.stepChapter(-1));
    document.getElementById('btn-next-chapter-bottom')?.addEventListener('click', () => this.stepChapter(1));

    document.getElementById('btn-mark-chapter-read')?.addEventListener('click', () => {
      storageService.toggleChapterRead(this.currentBookAbbrev, this.currentChapter);
      this.updateChapterReadButton();
      this.updateCounters();
    });

    document.getElementById('btn-font-decrease')?.addEventListener('click', () => {
      this.fontSize = Math.max(15, this.fontSize - 2);
      storageService.setFontSize(this.fontSize);
      this.applyVerseFontSize();
    });

    document.getElementById('btn-font-increase')?.addEventListener('click', () => {
      this.fontSize = Math.min(27, this.fontSize + 2);
      storageService.setFontSize(this.fontSize);
      this.applyVerseFontSize();
    });

    const btnOverview = document.getElementById('btn-toggle-overview');
    const overviewCard = document.getElementById('book-overview-card');
    const toggleOverview = (forceClose = false) => {
      if (!overviewCard) return;
      const shouldHide = forceClose ? true : !overviewCard.classList.contains('hidden');
      overviewCard.classList.toggle('hidden', shouldHide);
      btnOverview?.classList.toggle('active', !shouldHide);
    };

    btnOverview?.addEventListener('click', () => toggleOverview(false));
    document.getElementById('btn-close-overview')?.addEventListener('click', () => toggleOverview(true));

    const inputSearch = document.getElementById('input-bible-search') as HTMLInputElement | null;
    const btnSearch = document.getElementById('btn-bible-search');
    const runSearch = () => {
      if (inputSearch) void this.executeBibleSearch(inputSearch.value);
    };
    btnSearch?.addEventListener('click', runSearch);
    inputSearch?.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') runSearch();
    });
    document.getElementById('btn-close-search-results')?.addEventListener('click', () => {
      document.getElementById('bible-search-results-panel')?.classList.add('hidden');
    });

    this.bindVerseInspectorEvents();
  }

  // ─── MODAL VISUAL DE LIVROS E CAPÍTULOS ──────────────────────────────
  private initBookPickerModal(): void {
    const trigger = document.getElementById('btn-open-book-picker');
    const modal = document.getElementById('book-picker-modal');
    const closeBtn = document.getElementById('btn-close-book-picker');
    const filterInput = document.getElementById('input-picker-book-filter') as HTMLInputElement | null;
    const backBtn = document.getElementById('btn-picker-back-books');

    trigger?.addEventListener('click', () => this.openBookPicker());
    closeBtn?.addEventListener('click', () => this.closeBookPicker());
    modal?.addEventListener('click', (ev) => {
      if (ev.target === modal) this.closeBookPicker();
    });

    document.querySelectorAll<HTMLButtonElement>('[data-picker-testament]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.pickerTestament = (btn.getAttribute('data-picker-testament') as 'ALL' | 'AT' | 'NT') || 'ALL';
        document.querySelectorAll('[data-picker-testament]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.showPickerBooksView();
      });
    });

    filterInput?.addEventListener('input', () => {
      this.pickerFilterQuery = filterInput.value;
      this.showPickerBooksView();
    });

    backBtn?.addEventListener('click', () => {
      this.pickerPendingBookAbbrev = null;
      this.showPickerBooksView();
    });
  }

  private openBookPicker(): void {
    const modal = document.getElementById('book-picker-modal');
    const trigger = document.getElementById('btn-open-book-picker');
    const filterInput = document.getElementById('input-picker-book-filter') as HTMLInputElement | null;

    this.pickerPendingBookAbbrev = null;
    this.pickerFilterQuery = '';
    if (filterInput) filterInput.value = '';

    this.showPickerBooksView();
    modal?.classList.remove('hidden');
    trigger?.setAttribute('aria-expanded', 'true');
  }

  private closeBookPicker(): void {
    document.getElementById('book-picker-modal')?.classList.add('hidden');
    document.getElementById('btn-open-book-picker')?.setAttribute('aria-expanded', 'false');
  }

  private showPickerBooksView(): void {
    const booksView = document.getElementById('picker-books-view');
    const chaptersView = document.getElementById('picker-chapters-view');
    const subtitle = document.getElementById('book-picker-subtitle');
    if (!booksView || !chaptersView) return;

    booksView.classList.remove('hidden');
    chaptersView.classList.add('hidden');
    if (subtitle) subtitle.textContent = 'Selecione um livro das Escrituras e depois o capítulo.';

    const normQuery = bibleService.normalizeText(this.pickerFilterQuery);
    const filtered = this.booksList.filter((book) => {
      if (this.pickerTestament !== 'ALL' && book.testament !== this.pickerTestament) return false;
      if (!normQuery) return true;
      return (
        bibleService.normalizeText(book.name).includes(normQuery) ||
        bibleService.normalizeText(book.abbrev).includes(normQuery)
      );
    });

    booksView.textContent = '';

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'results-meta';
      empty.textContent = 'Nenhum livro encontrado com esse filtro.';
      booksView.appendChild(empty);
      return;
    }

    for (const division of DIVISION_ORDER) {
      const groupBooks = filtered.filter((b) => BOOKS_METADATA[b.abbrev]?.division === division);
      if (groupBooks.length === 0) continue;

      const groupEl = document.createElement('div');
      groupEl.className = 'picker-division-group';

      const heading = document.createElement('div');
      heading.className = 'picker-division-title';
      heading.textContent = division;

      const grid = document.createElement('div');
      grid.className = 'picker-books-grid';

      for (const book of groupBooks) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `picker-book-btn ${book.abbrev === this.currentBookAbbrev ? 'current' : ''}`;

        const nameSpan = document.createElement('span');
        nameSpan.textContent = book.name;

        const countSpan = document.createElement('span');
        countSpan.className = 'picker-book-chaps';
        countSpan.textContent = String(book.chapters.length);

        btn.appendChild(nameSpan);
        btn.appendChild(countSpan);

        btn.addEventListener('click', () => {
          if (book.chapters.length === 1) {
            this.closeBookPicker();
            void this.navigateToScripture(book.abbrev, 1);
          } else {
            this.showPickerChaptersView(book);
          }
        });

        grid.appendChild(btn);
      }

      groupEl.appendChild(heading);
      groupEl.appendChild(grid);
      booksView.appendChild(groupEl);
    }
  }

  private showPickerChaptersView(book: BibleBook): void {
    const booksView = document.getElementById('picker-books-view');
    const chaptersView = document.getElementById('picker-chapters-view');
    const bookNameEl = document.getElementById('picker-selected-book-name');
    const grid = document.getElementById('picker-chapters-grid');
    const subtitle = document.getElementById('book-picker-subtitle');
    if (!booksView || !chaptersView || !grid) return;

    this.pickerPendingBookAbbrev = book.abbrev;
    booksView.classList.add('hidden');
    chaptersView.classList.remove('hidden');

    if (bookNameEl) bookNameEl.textContent = `${book.name} (${book.chapters.length} capítulos)`;
    if (subtitle) subtitle.textContent = `Escolha o capítulo de ${book.name}.`;

    grid.textContent = '';
    for (let ch = 1; ch <= book.chapters.length; ch++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isCurrent = book.abbrev === this.currentBookAbbrev && ch === this.currentChapter;
      btn.className = `picker-chap-btn ${isCurrent ? 'current' : ''}`;
      btn.textContent = String(ch);
      btn.addEventListener('click', () => {
        const targetAbbrev = this.pickerPendingBookAbbrev || book.abbrev;
        this.closeBookPicker();
        void this.navigateToScripture(targetAbbrev, ch);
      });
      grid.appendChild(btn);
    }
  }

  private stepChapter(delta: number): void {
    const bookIdx = this.booksList.findIndex((b) => b.abbrev === this.currentBookAbbrev);
    if (bookIdx === -1) return;

    const currentBook = this.booksList[bookIdx];
    const nextChap = this.currentChapter + delta;

    if (nextChap >= 1 && nextChap <= currentBook.chapters.length) {
      this.currentChapter = nextChap;
    } else if (delta > 0 && bookIdx + 1 < this.booksList.length) {
      this.currentBookAbbrev = this.booksList[bookIdx + 1].abbrev;
      this.currentChapter = 1;
    } else if (delta < 0 && bookIdx - 1 >= 0) {
      const prevBook = this.booksList[bookIdx - 1];
      this.currentBookAbbrev = prevBook.abbrev;
      this.currentChapter = prevBook.chapters.length;
    } else {
      return;
    }

    this.closeVerseInspector();
    void this.renderCurrentChapter().then(() => {
      document.getElementById('heading-biblia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  private renderBookOverview(): void {
    const meta = BOOKS_METADATA[this.currentBookAbbrev];
    if (!meta) return;

    const setEl = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setEl('overview-division', `${meta.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'} • ${meta.division}`);
    setEl('overview-book-title', meta.name);
    setEl('overview-author', meta.author);
    setEl('overview-date', meta.dateWritten);
    setEl('overview-summary', meta.summary);
    setEl('overview-christ', meta.christConnection);
    setEl('overview-key-ref', meta.keyVerseRef);
    setEl('overview-key-text', cleanQuoteText(meta.keyVerseText));
  }

  private updateChapterReadButton(): void {
    const isRead = storageService.isChapterRead(this.currentBookAbbrev, this.currentChapter);
    const btn = document.getElementById('btn-mark-chapter-read');
    if (btn) {
      btn.classList.toggle('is-read', isRead);
      btn.textContent = isRead ? 'Capítulo lido' : 'Marcar como lido';
    }
  }

  private applyVerseFontSize(): void {
    document.querySelectorAll<HTMLElement>('.verse-row').forEach((row) => {
      row.style.fontSize = `${this.fontSize}px`;
    });
  }

  private async renderCurrentChapter(): Promise<void> {
    const seq = ++this.chapterRenderSeq;
    storageService.setLastLocation(this.currentBookAbbrev, this.currentChapter);
    this.renderBookOverview();
    this.updateChapterReadButton();

    const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    if (!book) return;

    const transMeta = BIBLE_TRANSLATIONS.find((t) => t.id === this.currentTranslation);
    const badge = document.getElementById('reader-translation-badge');
    const heading = document.getElementById('heading-biblia');
    const pickerLabel = document.getElementById('picker-current-label');

    if (badge) badge.textContent = transMeta ? `${transMeta.code} • ${transMeta.name}` : 'ACF';
    if (heading) heading.textContent = `${book.name} ${this.currentChapter}`;
    if (pickerLabel) pickerLabel.textContent = `${book.name} ${this.currentChapter}`;

    const verses = await bibleService.getChapterVerses(
      this.currentTranslation,
      this.currentBookAbbrev,
      this.currentChapter
    );
    if (seq !== this.chapterRenderSeq) return;

    const container = document.getElementById('bible-verses-container');
    if (!container) return;

    const savedStudies = storageService.getVerseStudies();
    const frag = document.createDocumentFragment();

    verses.forEach((verseText, idx) => {
      const verseNumber = idx + 1;
      const studyId = `${this.currentBookAbbrev}:${this.currentChapter}:${verseNumber}`;
      const existingStudy = savedStudies.find((s) => s.id === studyId);

      const row = document.createElement('div');
      row.className = 'verse-row';
      row.id = `verse-row-${verseNumber}`;
      row.style.fontSize = `${this.fontSize}px`;
      row.setAttribute('role', 'button');
      row.setAttribute('tabindex', '0');

      if (existingStudy) {
        row.classList.add(`hl-${existingStudy.color}`);
      }
      if (this.selectedVerseNumber === verseNumber) {
        row.classList.add('selected');
      }

      const numSpan = document.createElement('span');
      numSpan.className = 'verse-num';
      numSpan.textContent = String(verseNumber);

      const textSpan = document.createElement('span');
      textSpan.className = 'verse-text';
      textSpan.textContent = verseText;

      row.appendChild(numSpan);
      row.appendChild(textSpan);

      if (existingStudy?.note) {
        const noteTag = document.createElement('span');
        noteTag.className = 'verse-note-indicator';
        noteTag.textContent = 'Nota';
        row.appendChild(noteTag);
      }

      const activateVerse = () => {
        if (this.selectedVerseNumber === verseNumber) {
          this.closeVerseInspector();
        } else {
          void this.selectVerseForInspection(verseNumber);
        }
      };

      row.addEventListener('click', activateVerse);
      row.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          activateVerse();
        }
      });

      frag.appendChild(row);
    });

    container.replaceChildren(frag);

    if (this.selectedVerseNumber) {
      await this.selectVerseForInspection(this.selectedVerseNumber);
    }
  }

  private closeVerseInspector(): void {
    this.selectedVerseNumber = null;
    document.querySelectorAll('.verse-row').forEach((row) => row.classList.remove('selected'));
    document.getElementById('verse-study-sidebar')?.classList.add('hidden');
    document.getElementById('study-backdrop')?.classList.add('hidden');
    document.getElementById('bible-reader-grid')?.classList.remove('has-inspector');
  }

  private async selectVerseForInspection(verseNumber: number): Promise<void> {
    this.selectedVerseNumber = verseNumber;
    document.querySelectorAll('.verse-row').forEach((row) => {
      row.classList.toggle('selected', row.id === `verse-row-${verseNumber}`);
    });

    const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    if (!book) return;

    const sidebar = document.getElementById('verse-study-sidebar');
    const backdrop = document.getElementById('study-backdrop');
    const stageGrid = document.getElementById('bible-reader-grid');
    const refTitle = document.getElementById('inspector-verse-ref');
    const noteInput = document.getElementById('textarea-verse-note') as HTMLTextAreaElement | null;
    const comparisonList = document.getElementById('inspector-translations-list');

    sidebar?.classList.remove('hidden');
    backdrop?.classList.remove('hidden');
    stageGrid?.classList.add('has-inspector');

    if (refTitle) {
      refTitle.textContent = `${book.name} ${this.currentChapter}:${verseNumber}`;
    }

    const studyId = `${this.currentBookAbbrev}:${this.currentChapter}:${verseNumber}`;
    const existingStudy = storageService.getVerseStudyById(studyId);
    if (noteInput) {
      noteInput.value = existingStudy?.note || '';
    }

    const comparisons = await bibleService.compareVerseAcrossTranslations(
      this.currentBookAbbrev,
      this.currentChapter,
      verseNumber
    );

    if (comparisonList) {
      comparisonList.textContent = '';
      for (const comp of comparisons) {
        const card = document.createElement('div');
        card.className = 'comparison-version-card';

        const header = document.createElement('div');
        header.className = 'comparison-version-header';
        header.textContent = `${comp.code} — ${comp.name}`;

        const body = document.createElement('p');
        body.className = 'comparison-version-text';
        body.textContent = comp.text;

        card.appendChild(header);
        card.appendChild(body);
        comparisonList.appendChild(card);
      }
    }
  }

  private bindVerseInspectorEvents(): void {
    document.getElementById('btn-close-inspector')?.addEventListener('click', () => this.closeVerseInspector());
    document.getElementById('study-backdrop')?.addEventListener('click', () => this.closeVerseInspector());

    document.querySelectorAll<HTMLButtonElement>('.btn-color-swatch').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const color = btn.getAttribute('data-color') as HighlightColor | null;
        if (!color || !this.selectedVerseNumber) return;
        await this.persistCurrentVerseStudy(color);
      });
    });

    document.getElementById('btn-remove-highlight')?.addEventListener('click', async () => {
      if (!this.selectedVerseNumber) return;
      const studyId = `${this.currentBookAbbrev}:${this.currentChapter}:${this.selectedVerseNumber}`;
      storageService.removeVerseStudy(studyId);
      const noteInput = document.getElementById('textarea-verse-note') as HTMLTextAreaElement | null;
      if (noteInput) noteInput.value = '';
      await this.renderCurrentChapter();
      this.renderSavedStudiesList();
      this.updateCounters();
    });

    document.getElementById('btn-save-verse-note')?.addEventListener('click', async () => {
      if (!this.selectedVerseNumber) return;
      const studyId = `${this.currentBookAbbrev}:${this.currentChapter}:${this.selectedVerseNumber}`;
      const existing = storageService.getVerseStudyById(studyId);
      await this.persistCurrentVerseStudy(existing?.color || 'gold');
      const feedback = document.getElementById('note-saved-feedback');
      feedback?.classList.remove('hidden');
      setTimeout(() => feedback?.classList.add('hidden'), 1800);
    });

    document.getElementById('btn-copy-verse')?.addEventListener('click', async () => {
      if (!this.selectedVerseNumber) return;
      const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
      if (!book) return;
      const verses = await bibleService.getChapterVerses(
        this.currentTranslation,
        this.currentBookAbbrev,
        this.currentChapter
      );
      const text = verses[this.selectedVerseNumber - 1] || '';
      const formatted = `${cleanQuoteText(text)} — ${book.name} ${this.currentChapter}:${this.selectedVerseNumber} (${getTranslationCode(this.currentTranslation)})`;
      const ok = await copyTextSafe(formatted);
      if (ok) {
        const toast = document.getElementById('copy-feedback');
        toast?.classList.remove('hidden');
        setTimeout(() => toast?.classList.add('hidden'), 2000);
      }
    });
  }

  private async persistCurrentVerseStudy(color: HighlightColor): Promise<void> {
    if (!this.selectedVerseNumber) return;
    const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    if (!book) return;

    const verses = await bibleService.getChapterVerses(
      this.currentTranslation,
      this.currentBookAbbrev,
      this.currentChapter
    );
    const text = verses[this.selectedVerseNumber - 1] || '';
    const noteInput = document.getElementById('textarea-verse-note') as HTMLTextAreaElement | null;
    const note = noteInput?.value.trim() || '';

    storageService.saveVerseStudy({
      id: `${this.currentBookAbbrev}:${this.currentChapter}:${this.selectedVerseNumber}`,
      bookAbbrev: this.currentBookAbbrev,
      bookName: book.name,
      chapter: this.currentChapter,
      verse: this.selectedVerseNumber,
      text,
      translation: this.currentTranslation,
      color,
      note,
      createdAt: new Date().toISOString().slice(0, 10)
    });

    await this.renderCurrentChapter();
    this.renderSavedStudiesList();
    this.updateCounters();
  }

  private async executeBibleSearch(query: string): Promise<void> {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;

    const panel = document.getElementById('bible-search-results-panel');
    const title = document.getElementById('search-results-title');
    const list = document.getElementById('bible-search-results-list');
    if (!panel || !title || !list) return;

    panel.classList.remove('hidden');
    title.textContent = `Pesquisando por "${trimmed}"...`;
    list.textContent = '';

    const hits = await bibleService.searchBible(this.currentTranslation, trimmed, 'ALL', 60);

    title.textContent =
      hits.length > 0
        ? `${hits.length} ${hits.length === 1 ? 'versículo encontrado' : 'versículos encontrados'} para "${trimmed}"`
        : `Nenhum resultado encontrado para "${trimmed}".`;

    for (const hit of hits) {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'search-hit-card';

      const refSpan = document.createElement('span');
      refSpan.className = 'search-hit-ref';
      refSpan.textContent = `${hit.bookName} ${hit.chapter}:${hit.verse}`;

      const textP = document.createElement('p');
      textP.className = 'search-hit-text';
      textP.textContent = hit.text;

      card.appendChild(refSpan);
      card.appendChild(textP);

      card.addEventListener('click', () => {
        panel.classList.add('hidden');
        void this.navigateToScripture(hit.bookAbbrev, hit.chapter, hit.verse);
      });

      list.appendChild(card);
    }
  }

  public async navigateToScripture(bookAbbrev: string, chapter: number, verse?: number): Promise<void> {
    this.switchTab('biblia');
    this.currentBookAbbrev = bookAbbrev;
    this.currentChapter = chapter;
    this.selectedVerseNumber = verse || null;

    await this.renderCurrentChapter();

    if (verse) {
      const row = document.getElementById(`verse-row-${verse}`);
      row?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      document.getElementById('heading-biblia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ─── COMPONENTE REUTILIZÁVEL DE PASSAGEM BÍBLICA VERBATIM ────────────
  private createResolvedPassageCard(passage: ResolvedPassage): HTMLElement {
    const card = document.createElement('div');
    card.className = 'scripture-passage-card';

    const quoteP = document.createElement('p');
    quoteP.className = 'scripture-passage-text';
    quoteP.textContent = cleanQuoteText(passage.text);

    const footer = document.createElement('div');
    footer.className = 'scripture-passage-footer';

    const refSpan = document.createElement('span');
    refSpan.className = 'scripture-passage-ref';
    refSpan.textContent = `${passage.label} (${getTranslationCode(this.currentTranslation)})`;

    const actions = document.createElement('div');
    actions.className = 'passage-card-actions';

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn-passage-action';
    copyBtn.textContent = 'Copiar';
    copyBtn.addEventListener('click', async (ev) => {
      ev.stopPropagation();
      const formatted = `${cleanQuoteText(passage.text)} — ${passage.label} (${getTranslationCode(this.currentTranslation)})`;
      const ok = await copyTextSafe(formatted);
      if (ok) {
        copyBtn.textContent = 'Copiado';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar';
        }, 1600);
      }
    });

    const openBtn = document.createElement('button');
    openBtn.type = 'button';
    openBtn.className = 'btn-passage-action btn-passage-open';
    openBtn.textContent = 'Ler na Bíblia →';
    openBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      void this.navigateToScripture(passage.bookAbbrev, passage.chapter, passage.verseStart);
    });

    actions.appendChild(copyBtn);
    actions.appendChild(openBtn);
    footer.appendChild(refSpan);
    footer.appendChild(actions);

    card.appendChild(quoteP);
    card.appendChild(footer);
    return card;
  }

  // ─── TAB 2: DICIONÁRIO BÍBLICO (SOMENTE VERSÍCULOS) ──────────────────
  private initDictionarySection(): void {
    const allEntries = getSortedDictionaryEntries();
    const statEl = document.getElementById('dict-total-stat');
    if (statEl) {
      statEl.textContent = `${allEntries.length} palavras`;
    }

    // Popular quick chips
    const popularContainer = document.getElementById('dict-popular-chips');
    if (popularContainer) {
      popularContainer.textContent = '';
      for (const topicId of POPULAR_DICTIONARY_TOPICS) {
        const entry = allEntries.find((e) => e.id === topicId);
        if (!entry) continue;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'quick-topic-chip';
        chip.textContent = entry.title;
        chip.addEventListener('click', () => {
          this.currentDictQuery = '';
          this.currentDictCategory = 'TODAS';
          this.currentDictLetter = 'TODAS';
          const input = document.getElementById('input-dict-search') as HTMLInputElement | null;
          if (input) input.value = '';
          document.getElementById('btn-clear-dict-search')?.classList.add('hidden');
          this.activeDictEntryId = entry.id;
          this.syncDictionaryFilterButtons();
          this.renderDictionaryList();
          this.openMobileDictionaryDetail();
          void this.renderActiveDictionaryEntry();
        });
        popularContainer.appendChild(chip);
      }
    }

    // Categories
    const categoriesBar = document.getElementById('dict-categories-bar');
    if (categoriesBar) {
      const cats: ('TODAS' | DictionaryCategory)[] = ['TODAS', ...DICTIONARY_CATEGORIES];
      categoriesBar.textContent = '';
      for (const cat of cats) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `qa-cat-btn ${cat === this.currentDictCategory ? 'active' : ''}`;
        btn.setAttribute('data-dict-cat', cat);
        btn.textContent = cat === 'TODAS' ? 'Todas as categorias' : cat;
        btn.addEventListener('click', () => {
          this.currentDictCategory = cat;
          this.currentDictLetter = 'TODAS';
          this.syncDictionaryFilterButtons();
          this.renderDictionaryList(true);
        });
        categoriesBar.appendChild(btn);
      }
    }

    // Alphabet A–Z
    const alphaBar = document.getElementById('dict-alphabet-bar');
    const available = getAvailableLetters(allEntries);
    if (alphaBar) {
      alphaBar.textContent = '';
      const allBtn = document.createElement('button');
      allBtn.type = 'button';
      allBtn.className = 'alpha-btn active';
      allBtn.setAttribute('data-dict-letter', 'TODAS');
      allBtn.textContent = 'A–Z';
      allBtn.addEventListener('click', () => {
        this.currentDictLetter = 'TODAS';
        this.syncDictionaryFilterButtons();
        this.renderDictionaryList(true);
      });
      alphaBar.appendChild(allBtn);

      for (const letter of ALPHABET) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'alpha-btn';
        btn.setAttribute('data-dict-letter', letter);
        btn.textContent = letter;
        btn.disabled = !available.has(letter);
        btn.addEventListener('click', () => {
          this.currentDictLetter = letter;
          this.currentDictQuery = '';
          const input = document.getElementById('input-dict-search') as HTMLInputElement | null;
          if (input) input.value = '';
          document.getElementById('btn-clear-dict-search')?.classList.add('hidden');
          this.syncDictionaryFilterButtons();
          this.renderDictionaryList(true);
        });
        alphaBar.appendChild(btn);
      }
    }

    // Search input
    const searchInput = document.getElementById('input-dict-search') as HTMLInputElement | null;
    const clearBtn = document.getElementById('btn-clear-dict-search');

    searchInput?.addEventListener('input', () => {
      this.currentDictQuery = searchInput.value;
      clearBtn?.classList.toggle('hidden', this.currentDictQuery.trim().length === 0);
      if (this.currentDictQuery.trim().length > 0 && this.currentDictLetter !== 'TODAS') {
        this.currentDictLetter = 'TODAS';
        this.syncDictionaryFilterButtons();
      }
      this.renderDictionaryList(true);
    });

    clearBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      this.currentDictQuery = '';
      clearBtn.classList.add('hidden');
      this.renderDictionaryList(true);
      searchInput?.focus();
    });

    // Mobile back button
    document.getElementById('btn-dict-back-mobile')?.addEventListener('click', () => {
      document.getElementById('dict-workspace')?.classList.remove('mobile-show-detail');
    });

    this.renderDictionaryList(false);
  }

  private syncDictionaryFilterButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-dict-cat]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-dict-cat') === this.currentDictCategory);
    });
    document.querySelectorAll<HTMLButtonElement>('[data-dict-letter]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-dict-letter') === this.currentDictLetter);
    });
  }

  private openMobileDictionaryDetail(): void {
    const ws = document.getElementById('dict-workspace');
    ws?.classList.add('mobile-show-detail');
    if (window.innerWidth <= 920) {
      document.getElementById('dict-detail-col')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private renderDictionaryList(autoSelectFirst = false): void {
    const listEl = document.getElementById('dict-topics-list');
    const metaEl = document.getElementById('dict-results-meta');
    if (!listEl) return;

    const results = searchDictionary(this.currentDictQuery, this.currentDictCategory, this.currentDictLetter);

    if (metaEl) {
      metaEl.textContent = `${results.length} ${results.length === 1 ? 'palavra encontrada' : 'palavras encontradas'}`;
    }

    listEl.textContent = '';

    if (results.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state-box';
      const h3 = document.createElement('h3');
      h3.textContent = 'Nenhuma palavra encontrada';
      const p = document.createElement('p');
      p.textContent = 'Tente outra palavra, expressão ou limpe os filtros de categoria e letra.';
      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.className = 'btn-primary-action';
      resetBtn.textContent = 'Mostrar todas as palavras';
      resetBtn.addEventListener('click', () => {
        this.currentDictQuery = '';
        this.currentDictCategory = 'TODAS';
        this.currentDictLetter = 'TODAS';
        const input = document.getElementById('input-dict-search') as HTMLInputElement | null;
        if (input) input.value = '';
        document.getElementById('btn-clear-dict-search')?.classList.add('hidden');
        this.syncDictionaryFilterButtons();
        this.renderDictionaryList(true);
      });
      empty.appendChild(h3);
      empty.appendChild(p);
      empty.appendChild(resetBtn);
      listEl.appendChild(empty);
      return;
    }

    if (autoSelectFirst && !results.some((r) => r.id === this.activeDictEntryId)) {
      this.activeDictEntryId = results[0].id;
      void this.renderActiveDictionaryEntry();
    } else if (autoSelectFirst && this.currentDictQuery.trim().length > 0) {
      this.activeDictEntryId = results[0].id;
      void this.renderActiveDictionaryEntry();
    }

    for (const entry of results) {
      const isSelected = entry.id === this.activeDictEntryId;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `dict-topic-btn ${isSelected ? 'active' : ''}`;
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(isSelected));

      const titleSpan = document.createElement('span');
      titleSpan.className = 'dict-topic-name';
      titleSpan.textContent = entry.title;

      const metaSpan = document.createElement('span');
      metaSpan.className = 'dict-topic-meta';
      metaSpan.textContent = `${entry.category} • ${entry.passages.length} ${entry.passages.length === 1 ? 'passagem' : 'passagens'}`;

      btn.appendChild(titleSpan);
      btn.appendChild(metaSpan);

      btn.addEventListener('click', () => {
        this.activeDictEntryId = entry.id;
        listEl.querySelectorAll('.dict-topic-btn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        this.openMobileDictionaryDetail();
        void this.renderActiveDictionaryEntry();
      });

      listEl.appendChild(btn);
    }
  }

  private async renderActiveDictionaryEntry(): Promise<void> {
    const seq = ++this.dictRenderSeq;
    const container = document.getElementById('dict-detail-content');
    if (!container) return;

    const allEntries = getSortedDictionaryEntries();
    const entry = allEntries.find((e) => e.id === this.activeDictEntryId) || allEntries[0];
    if (!entry) return;

    const resolvedPassages = await bibleService.resolvePassages(this.currentTranslation, entry.passages);
    if (seq !== this.dictRenderSeq) return;

    const frag = document.createDocumentFragment();

    const header = document.createElement('header');
    header.className = 'dict-detail-header';

    const headerLeft = document.createElement('div');
    const kicker = document.createElement('span');
    kicker.className = 'meta-kicker';
    kicker.textContent = entry.category;

    const title = document.createElement('h3');
    title.className = 'dict-detail-title';
    title.textContent = entry.title;

    const sub = document.createElement('p');
    sub.className = 'dict-detail-sub';
    sub.textContent = `Referências bíblicas • ${resolvedPassages.length} passagens na tradução ${getTranslationCode(this.currentTranslation)}`;

    headerLeft.appendChild(kicker);
    headerLeft.appendChild(title);
    headerLeft.appendChild(sub);

    const copyAllBtn = document.createElement('button');
    copyAllBtn.type = 'button';
    copyAllBtn.className = 'btn-action-pill';
    copyAllBtn.textContent = 'Copiar versículos';
    copyAllBtn.addEventListener('click', async () => {
      const code = getTranslationCode(this.currentTranslation);
      const bundle = [
        `${entry.title} (${code})`,
        '',
        ...resolvedPassages.map((p) => `${cleanQuoteText(p.text)} — ${p.label}`)
      ].join('\n');
      const ok = await copyTextSafe(bundle);
      if (ok) {
        copyAllBtn.textContent = 'Copiado';
        setTimeout(() => {
          copyAllBtn.textContent = 'Copiar versículos';
        }, 1800);
      }
    });

    header.appendChild(headerLeft);
    header.appendChild(copyAllBtn);

    const stack = document.createElement('div');
    stack.className = 'passages-stack';
    for (const passage of resolvedPassages) {
      stack.appendChild(this.createResolvedPassageCard(passage));
    }

    frag.appendChild(header);
    frag.appendChild(stack);
    container.replaceChildren(frag);
  }

  // ─── TAB 3: REFÚGIO NAS ESCRITURAS (SEM PALAVRA PASTORAL) ────────────
  private initRefugioSection(): void {
    const grid = document.getElementById('refugio-states-grid');
    if (!grid) return;

    grid.textContent = '';
    for (const item of REFUGIO_BIBLICO_DATA) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `refugio-state-btn ${item.id === this.activeRefugioId ? 'active' : ''}`;

      const titleSpan = document.createElement('span');
      titleSpan.className = 'refugio-state-title';
      titleSpan.textContent = item.stateTitle;

      const subSpan = document.createElement('span');
      subSpan.className = 'refugio-state-sub';
      subSpan.textContent = item.subtitle;

      btn.appendChild(titleSpan);
      btn.appendChild(subSpan);

      btn.addEventListener('click', () => {
        this.activeRefugioId = item.id;
        grid.querySelectorAll('.refugio-state-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        void this.renderActiveRefugio();
        if (window.innerWidth <= 860) {
          document.getElementById('refugio-active-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      grid.appendChild(btn);
    }
  }

  private async renderActiveRefugio(): Promise<void> {
    const seq = ++this.refugioRenderSeq;
    const detail = document.getElementById('refugio-active-detail');
    if (!detail) return;

    const item = REFUGIO_BIBLICO_DATA.find((r) => r.id === this.activeRefugioId) || REFUGIO_BIBLICO_DATA[0];
    const resolvedPassages = await bibleService.resolvePassages(this.currentTranslation, item.passages);
    if (seq !== this.refugioRenderSeq) return;

    const frag = document.createDocumentFragment();

    const header = document.createElement('header');
    header.className = 'dict-detail-header';

    const left = document.createElement('div');
    const kicker = document.createElement('span');
    kicker.className = 'meta-kicker';
    kicker.textContent = `Escrituras para este momento • ${getTranslationCode(this.currentTranslation)}`;

    const title = document.createElement('h3');
    title.className = 'dict-detail-title';
    title.textContent = item.stateTitle;

    left.appendChild(kicker);
    left.appendChild(title);
    header.appendChild(left);

    const stack = document.createElement('div');
    stack.className = 'passages-stack';
    for (const passage of resolvedPassages) {
      stack.appendChild(this.createResolvedPassageCard(passage));
    }

    frag.appendChild(header);
    frag.appendChild(stack);
    detail.replaceChildren(frag);
  }

  // ─── TAB 4: TIRA-DÚVIDAS BÍBLICO ─────────────────────────────────────
  private initQASection(): void {
    const categoriesBar = document.getElementById('qa-categories-bar');
    const searchInput = document.getElementById('input-qa-search') as HTMLInputElement | null;

    if (categoriesBar) {
      const allCats: ('TODAS' | QACategory)[] = ['TODAS', ...QA_CATEGORIES];
      categoriesBar.textContent = '';

      allCats.forEach((cat) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `qa-cat-btn ${cat === this.currentQACategory ? 'active' : ''}`;
        btn.textContent = cat === 'TODAS' ? 'Todas' : cat;
        btn.addEventListener('click', () => {
          this.currentQACategory = cat;
          categoriesBar.querySelectorAll('.qa-cat-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          void this.renderQACards();
        });
        categoriesBar.appendChild(btn);
      });
    }

    searchInput?.addEventListener('input', () => {
      this.currentQAQuery = searchInput.value;
      void this.renderQACards();
    });
  }

  private async renderQACards(): Promise<void> {
    const seq = ++this.qaRenderSeq;
    const container = document.getElementById('qa-cards-container');
    const counter = document.getElementById('qa-results-counter');
    if (!container) return;

    const results = searchQuestions(this.currentQAQuery, this.currentQACategory);
    if (counter) {
      counter.textContent = `${results.length} ${results.length === 1 ? 'pergunta encontrada' : 'perguntas encontradas'} — clique em qualquer pergunta para ler o estudo completo`;
    }

    const frag = document.createDocumentFragment();

    for (const qa of results) {
      const isExpanded = this.expandedQAIds.has(qa.id) || this.currentQAQuery.trim().length > 2;
      const card = document.createElement('article');
      card.className = `qa-card ${isExpanded ? 'expanded' : ''}`;

      const header = document.createElement('div');
      header.className = 'qa-card-header';
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', String(isExpanded));

      const headerLeft = document.createElement('div');
      const catBadge = document.createElement('span');
      catBadge.className = 'meta-kicker';
      catBadge.textContent = qa.category;

      const qTitle = document.createElement('h3');
      qTitle.className = 'qa-card-question';
      qTitle.textContent = qa.question;

      const shortP = document.createElement('p');
      shortP.className = 'qa-short-answer';
      shortP.textContent = qa.shortAnswer;

      headerLeft.appendChild(catBadge);
      headerLeft.appendChild(qTitle);
      headerLeft.appendChild(shortP);

      const toggleIndicator = document.createElement('span');
      toggleIndicator.className = 'qa-toggle-indicator';
      toggleIndicator.textContent = isExpanded ? 'Recolher' : 'Ler estudo';

      header.appendChild(headerLeft);
      header.appendChild(toggleIndicator);

      const expandableBody = document.createElement('div');
      expandableBody.className = `qa-expandable-body ${isExpanded ? '' : 'hidden'}`;

      const detailedDiv = document.createElement('div');
      detailedDiv.className = 'qa-detailed-paragraphs';
      qa.detailedExplanation.forEach((para) => {
        const p = document.createElement('p');
        p.textContent = para;
        detailedDiv.appendChild(p);
      });

      const practicalBox = document.createElement('div');
      practicalBox.className = 'qa-practical-box';
      const strongLabel = document.createElement('strong');
      strongLabel.textContent = 'Aplicação prática: ';
      const spanPrac = document.createElement('span');
      spanPrac.textContent = qa.practicalApplication;
      practicalBox.appendChild(strongLabel);
      practicalBox.appendChild(spanPrac);

      const refsContainer = document.createElement('div');
      refsContainer.className = 'qa-refs-list';
      const passageRefs: VersePassageRef[] = qa.references.map((r) => ({
        bookAbbrev: r.bookAbbrev,
        chapter: r.chapter,
        verseStart: r.verse,
        verseEnd: r.verseEnd
      }));
      const resolvedRefs = await bibleService.resolvePassages(this.currentTranslation, passageRefs);
      if (seq !== this.qaRenderSeq) return;
      for (const resolved of resolvedRefs) {
        refsContainer.appendChild(this.createResolvedPassageCard(resolved));
      }

      expandableBody.appendChild(detailedDiv);
      expandableBody.appendChild(practicalBox);
      expandableBody.appendChild(refsContainer);

      const toggleCard = () => {
        const nowHidden = expandableBody.classList.toggle('hidden');
        const expanded = !nowHidden;
        card.classList.toggle('expanded', expanded);
        header.setAttribute('aria-expanded', String(expanded));
        toggleIndicator.textContent = expanded ? 'Recolher' : 'Ler estudo';
        if (expanded) {
          this.expandedQAIds.add(qa.id);
        } else {
          this.expandedQAIds.delete(qa.id);
        }
      };

      header.addEventListener('click', toggleCard);
      header.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          toggleCard();
        }
      });

      card.appendChild(header);
      card.appendChild(expandableBody);
      frag.appendChild(card);
    }

    if (seq !== this.qaRenderSeq) return;
    container.replaceChildren(frag);
  }

  // ─── TAB 5: MINHAS MARCAÇÕES (VERSÍCULOS GRIFADOS & NOTAS) ───────────
  private initMarcacoesSection(): void {
    const searchInput = document.getElementById('input-studies-search') as HTMLInputElement | null;
    searchInput?.addEventListener('input', () => {
      this.currentStudyQuery = searchInput.value;
      this.renderSavedStudiesList();
    });

    document.querySelectorAll<HTMLButtonElement>('[data-study-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.currentStudyFilter =
          (btn.getAttribute('data-study-filter') as 'ALL' | 'NOTES' | HighlightColor) || 'ALL';
        document.querySelectorAll('[data-study-filter]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderSavedStudiesList();
      });
    });

    this.renderSavedStudiesList();
  }

  private renderSavedStudiesList(): void {
    const container = document.getElementById('saved-studies-container');
    if (!container) return;

    const allStudies = storageService.getVerseStudies();
    const normQ = bibleService.normalizeText(this.currentStudyQuery);

    const filtered = allStudies.filter((st) => {
      if (this.currentStudyFilter === 'NOTES' && !st.note.trim()) return false;
      if (
        this.currentStudyFilter !== 'ALL' &&
        this.currentStudyFilter !== 'NOTES' &&
        st.color !== this.currentStudyFilter
      ) {
        return false;
      }
      if (!normQ) return true;
      const hay = bibleService.normalizeText(`${st.bookName} ${st.chapter}:${st.verse} ${st.text} ${st.note}`);
      return hay.includes(normQ);
    });

    container.textContent = '';

    if (allStudies.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state-box';

      const h3 = document.createElement('h3');
      h3.textContent = 'Nenhum versículo marcado ainda';

      const p = document.createElement('p');
      p.textContent =
        'Na aba Bíblia, toque em qualquer versículo para grifar por categoria ou registrar uma anotação pessoal de estudo.';

      const goBtn = document.createElement('button');
      goBtn.type = 'button';
      goBtn.className = 'btn-primary-action';
      goBtn.textContent = 'Abrir a Bíblia';
      goBtn.addEventListener('click', () => this.switchTab('biblia'));

      empty.appendChild(h3);
      empty.appendChild(p);
      empty.appendChild(goBtn);
      container.appendChild(empty);
      return;
    }

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state-box';
      const p = document.createElement('p');
      p.textContent = 'Nenhuma marcação corresponde ao filtro selecionado.';
      empty.appendChild(p);
      container.appendChild(empty);
      return;
    }

    for (const st of filtered) {
      const card = document.createElement('article');
      card.className = `saved-study-card hl-${st.color}`;

      const top = document.createElement('div');
      top.className = 'study-card-top';

      const refStrong = document.createElement('strong');
      refStrong.className = 'study-card-ref';
      refStrong.textContent = `${st.bookName} ${st.chapter}:${st.verse} (${getTranslationCode(st.translation)})`;

      const colorTag = document.createElement('span');
      colorTag.className = 'study-card-tag';
      colorTag.textContent = HIGHLIGHT_LABELS[st.color] || 'Grifado';

      top.appendChild(refStrong);
      top.appendChild(colorTag);

      const quoteP = document.createElement('p');
      quoteP.className = 'study-card-quote';
      quoteP.textContent = cleanQuoteText(st.text);

      card.appendChild(top);
      card.appendChild(quoteP);

      if (st.note) {
        const noteBox = document.createElement('p');
        noteBox.className = 'study-card-note';
        noteBox.textContent = `Anotação: ${st.note}`;
        card.appendChild(noteBox);
      }

      const footer = document.createElement('div');
      footer.className = 'study-card-footer';

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-passage-action';
      removeBtn.textContent = 'Remover';
      removeBtn.addEventListener('click', () => {
        storageService.removeVerseStudy(st.id);
        this.renderSavedStudiesList();
        this.updateCounters();
        void this.renderCurrentChapter();
      });

      const rightActions = document.createElement('div');
      rightActions.className = 'passage-card-actions';

      const copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'btn-passage-action';
      copyBtn.textContent = 'Copiar';
      copyBtn.addEventListener('click', async () => {
        const formatted = `${cleanQuoteText(st.text)} — ${st.bookName} ${st.chapter}:${st.verse} (${getTranslationCode(st.translation)})`;
        const ok = await copyTextSafe(formatted);
        if (ok) {
          copyBtn.textContent = 'Copiado';
          setTimeout(() => {
            copyBtn.textContent = 'Copiar';
          }, 1600);
        }
      });

      const openBtn = document.createElement('button');
      openBtn.type = 'button';
      openBtn.className = 'btn-passage-action btn-passage-open';
      openBtn.textContent = 'Abrir na Bíblia →';
      openBtn.addEventListener('click', () => {
        void this.navigateToScripture(st.bookAbbrev, st.chapter, st.verse);
      });

      rightActions.appendChild(copyBtn);
      rightActions.appendChild(openBtn);
      footer.appendChild(removeBtn);
      footer.appendChild(rightActions);
      card.appendChild(footer);

      container.appendChild(card);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new VerboVivoApp();
  void app.init();

  const isNativeCapacitor = Boolean(
    (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.()
  );

  if (!isNativeCapacitor && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    const swUrl = `${import.meta.env.BASE_URL || './'}sw.js`;
    navigator.serviceWorker.register(swUrl).catch(() => {
      // Silencioso em ambientes locais
    });
  }
});
