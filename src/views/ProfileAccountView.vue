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
                <hr style="width: 100%" />
                <div>
                    <label class="block" for="shipping-address">Shipping Address: </label>
                    <div v-if="!isEditing">
                        <div class="flex">
                            <p>{{ user.address }}</p>
                            <button @click="setIsEditing(true)" class="edit-button">Edit</button>
                        </div>
                    </div>
                    <span v-else>
                        <div class="flex">
                            <input class="input" type="text" id="shipping-address" v-model="user.address" @blur="setIsEditing(false)">
                            <button @click="setIsEditing(false)" class="save-button">Save</button>
                        </div>
                    </span>
                </div>
            </div>
            <div class="profile-section">
                <h3>My Orders</h3>
                <hr style="width: 100%; margin-bottom: 1rem;" />
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
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';
import { useUserStore } from '@/stores/userStore'

const router = useRouter();
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.orders)
const productStore = useProductStore();
const useStore = useUserStore();

const user = ref(useStore.userInfo);

const isEditing = ref(false);

function setIsEditing(value) {
  isEditing.value = value;
}
const viewDescription = (product) => {
    productStore.setSelectedProduct(product)
    // showDescription = true;
    // router.push(`/productDescription/`);
    router.push({ name: 'productDescription' });
}
</script>

<style scoped>
.profile-container {
    margin: 1rem 2rem auto 2rem;
    /* width: 70vw; */
    height: 100vh;
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
    box-shadow: 0px 0px 6px 0px rgba(99, 99, 99, 0.57);
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
    box-shadow: 0px 0px 6px 0px rgba(99, 99, 99, 0.57);
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

/* Edit styling */
#product-name {
    /* width: 100%; */
}
.block {
    display: block;
}
.edit-button, .save-button {
    /* display: block; */
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 5px;
}

.save-button {
  background-color: #007bff; /* Green for save action */
  color: white;
}

.flex {
    /* width: 100%; */
    display: flex;
    justify-items: space-between;
    margin: 5px auto;
}

.flex p {
    margin: 0 auto;
    width: 100%;
    padding: 8px 0px;
}

.input {
    padding: 8px;
    width: 100%;
}
</style>
