# Carrinho de Compras Shopee
## Funcionalidades
- criar item
    - nome
    - preço
    - quantidade
    - subtotal conforme a quantidade e preço
- adicionar item ao carrinho
- exibir itens do carrinho
- deletar um item do carrinho
- remover uma unidade de item do carrinho
- exibir valor total do carrinho

## Funções Implementadas
- `createItem(name, price, quantity)`
    - cria um produto
    - recebe nome (`name`), preço (`price`) e quantidade (`quantity`)
    - retorna um objeto com `name`, `price`, `quantity` e `subtotal`
    - subtotal é o cálculo da quantidade de itens vezes o preço

- `addItem(userCart, item)`
    - adiciona um item ao carrinho
    - `userCart` é um array que representa o carrinho de compras
    - `item` é um objeto que representa um item a ser adicionado ao carrinho

- `deleteItem(userCart, index)`
    - deleta um item do carrinho
    - `userCart` é um array que representa o carrinho de compras
    - `index` é o número que representa a posição do item no carrinho

- `removeItem(userCart, item)`
    - diminui a quantidade de um item no carrinho em um
    - remove o item no carrinho se houver somente uma unidade dele
    - `userCart` é um array que representa o carrinho de compras
    - `item` é um objeto que representa o item no carrinho
    - retorna item não encontrado se `item` não for encontrado em `userCart`

- `showCart(userCart)`
    - exibe todos os itens no carrinho: posição, nome, preço, quantidade e subtotal
    - `userCart` é um array que representa o carrinho de compras

- `totalCart(userCart)`
    - exibe o preço total de todos os items do carrinho
    - representa a soma de todos os subtotais dos itens no carrinho
    - `userCart` é um array que representa o carrinho de compras