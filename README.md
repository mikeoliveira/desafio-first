# Desafio First

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 16.1.6.

## Ambiente de Desenvolvimento

Rode `npm start` para rodar o server de desenvolvimento (dev). NAvegue para `http://localhost:4200/`. A Aplicação será carregada automaticamente após qualquer alteração de arquivos, mas recomento RESTARTAR o servidor caso você (desenvolvedor) venha a instalhar alguma biblioteca ou mexer nos arquivos `*.module.ts`.

Rode `npm run server` para rodar o json-server. Esta aplicação irá fornecer uma API mockada com os valores a serem consumidos pela aplicação

## Bom saber que:

Esta aplicação se encontra com `ESLint`, `CommitLint`, `prettier`, `lint-staged` e `Husky`.
Antes de commitar se atente a escrita do seu código e da mensagem do seu commit para que não seja barrada em uma dessas validações.
Qualquer dúvida seguem links abaixo:
[ESLint - Rules](https://eslint.org/docs/latest/rules/)
[Commitlint - config conventional](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md)
[Prettier - Docs](https://prettier.io/docs/en/index.html)
[lint-staged](https://github.com/okonet/lint-staged)
[Husky](https://typicode.github.io/husky/)

## Desafio - Parte 1 - Pontos fortes

- Utilizado Lazyload na Rota
- Criação de PIPE (DotToComma);
  Estilo
- SCSS - Pattern BEM - Bloco Elemento e Modificador
- Paginas de estilos com Estrutura de importação
- Definição de cores e layout de componentes default do projeto

## Debitos Técnicos - Parte 1

- Revisar o funcionamento do Tooltip quando a tela esta em modo;
- resposivo ou a janela é diminuida;

## Desafio - Parte 2 - Pontos Fortes

- Utilizado Rota por componente;
- Graficos construidos sem framework (somente HTML e CSS);
- Componentes Dinâmicos - pasta: 'share' - (reutilizáveis);
- Utilização ForkJoin para otimizar perfomance das chamadas;

## Debitos Técnicos - Parte 2

Gráfico:

- Inserir legenda na parte de baixo
- Bordas das barras deve conter "radius" somente nas pontas intermediárias sendo dinâmica a inserção das classes
- Inseir Eixo x e Y

- Criar combo de periodo
- Inserir os Tooltips com informações
- Adicionar a Atualização no final do combobox
