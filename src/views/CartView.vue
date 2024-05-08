<template>
    <div class="cart-container">
        <h2>Your Shopping Cart</h2>
        <div v-if="cartStore.isEmpty">
            <p class="page-message">Your cart is empty.</p>
        </div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <div class="cart-item-details">
                    <img :src="item.image" alt="Product Image" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                        <p class="item-price">Price: {{ productStore.convertToPhp(item.price) }}</p>
                        <div class="quantity-controls">
                            <button @click="decrementQuantity(item)" class="quantity-button">-</button>
                            <span class="item-quantity">{{ item.quantity }}</span>
                            <button @click="incrementQuantity(item)" class="quantity-button">+</button>
                        </div>
                    </div>
                <div class="cii-right">
                    <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
                    <p class="item-total">Total: {{ productStore.convertToPhp(item.price * item.quantity) }}</p>
                </div>
                </div>
            </div>
            <div class="cart-summary">
                <p class="total-items">Total Items: {{ totalItems }}</p>
                <p class="total-price">Total Price: {{ productStore.convertToPhp(totalPrice) }}</p>
                <button @click="clearCart" class="clear-button">Clear All</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();
const cartStore = useCartStore()
const cartItems = computed( () => cartStore.cart)
// const { cart , isEmpty } = cartStore.cartState;
// const cartItems = computed( () => cart );


const totalItems = computed(() =>
    cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
);

const totalPrice = computed(() =>
    cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
);

const removeFromCart = (itemId) => {
    // cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
    // cartStore.mpty = cartItems.length === 0;
    cartStore.removeFromCart(itemId);
};

const updateQuantity = (item) => {
    item.quantity = Math.max(1, item.quantity); // Ensure quantity is at least 1
};

const incrementQuantity = (item) => item.quantity++;

const decrementQuantity = (item) => {
    if (item.quantity > 1) item.quantity--;
};

const clearCart = () => { 
    cartStore.emptyCart();
    cartStore.isEmpty = true;
};

</script>


<style scoped>
.cart-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.page-message {
    text-align: center;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.cart-item {
    /* width: 600px; */
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border: 3px solid #007bff;
    padding: 1rem;
    border-radius: 10px;
}

.cart-item-details {
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 2fr 110px;
    grid-template-rows: 1fr;
    gap: 1rem;
}

.cart-item-image {
    width: 200px;
    height: 100%;
    /* margin-right: 20px; */
    border-radius: 5px;
    object-fit: scale-down;
    overflow: hidden;
}
.cart-item-info {
    place-self: start;
}

.cart-item-info h3 {
    height: 100%;
    margin: 0;
    font-size: 1.2rem;
    color: #333;
}

.item-price,
.item-total {
    font-weight: 500;
    font-size: 1.1rem;
    color: #666;
}

.quantity-controls {
    display: flex;
    align-items: center;
}

.quantity-button {
    padding: 5px 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.quantity-button:hover {
    background-color: #0056b3;
}

.item-quantity {
    margin: 0 10px;
}

.remove-button,
.clear-button {
    padding: 8px 15px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.remove-button:hover,
.clear-button:hover {
    background-color: #c82333;
}

.cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.total-items,
.total-price {
    font-size: 1.2rem;
    color: #333;
}

.clear-button {
    padding: 10px 20px;
    font-size: 1rem;
}

.cii-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>