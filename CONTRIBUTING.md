# Contribuindo com o Verbo Vivo

Obrigado pelo seu interesse em contribuir com o **Verbo Vivo**! Nosso propósito é oferecer uma leitura clara, fiel e sem distrações das Sagradas Escrituras em múltiplas plataformas.

## Diretrizes Teológicas e Editoriais

1. **Sola Scriptura (Somente a Escritura)**: Todo o conteúdo do aplicativo — **Bíblia Sagrada**, **Dicionário Bíblico**, **Refúgio nas Escrituras** e **Tira-Dúvidas Bíblico** — deve ser fundamentado nos 66 livros canônicos (39 do Antigo Testamento e 27 do Novo Testamento).
2. **Dicionário Bíblico e Refúgio (Somente Versículos)**:
   - Os verbetes do **Dicionário Bíblico** devem ser **palavras ou expressões concisas** (até 3 palavras, sem pontuação de frase) respondidos **exclusivamente com referências bíblicas** válidas nas 3 traduções (`ACF`, `NVI` e `ARA`), sem comentários humanos.
   - O **Refúgio nas Escrituras** exibe exclusivamente passagens bíblicas diretas para cada situação.
3. **Cristocentrismo e Clareza no Tira-Dúvidas Bíblico**: Conforme 1 Pedro 3:15 e Efésios 4:15, os estudos do **Tira-Dúvidas Bíblico** devem manter fidelidade à fé cristã histórica, com linguagem limpa (sem Markdown cru) e referências bíblicas verificadas.

## Como Contribuir Tecnicamente

1. Faça um Fork do repositório.
2. Crie uma branch para a sua melhoria (`git checkout -b feature/novos-verbetes-dicionario`).
3. Faça suas alterações mantendo tipagem estrita em TypeScript e manipulação segura do DOM (sem `innerHTML`).
4. Execute os testes de integridade (`npm test`) e o build (`npm run build`).
5. Faça o commit (`git commit -m 'feat: adiciona novos verbetes ao dicionário bíblico'`).
6. Envie para a sua branch (`git push origin feature/novos-verbetes-dicionario`) e abra um Pull Request.

> *"Examinando diariamente as Escrituras para ver se estas coisas eram assim."* — **Atos 17:11**
