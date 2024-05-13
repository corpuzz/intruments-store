<template>
    <div class="profile-container">
        <div class="profile-header">
            <img class="profile-picture" :src="user.imageUrl" alt="Profile Picture" />
            <div class="profile-details">
                <h2>{{ user.name }}</h2>
            </div>
        </div>
        <div class="profile-sections">
            <div class="profile-section">
                <h3>Account information</h3>
                <hr style="width: 100%"/>
                <ul>
                    <li>
                        <p>Shipping Address: <br>{{ user.address }}</p>
                        <!-- <span v-if="address">Default</span> -->
                        <!-- <router-link :to="`/profile/address/${address}/edit`">Edit</router-link> -->
                    </li>
                    <li>
                        <p v-if="user.phone">Phone:<br> {{ user.phone }}</p>
                    </li>
                    <li>
                        <p v-if="user.email">Email:<br> {{ user.phone }}</p>
                    </li>
                </ul>
                <!-- <router-link to="/profile/address/new">Add New Address</router-link> -->
            </div>
            <div class="profile-section">
                <h3>Order History</h3>
                <hr style="width: 100%; margin-bottom: 1rem;"/>
                <!-- <ul>
          <li v-for="order in user.orders" :key="order.id">
            <p>Order #{{ order.id }} - {{ order.name }}</p>
            <router-link :to="`/order-details/${order.id}`">View Details</router-link>
          </li>
        </ul> -->
                <div v-for="item in cartItems" :key="item.id" class="cart-item">
                    <div class="cart-item-details">
                        <img :src="item.image" alt="Product Image" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="pp-div">
                                <p class="pp pname">{{ item.name }}</p>
                                <p class="pp">{{ item.description }}</p>
                            </div>
                            <button class="btn" @click="viewDescription(item)">View</button>
                        </div>
                    </div>
                </div>
                <!-- <router-link to="/order-history">View All Orders</router-link> -->
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';

const router = useRouter();
const cartStore = useCartStore();
const cartItems = computed( () => cartStore.orders)
const productStore = useProductStore();
const user = {
    name: "Jose P. Rizal",
    email: "random@gmail.com",
    address: 'La Trinidad, Benguet',
    phone: '09020210102',
    paymentMethods: [
        'COD', 'GCash', 'Maya'
    ],
    orders: [],
    imageUrl: "src/views/image.png"
}
const viewDescription = (product) => {
    productStore.setSelectedProduct(product)
    // showDescription = true;
    // router.push(`/productDescription/`);
    router.push({name: 'productDescription'});
}
</script>

<style scoped>
.profile-container {
    /* width: 70vw; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.profile-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(99, 99, 99, 0.57);
}

.profile-picture {
    margin-left: 2rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-details {
    flex-grow: 1;
}

.profile-sections {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.profile-section {
    background-color: #fff;
    flex: 1 0 calc(33% - 20px);
    padding: 20px;
    /* border: 1px solid #ddd; */
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(99, 99, 99, 0.57);
}

.profile-section h3 {
    margin-bottom: 10px;
}

.profile-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.profile-section li {
    margin-bottom: 10px;
}

.profile-section a {
    color: #333;
    text-decoration: none;
}

.profile-section a:hover {
    color: #007bff;
}

/* .profile-section button {
    background-color: transparent;
    border: none;
    color: #333;
    cursor: pointer;
} */

.profile-section button:hover {
    text-decoration: underline;
}

.profile-section span.default {
    display: inline-block;
    padding: 5px;
    border-radius: 4px;
    color: #fff;
    background-color: #28a745;
    font-size: 12px;
    margin-right: 10px;
}


.cart-item {
    /* width: 600px; */
    height: 50px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    margin-bottom: 20px;
    padding-bottom: 10px;
    /* border: 3px solid #007bff; */
    box-shadow: 0px 0px 8px 0px #636363c8;
    padding: 1rem;
    border-radius: 10px;
}

.cart-item-details {
    height: 100%;
    width: 100%;
    display: flex;
}

.cart-item-image {
    /* width: 200px; */
    /* height: 100%; */
    /* margin-right: 20px; */
    border-radius: 5px;
    object-fit: scale-down;
    overflow: hidden;
}
.cart-item-info {
    margin-left: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 400px 1fr;
    place-content: center;

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

.btn {
    height: 30px;
    width: 50px;
    background-color: #007bff;
    padding: 0px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    /* transition: font-weight 0.3 ease-in-out; */
    place-self: center end;
}
.btn:hover {
    color: white;
    background: #005fc5;
    /* font-weight: 700; */
}

.pname {
    font-weight: bold;
}
.pp {
    text-align: left;
    margin: 0 auto;
    overflow: hidden;
}

.pp-div {
    margin: auto 0;
    overflow: hidden;
    /* padding: 0 1rem; */
}

</style>
