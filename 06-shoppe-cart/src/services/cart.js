
async function addItem(userCart, item){
    userCart.push(item);
}

async function deleteItem(userCart, index){
    const itemIndex = index - 1;
    userCart.splice(itemIndex, 1);
}

async function removeItem(userCart, item){
    const itemIndex = userCart.findIndex((product) => product.name == item.name);

    if (itemIndex === -1){
        console.log("Item não encontrado no carrinho.")
        return;
    }
    if (userCart[itemIndex].quantity >= 2) {
        userCart[itemIndex].quantity -= 1;
        return;
    } 
    if (userCart[itemIndex].quantity <= 1) {
        userCart.splice(itemIndex, 1)
        return;
    }
}
    
async function showCart(userCart){
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} | Quantidade: ${item.quantity}x | Preço: ${item.price} | Subtotal: ${item.subtotal()}`);
    });
}

async function totalCart(userCart){
    const total = userCart.reduce((totalPrice, item) => totalPrice + item.subtotal(), 0);
    console.log(`Total do Carrinho: ${total}`);
}

export {
    addItem,
    deleteItem,
    showCart,
    totalCart,
    removeItem
}