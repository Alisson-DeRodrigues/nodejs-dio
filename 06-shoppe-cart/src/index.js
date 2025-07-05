import * as cartService from './services/cart.js'
import createItem from './services/item.js'

const myCart = []

console.log("Bem-vindo ao carrinho de compras da Shopee!\n");

const item1 = await createItem("Lâmpada Led", 12.99, 3);
const item2 = await createItem("Pneu Aro 29", 80.55, 2);
const item3 = await createItem("Bola de Tênis", 50.22, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

await cartService.deleteItem(myCart, 2);

await cartService.showCart(myCart);

await cartService.totalCart(myCart);