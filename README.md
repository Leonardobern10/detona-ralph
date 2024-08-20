# Detona Ralph

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-Available-brightgreen)](https://leonardobern10.github.io/detona-ralph/)

**Detona Ralph** é um jogo baseado no popular personagem de animação "Ralph, o Demoledor". O objetivo é clicar no Ralph que aparece aleatoriamente em diferentes posições para marcar pontos. O jogo tem um tempo limite e o jogador perde vidas a cada segundo que passa sem clicar no Ralph. Quando as vidas acabam, a pontuação é resetada e o jogo recomeça.

## Funcionalidades

- **Contador de Tempo:** Um cronômetro que diminui a cada segundo.
- **Pontuação:** Contador que aumenta cada vez que Ralph é clicado.
- **Vidas:** O número de vidas do jogador que diminui a cada segundo que o jogador não clica no Ralph.
- **Sons:** Efeitos sonoros quando Ralph é clicado.

## Acesso

Disponível em: [Detona Ralph](https://leonardobern10.github.io/detona-ralph/)

## Instalação

Para rodar o jogo localmente, siga estas etapas:

1. Clone o repositório:

    ```bash
    git clone https://github.com/leonardobern10/detona-ralph.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd detona-ralph
    ```

3. Abra o arquivo `index.html` em seu navegador.

## Estrutura do Projeto

- **`index.html`**: Arquivo principal HTML do jogo.
- **`src/styles/reset.css`**: Arquivo CSS para redefinir os estilos padrão do navegador.
- **`src/styles/main.css`**: Arquivo CSS principal com os estilos do jogo.
- **`src/scripts/engine.js`**: Script JavaScript que contém a lógica do jogo.
- **`src/images/`**: Pasta contendo as imagens usadas no jogo.
- **`src/audios/`**: Pasta contendo os efeitos sonoros do jogo.

## Código JavaScript

### Estado do Jogo

- `state.view`: Referências para os elementos DOM do jogo.
- `state.values`: Valores do estado do jogo como tempo restante, pontuação e vidas.
- `state.actions`: Identificadores dos timers para atualizar o jogo.

### Funções Principais

- **`countDown()`**: Atualiza o cronômetro e controla as vidas do jogador.
- **`playSound(audioName)`**: Reproduz o efeito sonoro especificado.
- **`randomSquare()`**: Seleciona uma posição aleatória para o Ralph aparecer.
- **`addListenerHitBox()`**: Adiciona um ouvinte de eventos para detectar cliques no Ralph.

### Inicialização

- **`initialize()`**: Configura o jogo e adiciona ouvintes de eventos.

## Contribuição

Sinta-se à vontade para fazer um fork deste projeto e enviar pull requests com melhorias. Qualquer feedback ou sugestão é bem-vinda!

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
