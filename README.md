# Bin2Dec

Uma aplicação web simples e responsiva que converte sequências de dígitos binários (0 e 1) em seu equivalente decimal em tempo real.

Inspirado nos desafios práticos do repositório [App-Ideas](https://github.com/florinpop17/app-ideas).

## 📌 Funcionalidades

- **Conversão Binário para Decimal:** Converte qualquer sequência binária inserida pelo usuário em valor decimal base 10.
- **Validação de Entrada:** Alerta o usuário caso o campo esteja vazio ou contenha caracteres diferentes de `0` e `1`.
- **Modo Somente Leitura:** Campo de resultado protegido contra alterações manuais para garantir a consistência do cálculo.
- **Interface Centralizada:** Layout minimalista estilizado com Flexbox e tipografia do Google Fonts (Roboto).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica dos elementos e formulários.
- **CSS3:** Estilização com Flexbox e importação da fonte externa *Roboto*.
- **JavaScript (ES6):** Validação de dados e lógica de conversão via `parseInt(valor, 2)`.

## 📁 Estrutura de Arquivos

```plaintext
bin2dec/
├── index.html      # Estrutura visual da aplicação
├── style.css       # Estilos e posicionamento Flexbox
├── main.js         # Lógica de validação e conversão
└── LICENSE         # Licença do projeto (MIT)
```

## 🚀 Como Executar o Projeto

Como o projeto utiliza tecnologias nativas do navegador, não é necessário instalar dependências ou configurar ambientes complexos:

1. Clone o repositório ou faça o download dos arquivos:
```bash
git clone https://github.com/vdonoladev/bin2dec.git

```
2. Acesse a pasta do projeto:
```bash
cd bin2dec
```
3. Abra o arquivo `index.html` em qualquer navegador:
* Clique duas vezes sobre o arquivo `index.html`, ou
* Execute usando a extensão **Live Server** no VS Code.

## 💡 Como Usar

1. Digite um número binário no campo **Binary** (exemplo: `1010`).
2. Clique no botão **CONVERTER** ou pressione `Tab`/clique fora do campo de entrada para disparar a função.
3. O equivalente decimal (exemplo: `10`) será exibido automaticamente no campo **Decimal**.
4. Caso insira dígitos inválidos (como `2`, `abc` ou caracteres especiais), um alerta avisará sobre o formato correto.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para mais informações.
