import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: [],
        checkout: [],
        isEmpty: true,
    }),
    actions: {
        addToCart(product) {
            // this.cart.push(product);
            this.isEmpty = false;
            const existingProduct = this.cart.find(item => item.id === product.id);

            if (existingProduct) {
                // Product already exists in cart, increment its quantity
                existingProduct.quantity += 1;
            } else {
                // Product doesn't exist in cart, add it to the cart array
                this.cart.push(product);
                product.quantity = 1  // Initialize quantity to 1 for new product
            }
            this.$state.cart = [...this.cart];
        },
        addToCheckout(product) {
            this.checkout.push(product);
            this.$state.checkout = [...this.checkout];
        },
        removeFromCart(itemId) {
            this.cart = this.cart.filter((item) => item.id !== itemId);
            this.isEmpty = this.cart.length === 0;
            this.$state.cart = [...this.cart];
        },
        emptyCart() {
            this.cart = [];
            this.isEmpty = true;
            this.$state.cart = [...this.cart];
        }
    },
    getters: {
        cartState() {
            return toRefs(reactive(this.$state));
        }
    }
});


// PROBLEM: The cart array get's updated but UI does not reflect the changes