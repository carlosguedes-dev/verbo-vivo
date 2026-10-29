import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

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

test('Integridade do App: Módulos de Panorama, Tira-Dúvidas, Refúgio, Devocionais e Planos estão presentes e sem Oração Guiada ou Doutrina & Harpa', () => {
  const dataFiles = [
    'books-metadata.ts',
    'tira-duvidas.ts',
    'refugio-biblico.ts',
    'devocionais.ts',
    'planos-leitura.ts'
  ];

  for (const file of dataFiles) {
    const full = path.join(rootDir, 'src', 'data', file);
    assert.ok(fs.existsSync(full), `Módulo de dados ${file} deve existir`);
    const content = fs.readFileSync(full, 'utf8');
    assert.ok(content.length > 1000, `Módulo ${file} deve conter conteúdo rico`);
  }

  // Verifica remoção completa de Doutrina & Harpa e Oração Guiada
  assert.equal(
    fs.existsSync(path.join(rootDir, 'src', 'data', 'doutrina-solas.ts')),
    false,
    'doutrina-solas.ts deve ter sido removido'
  );
  assert.equal(
    fs.existsSync(path.join(rootDir, 'src', 'data', 'harpa-louvores.ts')),
    false,
    'harpa-louvores.ts deve ter sido removido'
  );

  const refugioTs = fs.readFileSync(path.join(rootDir, 'src', 'data', 'refugio-biblico.ts'), 'utf8');
  assert.equal(refugioTs.includes('guidedPrayer'), false, 'refugio-biblico.ts não deve conter guidedPrayer');

  const appHtml = fs.readFileSync(path.join(rootDir, 'app.html'), 'utf8');
  assert.equal(appHtml.includes('tab-doutrina'), false, 'app.html não deve conter a aba Doutrina & Harpa');
  assert.equal(appHtml.includes('Doutrina & Harpa'), false, 'app.html não deve conter botão Doutrina & Harpa');
  assert.equal(appHtml.toLowerCase().includes('oração guiada'), false, 'app.html não deve mencionar oração guiada');

  const mainTs = fs.readFileSync(path.join(rootDir, 'src', 'main.ts'), 'utf8');
  assert.equal(mainTs.includes('Oração Guiada'), false, 'src/main.ts não deve renderizar Oração Guiada');
  assert.equal(mainTs.includes('guidedPrayer'), false, 'src/main.ts não deve acessar guidedPrayer');
});

test('Arquitetura Multiplataforma: Site de Download (index.html) e configurações Android, iOS e Windows estão presentes', () => {
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes('Verbo-Vivo-Android.apk'), 'index.html deve ter download para Android (.APK)');
  assert.ok(indexHtml.includes('Verbo-Vivo-iOS.ipa'), 'index.html deve ter download para iPhone (.IPA)');
  assert.ok(indexHtml.includes('Verbo-Vivo-Windows-Setup.exe'), 'index.html deve ter download para Windows (.EXE)');

  assert.ok(fs.existsSync(path.join(rootDir, 'electron', 'main.cjs')), 'Configuração Electron Windows deve existir');
  assert.ok(fs.existsSync(path.join(rootDir, 'capacitor.config.json')), 'Configuração Capacitor Android/iOS deve existir');
});
