import './style.css';
import type { ScriptureReference } from './types';
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

class VerboVivoDownloadPage {
  public init(): void {
    this.initTheme();
    this.initNavigation();
    this.initHeroPromises();
    this.detectUserPlatform();
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
        if (target) this.switchSection(target);
      });
    });

    document.querySelectorAll<HTMLButtonElement>('[data-go-install]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.switchSection('instalacao');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.getElementById('brand-home')?.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.switchSection('downloads');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  private switchSection(sectionId: string): void {
    document.querySelectorAll('[data-section]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-section') === sectionId);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `section-${sectionId}`);
    });
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
