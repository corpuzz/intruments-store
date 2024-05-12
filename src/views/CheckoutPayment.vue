<template>
    <div class="cart-container">
        <h2>Checkout</h2>
        <div v-if="cartStore.isEmpty">
            <p class="page-message">Nothing to checkout</p>
        </div>

        <div v-else>
            <div class="shipping-address">
                <p class="address-label">Shipping Address</p>
                <p class="address">La, Trinidad</p>
            </div>

            <div class="shipping-address">
                <h3>Orders</h3>
                <div v-for="item in cartItems" :key="item.id" class="cart-item">
                    <div class="cart-item-details">
                        <img :src="item.image" alt="Product Image" class="cart-item-image">
                        <div class="cart-item-info">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.description }}</p>
                            <p class="item-price">Price: {{ productStore.convertToPhp(item.price) }}</p>
                        </div>
                        <div class="cii-right">
                            <div>
                                <p class="item-price">Quantity:</p>
                                <div class="quantity-controls">
                                    <button @click="decrementQuantity(item)" class="quantity-button">-</button>
                                    <span class="item-quantity">{{ item.quantity }}</span>
                                    <button @click="incrementQuantity(item)" class="quantity-button">+</button>
                                </div>

                            </div>
                            <!-- <input type="checkbox" id="selected-product" name="selected-product" @change="addToCheckout(item)"> -->
                            <div>
                                <!-- <button @click="removeFromCart(item.id)" class="remove-button">Remove</button> -->
                                <p class="item-total">Total: {{ productStore.convertToPhp(item.price * item.quantity) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shipping-address">
                <p class="address-label">Payment method</p>
                <div class="payment-div">
                    <p class="payment-method-p">Cash on delivery</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product" @change="addToCheckout(item)">
                </div>
                <div class="payment-div">
                    <p class="payment-method-p">GCash</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product" @change="addToCheckout(item)">
                </div>
                <div class="payment-div">
                    <p class="payment-method-p">Debit/Credit card</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product" @change="addToCheckout(item)">
                </div>
            </div>
            <div class="cart-summary">
                <p class="total-items">Total Items: {{ totalItems }}</p>
                <p class="total-price">Total Amount: {{ productStore.convertToPhp(totalPrice) }}</p>
                <div>
                    <button @click="clearCart" class="cart-button checkout">Place order</button>
                </div>
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
const addToCheckout = (item) => {
    cartStore.addToCheckout(item);
}


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
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.shipping-address {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px #636363c8;
    margin-bottom: 1rem;
}

.payment-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.payment-checkbox {
    margin-right: 1rem;
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
    /* margin: 0; */
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
.remove-button {
    width: 100%;
}

.remove-button,
.cart-button {
    padding: 8px 15px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.remove-button:hover,
.cart-button:hover {
    background-color: #c82333;
}

.cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0px 0px 8px 0px #65656586;
    padding: 0px 1rem;
}

.total-items,
.total-price {
    font-size: 1.2rem;
    color: #333;
}

.cart-button {
    padding: 10px 20px;
    font-size: 1rem;
    margin: auto 5px;
}

.checkout {
    background-color: #007bff;
}
.checkout:hover {
    background-color: #0056b3;

}

.cii-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#selected-product {
    transform: scale(2);
    /* align-self: end center; */
}



</style>