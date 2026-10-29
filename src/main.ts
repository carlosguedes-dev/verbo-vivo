import './style.css';
import type {
  BibleBook,
  BibleTranslationId,
  HighlightColor,
  QACategory,
  ScriptureReference
} from './types';
import { BOOKS_METADATA, BIBLE_TRANSLATIONS } from './data/books-metadata';
import { QA_CATEGORIES } from './data/tira-duvidas';
import { REFUGIO_BIBLICO_DATA } from './data/refugio-biblico';
import { DEVOCIONAIS_DATA } from './data/devocionais';
import { PLANOS_LEITURA_DATA } from './data/planos-leitura';
import { bibleService } from './services/bible-service';
import { searchQuestions } from './services/qa-engine';
import { storageService } from './services/storage-service';

const PROMISES_POOL: ScriptureReference[] = [
  {
    bookAbbrev: 'sl',
    chapter: 119,
    verse: 105,
    label: 'Salmos 119:105',
    quote: 'Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.'
  },
  {
    bookAbbrev: 'hb',
    chapter: 4,
    verse: 12,
    label: 'Hebreus 4:12',
    quote: 'Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes.'
  },
  {
    bookAbbrev: 'jo',
    chapter: 3,
    verse: 16,
    label: 'João 3:16',
    quote: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
  },
  {
    bookAbbrev: 'rm',
    chapter: 8,
    verse: 28,
    label: 'Romanos 8:28',
    quote: 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.'
  },
  {
    bookAbbrev: 'js',
    chapter: 1,
    verse: 9,
    label: 'Josué 1:9',
    quote: 'Esforça-te, e tem bom ânimo; não pasmes, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.'
  },
  {
    bookAbbrev: 'sl',
    chapter: 23,
    verse: 1,
    label: 'Salmos 23:1',
    quote: 'O Senhor é o meu pastor, nada me faltará.'
  },
  {
    bookAbbrev: 'is',
    chapter: 41,
    verse: 10,
    label: 'Isaías 41:10',
    quote: 'Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo.'
  },
  {
    bookAbbrev: 'lm',
    chapter: 3,
    verse: 22,
    label: 'Lamentações 3:22-23',
    quote: 'As misericórdias do Senhor são a causa de não sermos consumidos... novas são cada manhã; grande é a tua fidelidade.'
  }
];

class VerboVivoApp {
  private currentTranslation: BibleTranslationId = storageService.getTranslation();
  private currentTestamentFilter: 'ALL' | 'AT' | 'NT' = 'ALL';
  private currentBookAbbrev: string = storageService.getLastLocation().bookAbbrev;
  private currentChapter: number = storageService.getLastLocation().chapter;
  private selectedVerseNumber: number | null = null;
  private fontSize: number = storageService.getFontSize();
  private booksList: BibleBook[] = [];

  private currentQACategory: QACategory | 'TODAS' = 'TODAS';
  private currentQAQuery = '';
  private expandedQAIds: Set<string> = new Set(['certeza-da-salvacao']);
  private activeRefugioId = REFUGIO_BIBLICO_DATA[0].id;
  private activeDevotionalId = DEVOCIONAIS_DATA[0].id;
  private activePlanId = PLANOS_LEITURA_DATA[0].id;
  private featuredPromise: ScriptureReference = PROMISES_POOL[0];

  public async init(): Promise<void> {
    this.initTheme();
    this.bindGlobalNavigation();
    this.bindHeroPromise();
    this.updateCounters();

    this.initQASection();
    this.initRefugioSection();
    this.initDevotionalAndPlansSection();
    this.initSecretoSection();

    await this.initBibleReader();
  }

  // ─── TEMA (ESCURO / CLARO) ───────────────────────────────────────────
  private initTheme(): void {
    const savedTheme = storageService.getTheme();
    this.applyTheme(savedTheme);

    const btnTheme = document.getElementById('btn-theme-toggle');
    btnTheme?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      storageService.setTheme(next);
    });
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon && label) {
      if (theme === 'dark') {
        icon.textContent = '☀️';
        label.textContent = 'Claro';
      } else {
        icon.textContent = '🌙';
        label.textContent = 'Escuro';
      }
    }
  }

  // ─── NAVEGAÇÃO ENTRE ABAS E SUBVIEWS ─────────────────────────────────
  private bindGlobalNavigation(): void {
    const navButtons = document.querySelectorAll<HTMLButtonElement>('.nav-tab');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        if (target) this.switchTab(target);
      });
    });

    // Subviews de Devocional & Planos
    document.querySelectorAll<HTMLButtonElement>('[data-devo-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-devo-view');
        document.querySelectorAll('[data-devo-view]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('devo-subview-meditacao')?.classList.toggle('hidden', view !== 'meditacao');
        document.getElementById('devo-subview-planos')?.classList.toggle('hidden', view !== 'planos');
      });
    });
  }

  public switchTab(tabId: string): void {
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
  }

  // ─── PROMESSA NO HERO MINIMALISTA ────────────────────────────────────
  private bindHeroPromise(): void {
    const btnRandom = document.getElementById('btn-random-promise');
    const featuredQuote = document.getElementById('hero-featured-quote');
    const featuredRef = document.getElementById('hero-featured-ref');
    const btnOpenFeatured = document.getElementById('btn-open-featured-verse');

    let idx = 0;
    btnRandom?.addEventListener('click', () => {
      idx = (idx + 1) % PROMISES_POOL.length;
      this.featuredPromise = PROMISES_POOL[idx];
      if (featuredQuote) featuredQuote.textContent = `"${this.featuredPromise.quote}"`;
      if (featuredRef) featuredRef.textContent = this.featuredPromise.label;
    });

    btnOpenFeatured?.addEventListener('click', () => {
      void this.navigateToScripture(
        this.featuredPromise.bookAbbrev,
        this.featuredPromise.chapter,
        this.featuredPromise.verse
      );
    });
  }

  private updateCounters(): void {
    const readChapters = storageService.getReadChapters().length;
    const studiesCount = storageService.getVerseStudies().length;
    const totalPrayers = storageService.getPrayers().length;

    const elProgress = document.getElementById('bible-progress-label');
    const elBadge = document.getElementById('badge-saved-count');

    if (elProgress) {
      elProgress.textContent = `${readChapters} de 1189 capítulos lidos`;
    }
    if (elBadge) {
      elBadge.textContent = String(studiesCount + totalPrayers);
    }
  }

  // ─── TAB 1: LEITOR BÍBLICO EDITORIAL ─────────────────────────────────
  private async initBibleReader(): Promise<void> {
    const selectTranslation = document.getElementById('select-translation') as HTMLSelectElement | null;
    const selectTestament = document.getElementById('select-testament') as HTMLSelectElement | null;
    const selectBook = document.getElementById('select-book') as HTMLSelectElement | null;
    const selectChapter = document.getElementById('select-chapter') as HTMLSelectElement | null;

    if (selectTranslation) {
      selectTranslation.value = this.currentTranslation;
      selectTranslation.addEventListener('change', async () => {
        this.currentTranslation = selectTranslation.value as BibleTranslationId;
        storageService.setTranslation(this.currentTranslation);
        await this.reloadTranslationAndRender();
      });
    }

    selectTestament?.addEventListener('change', () => {
      this.currentTestamentFilter = selectTestament.value as 'ALL' | 'AT' | 'NT';
      this.populateBookSelect();
      if (selectBook && selectBook.value) {
        this.currentBookAbbrev = selectBook.value;
        this.currentChapter = 1;
        this.closeVerseInspector();
        this.populateChapterSelect();
        void this.renderCurrentChapter();
      }
    });

    selectBook?.addEventListener('change', () => {
      this.currentBookAbbrev = selectBook.value;
      this.currentChapter = 1;
      this.closeVerseInspector();
      this.populateChapterSelect();
      void this.renderCurrentChapter();
    });

    selectChapter?.addEventListener('change', () => {
      this.currentChapter = parseInt(selectChapter.value, 10) || 1;
      this.closeVerseInspector();
      void this.renderCurrentChapter();
    });

    document.getElementById('btn-prev-chapter')?.addEventListener('click', () => this.stepChapter(-1));
    document.getElementById('btn-next-chapter')?.addEventListener('click', () => this.stepChapter(1));
    document.getElementById('btn-prev-chapter-bottom')?.addEventListener('click', () => this.stepChapter(-1));
    document.getElementById('btn-next-chapter-bottom')?.addEventListener('click', () => this.stepChapter(1));

    document.getElementById('btn-mark-chapter-read')?.addEventListener('click', () => {
      storageService.toggleChapterRead(this.currentBookAbbrev, this.currentChapter);
      this.updateChapterReadButtons();
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
    btnOverview?.addEventListener('click', () => {
      overviewCard?.classList.toggle('hidden');
      btnOverview.classList.toggle('active');
    });

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
    await this.reloadTranslationAndRender();
  }

  private async reloadTranslationAndRender(): Promise<void> {
    this.booksList = await bibleService.loadTranslation(this.currentTranslation);
    this.populateBookSelect();
    this.populateChapterSelect();
    await this.renderCurrentChapter();
  }

  private populateBookSelect(): void {
    const selectBook = document.getElementById('select-book') as HTMLSelectElement | null;
    if (!selectBook) return;

    const filtered = this.booksList.filter(
      (b) => this.currentTestamentFilter === 'ALL' || b.testament === this.currentTestamentFilter
    );

    selectBook.textContent = '';
    for (const book of filtered) {
      const opt = document.createElement('option');
      opt.value = book.abbrev;
      opt.textContent = book.name;
      selectBook.appendChild(opt);
    }

    if (filtered.some((b) => b.abbrev === this.currentBookAbbrev)) {
      selectBook.value = this.currentBookAbbrev;
    } else if (filtered.length > 0) {
      this.currentBookAbbrev = filtered[0].abbrev;
      selectBook.value = this.currentBookAbbrev;
    }
  }

  private populateChapterSelect(): void {
    const selectChapter = document.getElementById('select-chapter') as HTMLSelectElement | null;
    if (!selectChapter) return;

    const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    const total = book ? book.chapters.length : 1;

    selectChapter.textContent = '';
    for (let i = 1; i <= total; i++) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = `Cap. ${i}`;
      selectChapter.appendChild(opt);
    }

    if (this.currentChapter > total) this.currentChapter = 1;
    selectChapter.value = String(this.currentChapter);
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
      this.populateBookSelect();
    } else if (delta < 0 && bookIdx - 1 >= 0) {
      const prevBook = this.booksList[bookIdx - 1];
      this.currentBookAbbrev = prevBook.abbrev;
      this.currentChapter = prevBook.chapters.length;
      this.populateBookSelect();
    }

    this.closeVerseInspector();
    this.populateChapterSelect();
    void this.renderCurrentChapter();
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
    setEl('overview-key-text', `"${meta.keyVerseText}"`);
  }

  private updateChapterReadButtons(): void {
    const isRead = storageService.isChapterRead(this.currentBookAbbrev, this.currentChapter);
    const btn = document.getElementById('btn-mark-chapter-read');
    if (btn) {
      btn.classList.toggle('is-read', isRead);
      btn.textContent = isRead ? '✓ Lido' : '✓ Marcar Lido';
    }
  }

  private applyVerseFontSize(): void {
    document.querySelectorAll<HTMLElement>('.verse-row').forEach((row) => {
      row.style.fontSize = `${this.fontSize}px`;
    });
  }

  private async renderCurrentChapter(): Promise<void> {
    storageService.setLastLocation(this.currentBookAbbrev, this.currentChapter);
    this.renderBookOverview();
    this.updateChapterReadButtons();

    const book = this.booksList.find((b) => b.abbrev === this.currentBookAbbrev);
    if (!book) return;

    const transMeta = BIBLE_TRANSLATIONS.find((t) => t.id === this.currentTranslation);
    const badge = document.getElementById('reader-translation-badge');
    const heading = document.getElementById('heading-biblia');
    if (badge) badge.textContent = transMeta ? `${transMeta.code} • ${transMeta.name}` : 'ACF';
    if (heading) heading.textContent = `${book.name} ${this.currentChapter}`;

    const verses = await bibleService.getChapterVerses(
      this.currentTranslation,
      this.currentBookAbbrev,
      this.currentChapter
    );

    const container = document.getElementById('bible-verses-container');
    if (!container) return;
    container.textContent = '';

    const savedStudies = storageService.getVerseStudies();

    verses.forEach((verseText, idx) => {
      const verseNumber = idx + 1;
      const studyId = `${this.currentBookAbbrev}:${this.currentChapter}:${verseNumber}`;
      const existingStudy = savedStudies.find((s) => s.id === studyId);

      const row = document.createElement('div');
      row.className = 'verse-row';
      row.id = `verse-row-${verseNumber}`;
      row.style.fontSize = `${this.fontSize}px`;

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

      row.addEventListener('click', () => {
        if (this.selectedVerseNumber === verseNumber) {
          this.closeVerseInspector();
        } else {
          void this.selectVerseForInspection(verseNumber);
        }
      });

      container.appendChild(row);
    });

    if (this.selectedVerseNumber) {
      await this.selectVerseForInspection(this.selectedVerseNumber);
    }
  }

  private closeVerseInspector(): void {
    this.selectedVerseNumber = null;
    document.querySelectorAll('.verse-row').forEach((row) => row.classList.remove('selected'));
    document.getElementById('verse-study-sidebar')?.classList.add('hidden');
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
    const stageGrid = document.getElementById('bible-reader-grid');
    const refTitle = document.getElementById('inspector-verse-ref');
    const noteInput = document.getElementById('textarea-verse-note') as HTMLTextAreaElement | null;
    const comparisonList = document.getElementById('inspector-translations-list');

    sidebar?.classList.remove('hidden');
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
    document.getElementById('btn-close-inspector')?.addEventListener('click', () => {
      this.closeVerseInspector();
    });

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
      const formatted = `"${text}" — ${book.name} ${this.currentChapter}:${this.selectedVerseNumber} (${this.currentTranslation === 'aa' ? 'ARA' : this.currentTranslation.toUpperCase()})`;
      try {
        await navigator.clipboard.writeText(formatted);
        const toast = document.getElementById('copy-feedback');
        toast?.classList.remove('hidden');
        setTimeout(() => toast?.classList.add('hidden'), 2000);
      } catch {
        // Silencioso
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

    const hits = await bibleService.searchBible(
      this.currentTranslation,
      trimmed,
      this.currentTestamentFilter,
      60
    );

    title.textContent =
      hits.length > 0
        ? `${hits.length} versículos encontrados para "${trimmed}"`
        : `Nenhum resultado encontrado para "${trimmed}".`;

    for (const hit of hits) {
      const card = document.createElement('div');
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

  public async navigateToScripture(
    bookAbbrev: string,
    chapter: number,
    verse?: number
  ): Promise<void> {
    this.switchTab('biblia');
    this.currentTestamentFilter = 'ALL';
    const selectTestament = document.getElementById('select-testament') as HTMLSelectElement | null;
    if (selectTestament) selectTestament.value = 'ALL';

    this.currentBookAbbrev = bookAbbrev;
    this.currentChapter = chapter;
    this.selectedVerseNumber = verse || null;

    this.populateBookSelect();
    this.populateChapterSelect();
    await this.renderCurrentChapter();

    if (verse) {
      const row = document.getElementById(`verse-row-${verse}`);
      row?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      document.getElementById('heading-biblia')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ─── TAB 2: TIRA-DÚVIDAS BEREANO (ACCORDION CARDS) ───────────────────
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
          this.renderQACards();
        });
        categoriesBar.appendChild(btn);
      });
    }

    searchInput?.addEventListener('input', () => {
      this.currentQAQuery = searchInput.value;
      this.renderQACards();
    });

    this.renderQACards();
  }

  private renderQACards(): void {
    const container = document.getElementById('qa-cards-container');
    const counter = document.getElementById('qa-results-counter');
    if (!container) return;

    const results = searchQuestions(this.currentQAQuery, this.currentQACategory);
    if (counter) {
      counter.textContent = `${results.length} ${results.length === 1 ? 'pergunta encontrada' : 'perguntas encontradas'} — clique em qualquer pergunta para ler o estudo completo`;
    }

    container.textContent = '';

    for (const qa of results) {
      const isExpanded = this.expandedQAIds.has(qa.id) || this.currentQAQuery.trim().length > 2;
      const card = document.createElement('article');
      card.className = `qa-card ${isExpanded ? 'expanded' : ''}`;

      const header = document.createElement('div');
      header.className = 'qa-card-header';

      const headerLeft = document.createElement('div');
      const catBadge = document.createElement('span');
      catBadge.className = 'eyebrow-tag';
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
      toggleIndicator.textContent = isExpanded ? 'Fechar ↑' : 'Ler mais ↓';

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
      strongLabel.textContent = 'Aplicação Prática: ';
      const spanPrac = document.createElement('span');
      spanPrac.textContent = qa.practicalApplication;
      practicalBox.appendChild(strongLabel);
      practicalBox.appendChild(spanPrac);

      const refsContainer = document.createElement('div');
      refsContainer.className = 'qa-refs-list';
      for (const ref of qa.references) {
        refsContainer.appendChild(this.createScriptureRefCard(ref));
      }

      expandableBody.appendChild(detailedDiv);
      expandableBody.appendChild(practicalBox);
      expandableBody.appendChild(refsContainer);

      header.addEventListener('click', () => {
        const nowOpen = expandableBody.classList.toggle('hidden');
        const expanded = !nowOpen;
        card.classList.toggle('expanded', expanded);
        toggleIndicator.textContent = expanded ? 'Fechar ↑' : 'Ler mais ↓';
        if (expanded) {
          this.expandedQAIds.add(qa.id);
        } else {
          this.expandedQAIds.delete(qa.id);
        }
      });

      card.appendChild(header);
      card.appendChild(expandableBody);
      container.appendChild(card);
    }
  }

  private createScriptureRefCard(ref: ScriptureReference): HTMLElement {
    const refCard = document.createElement('div');
    refCard.className = 'scripture-ref-card';

    const quoteP = document.createElement('p');
    quoteP.className = 'scripture-ref-quote';
    quoteP.textContent = `"${ref.quote}"`;

    const footer = document.createElement('div');
    footer.className = 'scripture-ref-footer';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'scripture-ref-label';
    labelSpan.textContent = ref.label;

    const openBtn = document.createElement('button');
    openBtn.type = 'button';
    openBtn.className = 'btn-inline-link';
    openBtn.textContent = 'Abrir na Bíblia →';
    openBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      void this.navigateToScripture(ref.bookAbbrev, ref.chapter, ref.verse);
    });

    footer.appendChild(labelSpan);
    footer.appendChild(openBtn);
    refCard.appendChild(quoteP);
    refCard.appendChild(footer);
    return refCard;
  }

  // ─── TAB 3: REFÚGIO BÍBLICO ──────────────────────────────────────────
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
        this.renderActiveRefugio();
      });

      grid.appendChild(btn);
    }

    this.renderActiveRefugio();
  }

  private renderActiveRefugio(): void {
    const detail = document.getElementById('refugio-active-detail');
    if (!detail) return;

    const item = REFUGIO_BIBLICO_DATA.find((r) => r.id === this.activeRefugioId) || REFUGIO_BIBLICO_DATA[0];
    detail.textContent = '';

    const title = document.createElement('h3');
    title.className = 'qa-card-question';
    title.textContent = item.stateTitle;

    const sub = document.createElement('p');
    sub.className = 'page-desc';
    sub.textContent = item.subtitle;

    const grid = document.createElement('div');
    grid.className = 'refugio-pastoral-grid';

    const boxWord = document.createElement('div');
    boxWord.className = 'refugio-box';
    const h4Word = document.createElement('h4');
    h4Word.textContent = 'Palavra Pastoral';
    const pWord = document.createElement('p');
    pWord.textContent = item.pastoralWord;
    boxWord.appendChild(h4Word);
    boxWord.appendChild(pWord);

    grid.appendChild(boxWord);

    const refsRow = document.createElement('div');
    refsRow.className = 'qa-refs-list';
    for (const v of item.verses) {
      refsRow.appendChild(this.createScriptureRefCard(v));
    }

    detail.appendChild(title);
    detail.appendChild(sub);
    detail.appendChild(grid);
    detail.appendChild(refsRow);
  }

  // ─── TAB 4: DEVOCIONAL & PLANOS DE LEITURA ───────────────────────────
  private initDevotionalAndPlansSection(): void {
    const devoBar = document.getElementById('devotional-tabs-bar');
    if (devoBar) {
      devoBar.textContent = '';
      DEVOCIONAIS_DATA.forEach((devo, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `qa-cat-btn ${devo.id === this.activeDevotionalId ? 'active' : ''}`;
        btn.textContent = `${idx + 1}. ${devo.theme}`;
        btn.addEventListener('click', () => {
          this.activeDevotionalId = devo.id;
          devoBar.querySelectorAll('.qa-cat-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.renderActiveDevotional();
        });
        devoBar.appendChild(btn);
      });
    }

    const plansSelector = document.getElementById('reading-plans-selector');
    if (plansSelector) {
      plansSelector.textContent = '';
      PLANOS_LEITURA_DATA.forEach((plan) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `qa-cat-btn ${plan.id === this.activePlanId ? 'active' : ''}`;
        btn.textContent = plan.title;
        btn.addEventListener('click', () => {
          this.activePlanId = plan.id;
          plansSelector.querySelectorAll('.qa-cat-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.renderActiveReadingPlan();
        });
        plansSelector.appendChild(btn);
      });
    }

    this.renderActiveDevotional();
    this.renderActiveReadingPlan();
  }

  private renderActiveDevotional(): void {
    const card = document.getElementById('devotional-active-card');
    if (!card) return;

    const devo = DEVOCIONAIS_DATA.find((d) => d.id === this.activeDevotionalId) || DEVOCIONAIS_DATA[0];
    card.textContent = '';

    const badge = document.createElement('span');
    badge.className = 'eyebrow-tag';
    badge.textContent = devo.theme;

    const title = document.createElement('h3');
    title.className = 'qa-card-question';
    title.textContent = devo.title;

    const verseCard = this.createScriptureRefCard(devo.baseVerse);

    const contextBox = document.createElement('div');
    contextBox.className = 'devo-context-box';
    const ctxStrong = document.createElement('strong');
    ctxStrong.textContent = 'Contexto Histórico: ';
    const ctxText = document.createElement('span');
    ctxText.textContent = devo.historicalContext;
    contextBox.appendChild(ctxStrong);
    contextBox.appendChild(ctxText);

    const reflectionDiv = document.createElement('div');
    reflectionDiv.className = 'devo-reflection-paragraphs';
    devo.reflection.forEach((pText) => {
      const p = document.createElement('p');
      p.textContent = pText;
      reflectionDiv.appendChild(p);
    });

    const challengeBox = document.createElement('div');
    challengeBox.className = 'qa-practical-box';
    const chStrong = document.createElement('strong');
    chStrong.textContent = 'Prática para Hoje: ';
    const chSpan = document.createElement('span');
    chSpan.textContent = devo.practicalChallenge;
    challengeBox.appendChild(chStrong);
    challengeBox.appendChild(chSpan);

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(verseCard);
    card.appendChild(contextBox);
    card.appendChild(reflectionDiv);
    card.appendChild(challengeBox);
  }

  private renderActiveReadingPlan(): void {
    const container = document.getElementById('reading-plan-detail');
    if (!container) return;

    const plan = PLANOS_LEITURA_DATA.find((p) => p.id === this.activePlanId) || PLANOS_LEITURA_DATA[0];
    container.textContent = '';

    for (const dayItem of plan.days) {
      const isDone = storageService.isPlanDayCompleted(plan.id, dayItem.day);
      const dayCard = document.createElement('div');
      dayCard.className = `plan-day-card ${isDone ? 'completed' : ''}`;

      const topRow = document.createElement('div');
      topRow.className = 'plan-day-top';

      const dayNum = document.createElement('span');
      dayNum.className = 'plan-day-number';
      dayNum.textContent = `DIA ${dayItem.day}`;

      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'btn-ghost-sm';
      toggleBtn.textContent = isDone ? '✓ Concluído' : 'Marcar Lido';
      toggleBtn.addEventListener('click', () => {
        storageService.togglePlanDay(plan.id, dayItem.day);
        this.renderActiveReadingPlan();
      });

      topRow.appendChild(dayNum);
      topRow.appendChild(toggleBtn);

      const titleH4 = document.createElement('h4');
      titleH4.textContent = dayItem.title;

      const focusP = document.createElement('p');
      focusP.style.fontSize = '0.84rem';
      focusP.style.color = 'var(--text-secondary)';
      focusP.textContent = dayItem.focus;

      const chipsRow = document.createElement('div');
      chipsRow.className = 'plan-readings-chips';
      for (const reading of dayItem.readings) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'btn-gold-sm';
        chip.textContent = `Ler ${reading.label}`;
        chip.addEventListener('click', () => {
          void this.navigateToScripture(reading.bookAbbrev, reading.chapter);
        });
        chipsRow.appendChild(chip);
      }

      dayCard.appendChild(topRow);
      dayCard.appendChild(titleH4);
      dayCard.appendChild(focusP);
      dayCard.appendChild(chipsRow);
      container.appendChild(dayCard);
    }
  }

  // ─── TAB 5: ORAÇÃO & CADERNO BÍBLICO ─────────────────────────────────
  private initSecretoSection(): void {
    const form = document.getElementById('form-new-prayer') as HTMLFormElement | null;
    form?.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const titleInput = document.getElementById('prayer-title') as HTMLInputElement;
      const catSelect = document.getElementById('prayer-category') as HTMLSelectElement;
      const descInput = document.getElementById('prayer-desc') as HTMLTextAreaElement;
      const promiseInput = document.getElementById('prayer-promise') as HTMLInputElement;

      if (!titleInput.value.trim() || !descInput.value.trim()) return;

      storageService.addPrayer({
        title: titleInput.value.trim(),
        category: catSelect.value as any,
        description: descInput.value.trim(),
        versePromise: promiseInput.value.trim() || 'Filipenses 4:6 — As vossas petições sejam em tudo conhecidas diante de Deus.'
      });

      form.reset();
      this.renderPrayerJournal();
      this.updateCounters();
    });

    this.renderPrayerJournal();
    this.renderSavedStudiesList();
  }

  private renderPrayerJournal(): void {
    const container = document.getElementById('prayer-items-container');
    if (!container) return;

    const prayers = storageService.getPrayers();
    container.textContent = '';

    for (const item of prayers) {
      const card = document.createElement('div');
      card.className = `prayer-card ${item.answered ? 'answered' : ''}`;

      const header = document.createElement('div');
      header.className = 'prayer-card-header';

      const leftInfo = document.createElement('div');
      const catBadge = document.createElement('span');
      catBadge.className = 'eyebrow-tag';
      catBadge.textContent = item.answered ? `✨ ORAÇÃO RESPONDIDA • ${item.category}` : item.category;

      const h4 = document.createElement('h4');
      h4.style.fontSize = '1.05rem';
      h4.textContent = item.title;

      leftInfo.appendChild(catBadge);
      leftInfo.appendChild(h4);

      const dateSpan = document.createElement('small');
      dateSpan.style.color = 'var(--text-muted)';
      dateSpan.textContent = item.createdAt;

      header.appendChild(leftInfo);
      header.appendChild(dateSpan);

      const descP = document.createElement('p');
      descP.style.fontSize = '0.9rem';
      descP.style.color = 'var(--text-secondary)';
      descP.style.marginBottom = '0.5rem';
      descP.textContent = item.description;

      const promiseP = document.createElement('p');
      promiseP.style.fontSize = '0.8rem';
      promiseP.style.color = 'var(--gold)';
      promiseP.style.fontStyle = 'italic';
      promiseP.style.marginBottom = '0.75rem';
      promiseP.textContent = item.versePromise;

      const actionsRow = document.createElement('div');
      actionsRow.style.display = 'flex';
      actionsRow.style.gap = '0.5rem';

      const btnToggle = document.createElement('button');
      btnToggle.type = 'button';
      btnToggle.className = 'btn-gold-sm';
      btnToggle.textContent = item.answered ? 'Reabrir Pedido' : 'Marcar como Respondida';
      btnToggle.addEventListener('click', () => {
        storageService.togglePrayerAnswered(item.id);
        this.renderPrayerJournal();
        this.updateCounters();
      });

      const btnDelete = document.createElement('button');
      btnDelete.type = 'button';
      btnDelete.className = 'btn-ghost-sm';
      btnDelete.textContent = 'Remover';
      btnDelete.addEventListener('click', () => {
        storageService.deletePrayer(item.id);
        this.renderPrayerJournal();
        this.updateCounters();
      });

      actionsRow.appendChild(btnToggle);
      actionsRow.appendChild(btnDelete);

      card.appendChild(header);
      card.appendChild(descP);
      card.appendChild(promiseP);
      card.appendChild(actionsRow);
      container.appendChild(card);
    }
  }

  private renderSavedStudiesList(): void {
    const container = document.getElementById('saved-studies-container');
    if (!container) return;

    const studies = storageService.getVerseStudies();
    container.textContent = '';

    if (studies.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'clean-panel';
      empty.style.color = 'var(--text-muted)';
      empty.style.fontSize = '0.9rem';
      empty.textContent =
        'Nenhum versículo grifado ainda. Na aba "Bíblia", clique em qualquer versículo para destacar ou anotar.';
      container.appendChild(empty);
      return;
    }

    for (const st of studies) {
      const card = document.createElement('div');
      card.className = `saved-study-card hl-${st.color}`;

      const top = document.createElement('div');
      top.className = 'prayer-card-header';

      const refStrong = document.createElement('strong');
      refStrong.style.color = 'var(--gold)';
      refStrong.style.fontSize = '0.9rem';
      refStrong.textContent = `${st.bookName} ${st.chapter}:${st.verse} (${st.translation === 'aa' ? 'ARA' : st.translation.toUpperCase()})`;

      const openBtn = document.createElement('button');
      openBtn.type = 'button';
      openBtn.className = 'btn-inline-link';
      openBtn.textContent = 'Abrir →';
      openBtn.addEventListener('click', () => {
        void this.navigateToScripture(st.bookAbbrev, st.chapter, st.verse);
      });

      top.appendChild(refStrong);
      top.appendChild(openBtn);

      const quoteP = document.createElement('p');
      quoteP.style.fontFamily = "'Lora', serif";
      quoteP.style.fontStyle = 'italic';
      quoteP.style.fontSize = '0.92rem';
      quoteP.style.marginBottom = '0.45rem';
      quoteP.textContent = `"${st.text}"`;

      card.appendChild(top);
      card.appendChild(quoteP);

      if (st.note) {
        const noteBox = document.createElement('p');
        noteBox.style.fontSize = '0.84rem';
        noteBox.style.background = 'var(--bg-secondary)';
        noteBox.style.padding = '0.5rem 0.7rem';
        noteBox.style.borderRadius = '6px';
        noteBox.textContent = `Nota: ${st.note}`;
        card.appendChild(noteBox);
      }

      container.appendChild(card);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new VerboVivoApp();
  void app.init();

  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    const swUrl = `${import.meta.env.BASE_URL || './'}sw.js`;
    navigator.serviceWorker.register(swUrl).catch(() => {
      // Silencioso em ambientes locais
    });
  }
});
