// localStorage.getItem('shopping_cart')
// localStorage.setItem('shopping_cart', JSON.stringify(cart));
const getDb = () => {
    return localStorage.getItem('shopping_cart')
}

const addToDb = (id) => {
    const exist = getDb();
    const shopping_cart = {}
    if (!exist) { //jodi cart e kichu na thake
        shopping_cart[id] = 1
    }
    else { // jodi cart e product thake
        const shopping_cart = JSON.parse(exist);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
        updateDb(shopping_cart);
    }
}
const updateDb = (cart) => { //update cart
    localStorage.setItem('shopping_cart', cart)
}

// delete from localStorage 
const removeFromDb = (id) => {
    const exist = getDb();
    if (!exist) {
        return
    }
    else {
        const shopping_cart = JSON.parse(exist);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }

}
const clearCart = () => {
    localStorage.removeItem('shopping_cart')
}
const getStoredCart = () => {
    const exist = getDb();
    return exist ? JSON.parse(exist) : {};
}