import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

function loadAllBibles() {
  const map = {};
  for (const version of ['acf', 'nvi', 'aa']) {
    const filePath = path.join(rootDir, 'public', 'data', `${version}.json`);
    const books = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    map[version] = Object.fromEntries(books.map((b) => [b.abbrev, b]));
  }
  return map;
}

test('Bíblia Sagrada: As 3 traduções (ACF, NVI, ARA) possuem exatamente 66 livros canônicos (39 AT + 27 NT) e 1.189 capítulos', () => {
  for (const version of ['acf', 'nvi', 'aa']) {
    const filePath = path.join(rootDir, 'public', 'data', `${version}.json`);
    assert.ok(fs.existsSync(filePath), `Arquivo ${version}.json deve existir`);

    const raw = fs.readFileSync(filePath, 'utf8');
    assert.notEqual(raw.charCodeAt(0), 0xfeff, `${version}.json não deve conter BOM`);

    const books = JSON.parse(raw);
    assert.equal(books.length, 66, `${version} deve ter exatamente 66 livros canônicos`);

    const atBooks = books.filter((b) => b.testament === 'AT');
    const ntBooks = books.filter((b) => b.testament === 'NT');
    assert.equal(atBooks.length, 39, `${version} deve ter 39 livros no Antigo Testamento`);
    assert.equal(ntBooks.length, 27, `${version} deve ter 27 livros no Novo Testamento`);

    const totalChapters = books.reduce((acc, b) => acc + b.chapters.length, 0);
    assert.equal(totalChapters, 1189, `${version} deve ter exatamente 1.189 capítulos`);

    const totalVerses = books.reduce(
      (acc, b) => acc + b.chapters.reduce((cAcc, ch) => cAcc + ch.length, 0),
      0
    );
    assert.ok(totalVerses > 31000, `${version} deve ter mais de 31.000 versículos`);
  }
});

test('Segurança DOM: Código-fonte (src/main.ts e src/download.ts) não utiliza innerHTML inseguro ou eval', () => {
  for (const file of ['main.ts', 'download.ts']) {
    const content = fs.readFileSync(path.join(rootDir, 'src', file), 'utf8');
    assert.equal(content.includes('.innerHTML'), false, `src/${file} não deve usar innerHTML`);
    assert.equal(content.includes('eval('), false, `src/${file} não deve usar eval()`);
  }
});

test('Remoções obrigatórias: Oração, Devocional, Planos de Leitura e Palavra Pastoral no Refúgio foram completamente removidos', () => {
  assert.equal(fs.existsSync(path.join(rootDir, 'src', 'data', 'devocionais.ts')), false, 'devocionais.ts deve ter sido removido');
  assert.equal(fs.existsSync(path.join(rootDir, 'src', 'data', 'planos-leitura.ts')), false, 'planos-leitura.ts deve ter sido removido');
  assert.equal(fs.existsSync(path.join(rootDir, 'src', 'data', 'doutrina-solas.ts')), false, 'doutrina-solas.ts não deve existir');
  assert.equal(fs.existsSync(path.join(rootDir, 'src', 'data', 'harpa-louvores.ts')), false, 'harpa-louvores.ts não deve existir');

  const refugioTs = fs.readFileSync(path.join(rootDir, 'src', 'data', 'refugio-biblico.ts'), 'utf8');
  assert.equal(refugioTs.includes('pastoralWord'), false, 'refugio-biblico.ts não deve conter pastoralWord');
  assert.equal(refugioTs.includes('guidedPrayer'), false, 'refugio-biblico.ts não deve conter guidedPrayer');

  const appHtml = fs.readFileSync(path.join(rootDir, 'app.html'), 'utf8');
  assert.equal(appHtml.includes('tab-devocional'), false, 'app.html não deve conter aba Devocional');
  assert.equal(appHtml.includes('tab-secreto'), false, 'app.html não deve conter aba Oração');
  assert.equal(appHtml.includes('form-new-prayer'), false, 'app.html não deve conter formulário de oração');
  assert.equal(appHtml.toLowerCase().includes('palavra pastoral'), false, 'app.html não deve mencionar palavra pastoral');
  assert.equal(appHtml.toLowerCase().includes('altar de oração'), false, 'app.html não deve mencionar altar de oração');
  assert.equal(appHtml.toLowerCase().includes('planos de leitura'), false, 'app.html não deve mencionar planos de leitura');

  const mainTs = fs.readFileSync(path.join(rootDir, 'src', 'main.ts'), 'utf8');
  assert.equal(mainTs.includes('pastoralWord'), false, 'src/main.ts não deve acessar pastoralWord');
  assert.equal(mainTs.includes('Palavra Pastoral'), false, 'src/main.ts não deve renderizar Palavra Pastoral');
  assert.equal(mainTs.includes('form-new-prayer'), false, 'src/main.ts não deve conter formulário de oração');
  assert.equal(mainTs.includes('DEVOCIONAIS_DATA'), false, 'src/main.ts não deve importar devocionais');
  assert.equal(mainTs.includes('PLANOS_LEITURA_DATA'), false, 'src/main.ts não deve importar planos de leitura');

  const storageTs = fs.readFileSync(path.join(rootDir, 'src', 'services', 'storage-service.ts'), 'utf8');
  assert.equal(storageTs.includes('PRAYER_LIST'), false, 'storage-service.ts não deve armazenar orações');
  assert.equal(storageTs.includes('PLAN_PROGRESS'), false, 'storage-service.ts não deve armazenar planos');
});

test('Dicionário Bíblico & Refúgio & Tira-Dúvidas: Todas as referências bíblicas são válidas e existem nas 3 traduções (ACF, NVI, ARA)', () => {
  const bibles = loadAllBibles();

  const dictPath = path.join(rootDir, 'src', 'data', 'dicionario-biblico.ts');
  assert.ok(fs.existsSync(dictPath), 'dicionario-biblico.ts deve existir');
  const dictSrc = fs.readFileSync(dictPath, 'utf8');

  const ids = [...dictSrc.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.ok(ids.length >= 150, `Dicionário Bíblico deve ter ao menos 150 temas (encontrados: ${ids.length})`);
  assert.equal(ids.length, new Set(ids).size, 'Todos os IDs do Dicionário Bíblico devem ser únicos');

  // Garante temas essenciais solicitados
  for (const requiredId of ['aborto-valor-da-vida', 'amor', 'casamento']) {
    assert.ok(ids.includes(requiredId), `Dicionário Bíblico deve conter o tema '${requiredId}'`);
  }

  // Garante que o Dicionário responde apenas com versículos (sem campos de explicação/comentário)
  assert.equal(dictSrc.includes('pastoralWord'), false, 'Dicionário não deve ter palavra pastoral');
  assert.equal(dictSrc.includes('detailedExplanation'), false, 'Dicionário não deve ter explicação humana');

  // Garante ausência de Markdown cru em tira-duvidas.ts
  const tdSrc = fs.readFileSync(path.join(rootDir, 'src', 'data', 'tira-duvidas.ts'), 'utf8');
  assert.equal(tdSrc.includes('**'), false, 'tira-duvidas.ts não deve conter asteriscos de Markdown cru');

  // Valida 100% das referências em dicionario-biblico.ts, refugio-biblico.ts e tira-duvidas.ts
  const refRegex = /\{\s*bookAbbrev:\s*'([^']+)',\s*chapter:\s*(\d+),\s*(?:verseStart|verse):\s*(\d+)(?:,\s*verseEnd:\s*(\d+))?/g;
  let totalChecked = 0;

  for (const rel of ['src/data/dicionario-biblico.ts', 'src/data/refugio-biblico.ts', 'src/data/tira-duvidas.ts']) {
    const content = fs.readFileSync(path.join(rootDir, rel), 'utf8');
    for (const m of content.matchAll(refRegex)) {
      const [, bookAbbrev, chStr, startStr, endStr] = m;
      const ch = Number(chStr);
      const start = Number(startStr);
      const end = endStr ? Number(endStr) : start;
      totalChecked++;

      for (const version of ['acf', 'nvi', 'aa']) {
        const book = bibles[version][bookAbbrev];
        assert.ok(book, `[${rel}] Livro '${bookAbbrev}' inexistente em ${version}`);
        const verses = book.chapters[ch - 1];
        assert.ok(verses, `[${rel}] Capítulo ${bookAbbrev} ${ch} inválido em ${version}`);
        assert.ok(
          start >= 1 && end >= start && end <= verses.length,
          `[${rel}] Versículo fora do limite ${bookAbbrev} ${ch}:${start}-${end} em ${version} (máx ${verses.length})`
        );
        for (let v = start; v <= end; v++) {
          assert.ok(verses[v - 1]?.trim().length > 0, `[${rel}] Versículo vazio ${bookAbbrev} ${ch}:${v} em ${version}`);
        }
      }
    }
  }

  assert.ok(totalChecked > 1000, `Deve validar mais de 1.000 referências bíblicas (validadas: ${totalChecked})`);
});

test('Arquitetura Multiplataforma: Site de Download (index.html), App (app.html) e configurações Android, iOS e Windows estão presentes', () => {
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('Verbo-Vivo-Android.apk'), 'index.html deve ter download para Android (.APK)');
  assert.ok(indexHtml.includes('Verbo-Vivo-iOS.ipa'), 'index.html deve ter download para iPhone (.IPA)');
  assert.ok(indexHtml.includes('Verbo-Vivo-Windows-Setup.exe'), 'index.html deve ter download para Windows (.EXE)');
  assert.ok(indexHtml.includes('Dicionário Bíblico'), 'index.html deve apresentar o Dicionário Bíblico');

  const appHtml = fs.readFileSync(path.join(rootDir, 'app.html'), 'utf8');
  assert.ok(appHtml.includes('tab-dicionario'), 'app.html deve conter a aba Dicionário Bíblico');
  assert.ok(appHtml.includes('tab-marcacoes'), 'app.html deve conter a aba Minhas Marcações');
  assert.ok(appHtml.includes('mobile-bottom-nav'), 'app.html deve conter navegação inferior mobile');

  assert.ok(fs.existsSync(path.join(rootDir, 'electron', 'main.cjs')), 'Configuração Electron Windows deve existir');
  assert.ok(fs.existsSync(path.join(rootDir, 'capacitor.config.json')), 'Configuração Capacitor Android/iOS deve existir');
});

test('Ícones Multiplataforma e Open Graph Image (OG) no Site de Download estão presentes e configurados', () => {
  const requiredPublicAssets = [
    'favicon.svg',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
    'icon-192.png',
    'icon-512.png',
    'icon-maskable-512.png',
    'icon-1024.png',
    'og-image.png',
    'og-image.svg'
  ];

  for (const asset of requiredPublicAssets) {
    const p = path.join(rootDir, 'public', asset);
    assert.ok(fs.existsSync(p), `public/${asset} deve existir`);
    assert.ok(fs.statSync(p).size > 200, `public/${asset} não pode estar vazio`);
  }

  assert.ok(fs.existsSync(path.join(rootDir, 'build', 'icon.ico')), 'build/icon.ico deve existir para o Windows .EXE');
  assert.ok(fs.existsSync(path.join(rootDir, 'electron', 'icon.ico')), 'electron/icon.ico deve existir');
  assert.ok(
    fs.existsSync(path.join(rootDir, 'resources', 'native-icons', 'ios', 'AppIcon-512@2x.png')),
    'Ícone nativo iOS 1024x1024 deve existir'
  );
  assert.ok(
    fs.existsSync(path.join(rootDir, 'resources', 'native-icons', 'android', 'mipmap-xxxhdpi', 'ic_launcher.png')),
    'Ícone nativo Android mipmap-xxxhdpi deve existir'
  );

  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('property="og:image"'), 'index.html deve ter meta og:image');
  assert.ok(indexHtml.includes('og-image.png'), 'index.html deve apontar para og-image.png');
  assert.ok(indexHtml.includes('property="og:image:width" content="1200"'), 'index.html deve definir largura 1200 da OG image');
  assert.ok(indexHtml.includes('property="og:image:height" content="630"'), 'index.html deve definir altura 630 da OG image');
  assert.ok(indexHtml.includes('name="twitter:card" content="summary_large_image"'), 'index.html deve ter twitter:card summary_large_image');
  assert.ok(indexHtml.includes('name="twitter:image"'), 'index.html deve ter twitter:image');
});
