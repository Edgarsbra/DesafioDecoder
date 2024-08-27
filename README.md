# Desafio Decoder

Este projeto é uma aplicação web simples que permite que você criptografe e descriptografe mensagens de texto. Isso significa que você pode transformar uma mensagem em um código secreto e depois decifrá-la de volta ao normal. A interface foi criada com HTML, o comportamento da aplicação foi programado com JavaScript, e a aparência foi feita com CSS.

## Como o JavaScript Funciona

O JavaScript é a parte do código que faz o site funcionar e interagir com o usuário. Vamos ver o que cada parte do JavaScript faz:

### Funções e Explicações

1. **`pegarTexto()`**:
    - **O que faz**: Pega o texto que você digitou na caixa de texto.
    - **Como funciona**: Busca o texto que você inseriu no campo onde se escreve a mensagem e o guarda para ser usado depois.

2. **`contemCaracteresInvalidos(texto)`**:
    - **O que faz**: Verifica se o texto tem caracteres inválidos, como letras maiúsculas ou símbolos.
    - **Como funciona**: Verifica se o texto tem algo além de letras minúsculas ou espaços, e retorna `true` se encontrar algo diferente.

3. **`aplicarEstilosAposValidacao()`**:
    - **O que faz**: Muda o estilo do texto depois de verificar que ele é válido.
    - **Como funciona**: Centraliza o texto, muda a cor e o tamanho da fonte, e mostra o botão de copiar.

4. **`mostrarAviso()`**:
    - **O que faz**: Mostra uma mensagem de aviso se o texto estiver vazio ou tiver caracteres inválidos.
    - **Como funciona**: Exibe uma mensagem pedindo para você digitar um texto válido e esconde o botão de copiar.

5. **`processarTexto(acao)`**:
    - **O que faz**: Criptografa ou descriptografa o texto, dependendo do que você escolher.
    - **Como funciona**: 
        - Pega o texto que você digitou.
        - Verifica se o texto é válido.
        - Criptografa ou descriptografa o texto.
        - Atualiza a tela para mostrar o resultado e esconde o que não é mais necessário.

6. **`criptografar()`**:
    - **O que faz**: Criptografa o texto.
    - **Como funciona**: Chama a função `processarTexto()` para criptografar o texto.

7. **`descriptografar()`**:
    - **O que faz**: Descriptografa o texto.
    - **Como funciona**: Chama a função `processarTexto()` para descriptografar o texto.

8. **`copiarTexto()`**:
    - **O que faz**: Copia o texto criptografado ou descriptografado para que você possa colá-lo em outro lugar.
    - **Como funciona**: Cria uma área de texto temporária, copia o conteúdo, e depois apaga essa área temporária.

## Como o CSS Funciona

- **Aparência do Site**: O CSS é usado para definir como o site vai parecer, como as cores, tamanhos de letras e onde cada coisa fica na tela.
- **Responsividade**: O site se ajusta para ficar bonito e fácil de usar em diferentes tamanhos de tela, como em celulares e computadores, graças ao uso de regras de CSS chamadas "media queries".

## Observações do Criador

"A parte mais difícil para mim foi estilar o modelo CSS. A parte visual, design, criatividade e artístico nunca foi muito meu forte."
