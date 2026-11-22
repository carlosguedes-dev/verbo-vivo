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

  const entryRegex = /e\(\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*CAT\.([A-Z_]+)\s*,\s*\[([\s\S]*?)\]\s*,\s*\[([\s\S]*?)\]\s*\)/g;
  const tupleRegex = /\[\s*'([^']+)'\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+))?\s*\]/g;

  const entries = [];
  for (const m of dictSrc.matchAll(entryRegex)) {
    const [, id, title, , , passRaw] = m;
    const passages = [];
    for (const tm of passRaw.matchAll(tupleRegex)) {
      passages.push({
        bookAbbrev: tm[1],
        chapter: Number(tm[2]),
        verseStart: Number(tm[3]),
        verseEnd: tm[4] ? Number(tm[4]) : Number(tm[3])
      });
    }
    entries.push({ id, title, passages });
  }

  const rawCalls = (dictSrc.match(/\be\(\s*'/g) || []).length;
  assert.equal(entries.length, rawCalls, `Todas as chamadas e(...) devem ser parseadas (${entries.length} vs ${rawCalls})`);
  assert.ok(entries.length >= 1100, `Dicionário Bíblico deve ter ao menos 1.100 palavras/expressões (encontradas: ${entries.length})`);

  const ids = entries.map((item) => item.id);
  assert.equal(ids.length, new Set(ids).size, 'Todos os IDs do Dicionário Bíblico devem ser únicos');

  const normTitle = (s) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[-–—/]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const normalizedTitles = entries.map((item) => normTitle(item.title));
  assert.equal(
    normalizedTitles.length,
    new Set(normalizedTitles).size,
    'Todos os títulos (verbetes) do Dicionário Bíblico devem ser únicos'
  );

  // Garante que cada verbete é palavra ou expressão concisa (NUNCA uma frase)
  for (const item of entries) {
    assert.equal(
      /[()":;.?!,]/.test(item.title),
      false,
      `Verbete '${item.title}' (${item.id}) não deve conter pontuação/parênteses de frase`
    );
    const wordCount = item.title.trim().split(/\s+/).length;
    assert.ok(
      wordCount <= 3,
      `Verbete '${item.title}' (${item.id}) deve ser uma palavra ou expressão concisa de até 3 palavras (tem ${wordCount})`
    );
    assert.ok(
      item.passages.length >= 3,
      `Verbete '${item.title}' (${item.id}) deve conter ao menos 3 passagens bíblicas`
    );
    const seenPass = new Set();
    for (const p of item.passages) {
      const key = `${p.bookAbbrev}:${p.chapter}:${p.verseStart}-${p.verseEnd}`;
      assert.equal(seenPass.has(key), false, `Passagem duplicada ${key} dentro do verbete '${item.id}'`);
      seenPass.add(key);
    }
  }

  // Garante verbetes essenciais solicitados e novos verbetes v3.3.2 com título conciso exato
  const byId = Object.fromEntries(entries.map((item) => [item.id, item.title]));
  const requiredEntries = [
    ['amor', 'Amor'],
    ['espirito-santo', 'Espírito Santo'],
    ['aborto', 'Aborto'],
    ['morte', 'Morte'],
    ['vida-pos-morte', 'Vida Pós-Morte'],
    ['casamento', 'Casamento'],
    ['abraao', 'Abraão'],
    ['davi', 'Davi'],
    ['jerusalem', 'Jerusalém'],
    ['calvario', 'Calvário'],
    ['abba', 'Abba'],
    ['bullying', 'Bullying'],
    ['redes-sociais', 'Redes Sociais']
  ];
  for (const [reqId, reqTitle] of requiredEntries) {
    assert.equal(byId[reqId], reqTitle, `Dicionário Bíblico deve conter '${reqId}' com título exato '${reqTitle}'`);
  }

  // Garante que o Dicionário responde apenas com versículos (sem campos de explicação/comentário)
  assert.equal(dictSrc.includes('pastoralWord'), false, 'Dicionário não deve ter palavra pastoral');
  assert.equal(dictSrc.includes('detailedExplanation'), false, 'Dicionário não deve ter explicação humana');

  // Garante ausência de Markdown cru em tira-duvidas.ts
  const tdSrc = fs.readFileSync(path.join(rootDir, 'src', 'data', 'tira-duvidas.ts'), 'utf8');
  assert.equal(tdSrc.includes('**'), false, 'tira-duvidas.ts não deve conter asteriscos de Markdown cru');

  let totalChecked = 0;

  const validatePassage = (sourceLabel, bookAbbrev, ch, start, end) => {
    totalChecked++;
    for (const version of ['acf', 'nvi', 'aa']) {
      const book = bibles[version][bookAbbrev];
      assert.ok(book, `[${sourceLabel}] Livro '${bookAbbrev}' inexistente em ${version}`);
      const verses = book.chapters[ch - 1];
      assert.ok(verses, `[${sourceLabel}] Capítulo ${bookAbbrev} ${ch} inválido em ${version}`);
      assert.ok(
        start >= 1 && end >= start && end <= verses.length,
        `[${sourceLabel}] Versículo fora do limite ${bookAbbrev} ${ch}:${start}-${end} em ${version} (máx ${verses.length})`
      );
      for (let v = start; v <= end; v++) {
        assert.ok(verses[v - 1]?.trim().length > 0, `[${sourceLabel}] Versículo vazio ${bookAbbrev} ${ch}:${v} em ${version}`);
      }
    }
  };

  // Valida 100% das passagens em dicionario-biblico.ts
  for (const item of entries) {
    for (const p of item.passages) {
      validatePassage(`dicionario:${item.id}`, p.bookAbbrev, p.chapter, p.verseStart, p.verseEnd);
    }
  }

  // Valida 100% das referências em refugio-biblico.ts e tira-duvidas.ts
  const refRegex = /\{\s*bookAbbrev:\s*'([^']+)',\s*chapter:\s*(\d+),\s*(?:verseStart|verse):\s*(\d+)(?:,\s*verseEnd:\s*(\d+))?/g;
  for (const rel of ['src/data/refugio-biblico.ts', 'src/data/tira-duvidas.ts']) {
    const content = fs.readFileSync(path.join(rootDir, rel), 'utf8');
    for (const m of content.matchAll(refRegex)) {
      const [, bookAbbrev, chStr, startStr, endStr] = m;
      const ch = Number(chStr);
      const start = Number(startStr);
      const end = endStr ? Number(endStr) : start;
      validatePassage(rel, bookAbbrev, ch, start, end);
    }
  }

  assert.ok(totalChecked > 5500, `Deve validar mais de 5.500 referências bíblicas (validadas: ${totalChecked})`);
});

test('Arquitetura Multiplataforma, Barra Inferior Profissional e Documentação Atualizada', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('Verbo-Vivo-Android.apk'), 'index.html deve ter download para Android (.APK)');
  assert.ok(indexHtml.includes('Verbo-Vivo-iOS.ipa'), 'index.html deve ter download para iPhone (.IPA)');
  assert.ok(indexHtml.includes('Verbo-Vivo-Windows-Setup.exe'), 'index.html deve ter download para Windows (.EXE)');
  assert.ok(indexHtml.includes('Dicionário Bíblico'), 'index.html deve apresentar o Dicionário Bíblico');
  assert.ok(indexHtml.includes(pkg.version), `index.html deve exibir a versão atual ${pkg.version}`);

  const appHtml = fs.readFileSync(path.join(rootDir, 'app.html'), 'utf8');
  assert.ok(appHtml.includes('tab-dicionario'), 'app.html deve conter a aba Dicionário Bíblico');
  assert.ok(appHtml.includes('tab-marcacoes'), 'app.html deve conter a aba Minhas Marcações');
  assert.ok(appHtml.includes('mobile-bottom-nav-inner'), 'app.html deve conter a barra inferior redesenhada');
  assert.ok(appHtml.includes('mobile-nav-icon-pill'), 'app.html deve conter cápsulas de ícone na barra inferior');

  const styleCss = fs.readFileSync(path.join(rootDir, 'src', 'style.css'), 'utf8');
  assert.ok(styleCss.includes('.mobile-nav-icon-pill'), 'src/style.css deve estilizar cápsulas da barra inferior');
  assert.ok(styleCss.includes('.mobile-nav-item.active::before'), 'src/style.css deve incluir indicador ativo na barra inferior');

  const readme = fs.readFileSync(path.join(rootDir, 'README.md'), 'utf8');
  const readmeLower = readme.toLowerCase();
  assert.ok(readme.includes(pkg.version), `README.md deve refletir a versão atual ${pkg.version}`);
  assert.equal(readmeLower.includes('devocional'), false, 'README.md não deve listar Devocional (removido)');
  assert.equal(readmeLower.includes('planos de leitura'), false, 'README.md não deve listar Planos de Leitura (removido)');
  assert.equal(readmeLower.includes('palavra pastoral'), false, 'README.md não deve listar Palavra Pastoral (removido)');
  assert.equal(readmeLower.includes('altar de oração'), false, 'README.md não deve listar Altar de Oração (removido)');

  const contributing = fs.readFileSync(path.join(rootDir, 'CONTRIBUTING.md'), 'utf8');
  assert.equal(contributing.toLowerCase().includes('devocionais'), false, 'CONTRIBUTING.md não deve mencionar devocionais');

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
