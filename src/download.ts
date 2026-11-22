import './style.css';
import type { ScriptureReference } from './types';
import {
  LICENSES_CREDITS_SECTIONS,
  PRIVACY_POLICY_SECTIONS,
  TERMS_OF_USE_SECTIONS,
  type LegalDocumentSection
} from './data/legal-and-safety';
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
  }
];

const VALID_SECTIONS = ['downloads', 'recursos', 'instalacao'] as const;

class VerboVivoDownloadPage {
  public init(): void {
    this.initTheme();
    this.initNavigation();
    this.initLegalModal();
    this.initHeroPromises();
    this.detectUserPlatform();
    this.syncSectionFromHash();
  }

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

  private initNavigation(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-section]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-section');
        if (target) this.switchSection(target, true);
      });
    });

    document.querySelectorAll<HTMLButtonElement>('[data-go-install]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.switchSection('instalacao', true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.getElementById('brand-home')?.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.switchSection('downloads', true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('btn-dl-404-home')?.addEventListener('click', () => {
      this.switchSection('downloads', true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('hashchange', () => this.syncSectionFromHash());
  }

  private syncSectionFromHash(): void {
    const raw = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    if (!raw) return;

    if (raw === 'privacidade' || raw === 'termos' || raw === 'creditos') {
      this.switchSection('downloads', false);
      this.openLegalModal(raw);
      return;
    }

    if ((VALID_SECTIONS as readonly string[]).includes(raw)) {
      this.switchSection(raw, false);
      return;
    }

    document.querySelectorAll('[data-section]').forEach((btn) => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === 'section-erro-404');
    });
    const detail = document.getElementById('dl-404-detail');
    if (detail) {
      detail.textContent = `A seção "#${raw}" não existe nesta página. Volte para os downloads oficiais ou abra o aplicativo no navegador.`;
    }
  }

  private switchSection(sectionId: string, updateHash = false): void {
    document.querySelectorAll('[data-section]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-section') === sectionId);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `section-${sectionId}`);
    });
    if (updateHash && window.location.hash !== `#${sectionId}`) {
      try {
        window.history.replaceState(null, '', `#${sectionId}`);
      } catch {
        // Silencioso em ambientes locais
      }
    }
  }

  private initLegalModal(): void {
    this.renderLegalDocs('dl-legal-panel-privacidade', PRIVACY_POLICY_SECTIONS);
    this.renderLegalDocs('dl-legal-panel-termos', TERMS_OF_USE_SECTIONS);
    this.renderLegalDocs('dl-legal-panel-creditos', LICENSES_CREDITS_SECTIONS);

    const modal = document.getElementById('dl-legal-modal');
    const closeBtn = document.getElementById('btn-close-dl-legal');

    const closeModal = () => modal?.classList.add('hidden');
    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (ev) => {
      if (ev.target === modal) closeModal();
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') closeModal();
    });

    document.querySelectorAll<HTMLButtonElement>('[data-open-dl-legal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.openLegalModal(btn.getAttribute('data-open-dl-legal') || 'privacidade');
      });
    });

    document.querySelectorAll<HTMLButtonElement>('[data-dl-legal-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.switchLegalTab(btn.getAttribute('data-dl-legal-tab') || 'privacidade');
      });
    });
  }

  private openLegalModal(tabId: string): void {
    this.switchLegalTab(tabId);
    document.getElementById('dl-legal-modal')?.classList.remove('hidden');
  }

  private switchLegalTab(tabId: string): void {
    document.querySelectorAll<HTMLButtonElement>('[data-dl-legal-tab]').forEach((btn) => {
      const active = btn.getAttribute('data-dl-legal-tab') === tabId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    for (const key of ['privacidade', 'termos', 'creditos']) {
      const panel = document.getElementById(`dl-legal-panel-${key}`);
      if (!panel) continue;
      const isMatch = key === tabId;
      panel.classList.toggle('hidden', !isMatch);
      panel.classList.toggle('active', isMatch);
    }
  }

  private renderLegalDocs(containerId: string, sections: LegalDocumentSection[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;
    const frag = document.createDocumentFragment();
    for (const sec of sections) {
      const box = document.createElement('section');
      box.className = 'legal-doc-section';
      const h3 = document.createElement('h3');
      h3.textContent = sec.heading;
      box.appendChild(h3);
      for (const para of sec.paragraphs) {
        const p = document.createElement('p');
        p.textContent = para;
        box.appendChild(p);
      }
      frag.appendChild(box);
    }
    container.replaceChildren(frag);
  }

  private initHeroPromises(): void {
    const btnRandom = document.getElementById('btn-random-promise');
    const featuredQuote = document.getElementById('hero-featured-quote');
    const featuredRef = document.getElementById('hero-featured-ref');

    let idx = 0;
    btnRandom?.addEventListener('click', () => {
      idx = (idx + 1) % PROMISES_POOL.length;
      const promise = PROMISES_POOL[idx];
      if (featuredQuote) featuredQuote.textContent = `"${promise.quote}"`;
      if (featuredRef) featuredRef.textContent = promise.label;
    });
  }

  private detectUserPlatform(): void {
    const ua = navigator.userAgent.toLowerCase();
    const badgeEl = document.getElementById('detected-os-badge');

    if (/android/.test(ua)) {
      document.getElementById('card-platform-android')?.classList.add('recommended');
      const b = document.getElementById('badge-android');
      if (b) b.textContent = 'Recomendado para seu Android • .APK';
      if (badgeEl) badgeEl.textContent = 'Versão Android detectada • 100% Offline';
    } else if (/iphone|ipad|ipod/.test(ua)) {
      document.getElementById('card-platform-ios')?.classList.add('recommended');
      const b = document.getElementById('badge-ios');
      if (b) b.textContent = 'Recomendado para seu iPhone • iOS';
      if (badgeEl) badgeEl.textContent = 'Versão iPhone / iOS detectada • 100% Offline';
    } else if (/win/.test(ua)) {
      document.getElementById('card-platform-windows')?.classList.add('recommended');
      const b = document.getElementById('badge-windows');
      if (b) b.textContent = 'Recomendado para seu Windows • .EXE';
      if (badgeEl) badgeEl.textContent = 'Versão Windows detectada • 100% Offline';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new VerboVivoDownloadPage();
  page.init();
});
