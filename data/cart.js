export const cart = [
    {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    },
    {
    productId: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    quantity: 2,
    },
]


export function addToCart(productId){

    const selectedQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

          
    const addedToCart = document.querySelector(`.js-added-to-cart-${productId}`)

    addedToCart.classList.add('added-to-cart-active')
    clearTimeout(addedToCart);

    clearTimeout(cartTimeout);
   cartTimeout = setTimeout(() => {
    addedToCart.classList.remove('added-to-cart-active')
    }, 2000)
    
    const selectedProduct = { productId , selectedQuantity };

    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += selectedProduct.selectedQuantity;
    }else{
      cart.push({
        productId: selectedProduct.productId,
        quantity: selectedProduct.selectedQuantity,
    });
    }console.log(selectedProduct);
    
  }
  