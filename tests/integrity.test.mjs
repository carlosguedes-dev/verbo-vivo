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

test('Segurança DOM: Código-fonte do cliente (src/main.ts) não utiliza innerHTML inseguro ou eval', () => {
  const mainTs = fs.readFileSync(path.join(rootDir, 'src', 'main.ts'), 'utf8');
  assert.equal(mainTs.includes('.innerHTML'), false, 'src/main.ts não deve usar innerHTML');
  assert.equal(mainTs.includes('eval('), false, 'src/main.ts não deve usar eval()');
});

test('Integridade Teológica: Módulos de Panorama, Tira-Dúvidas, Refúgio, Devocionais, Solas e Harpa estão presentes e completos', () => {
  const dataFiles = [
    'books-metadata.ts',
    'tira-duvidas.ts',
    'refugio-biblico.ts',
    'devocionais.ts',
    'planos-leitura.ts',
    'doutrina-solas.ts',
    'harpa-louvores.ts'
  ];

  for (const file of dataFiles) {
    const full = path.join(rootDir, 'src', 'data', file);
    assert.ok(fs.existsSync(full), `Módulo de dados ${file} deve existir`);
    const content = fs.readFileSync(full, 'utf8');
    assert.ok(content.length > 1000, `Módulo ${file} deve conter conteúdo rico`);
  }
});
