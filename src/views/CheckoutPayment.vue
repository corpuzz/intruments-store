<template>
    <!-- <NavBar /> -->
    <div class="cart-container">
        <h2>Checkout</h2>

        <div>
            <div class="shipping-address">
                <h3 class="address-label">Shipping Address</h3>
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
                                <p class="item-price quantity">Quantity:</p>
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
                <h3 class="address-label">Payment method</h3>
                <div class="payment-div">
                    <p class="payment-method-p">Cash on delivery</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product">
                </div>
                <div class="payment-div">
                    <p class="payment-method-p">GCash</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product">
                </div>
                <div class="payment-div">
                    <p class="payment-method-p">Debit/Credit card</p>
                    <input class="payment-checkbox" type="checkbox" id="selected-product" name="selected-product">
                </div>
            </div>
            <div class="cart-summary">
                <h3 class="total-items">Total Items: {{ totalItems }}</h3>
                <p class="total-price">Total Amount: {{ productStore.convertToPhp(totalPrice) }}</p>
                <div>
                    <button @click="handleCheckout" class="cart-button checkout">Place order</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal  -->
    <div v-if="showOrderPlacedModal">
        <div class="modal-backdrop"></div>
        <div class="modal">
            <div class="modal-header">
                <h3>Order placed!</h3>
                <button @click="closeOrderPlacedModal" class="modal-close-button">
                </button>
            </div>
            <div class="modal-body">
                <p>Your order has been successfully placed.<br> Thank you for shopping.</p>
                <button @click="resetCheckout" class="modal-button">Confirm</button>
                <!-- <button @click="resetCheckout" class="modal-button">Continue Shopping</button> -->
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';
import { useRouter } from 'vue-router'
// import NavBar from '@/components/NavBar.vue';

const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.checkout)
// const { cart , isEmpty } = cartStore.cartState;
// const cartItems = computed( () => cart );

//  Modal methods

const showOrderPlacedModal = ref(false);

function closeOrderPlacedModal() {
    showOrderPlacedModal.value = false;
    cartStore.checkout = [];
    router.push({ name: 'home' });
}

function resetCheckout() {
    cartStore.checkout = [];
    router.push({ name: 'home' });
}

const handleCheckout = () => {
    showOrderPlacedModal.value = true;
    for (let order of Object.values(cartStore.checkout)) {
        cartStore.orders.push(order);
    }


    // Reset checkbox state
    for (let product of productStore.products) {
        product.isChecked = false;
    }

    // Clear checkout array

    // cartStore.checkout = [];
    // router.push({name: 'home'});
}

const totalItems = computed(() =>
    cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
);

const totalPrice = computed(() =>
    cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
);


const updateQuantity = (item) => {
    item.quantity = Math.max(1, item.quantity); // Ensure quantity is at least 1
};

const incrementQuantity = (item) => item.quantity++;

const decrementQuantity = (item) => {
    if (item.quantity > 1) item.quantity--;
};


</script>


<style scoped>
.cart-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 1rem 5rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.shipping-address {
    padding: 1rem 2rem;
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
    height: 150px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
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
    grid-template-rows: 150px;
    gap: 1rem;
}

.cart-item-image {
    /* width: 200px; */
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
    background-color: #e74152;
}

.checkout:hover {
    background-color: #ba2030;

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

.quantity {
    margin-top: 0;
}

/* Modal style */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    /* Adjust as needed */
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 11;
    /* Adjust as needed */
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.modal-close-button {
    width: 24px;
    height: 24px;
    padding: 0px;
    background: no-repeat url("@/assets/close.png"); 
    background-size: 24px;
  border: none;
  /* background: none; */
  cursor: pointer;
  outline: none;
}

.modal-body {
    text-align: center;
}

.modal-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
}
</style>