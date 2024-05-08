<template>
  <div class="profile-container">
    <div class="profile-header">
      <img class="profile-picture" :src="user.imageUrl" alt="Profile Picture" />
      <div class="profile-details">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p v-if="user.phone">Phone: {{ user.phone }}</p>
      </div>
    </div>
    <div class="profile-sections">
      <div class="profile-section">
        <h3>My Address</h3>
        <ul>
          <li >
            <p>{{ user.address }}</p>
            <!-- <span v-if="address">Default</span> -->
            <!-- <router-link :to="`/profile/address/${address}/edit`">Edit</router-link> -->
          </li>
        </ul>
        <!-- <router-link to="/profile/address/new">Add New Address</router-link> -->
      </div>  
      <div class="profile-section">
        <h3>Order History</h3>
        <ul>
          <li v-for="order in user.orders" :key="order.id">
            <p>Order #{{ order.id }} - {{ order.name }}</p>
            <router-link :to="`/order-details/${order.id}`">View Details</router-link>
          </li>
        </ul>
        <router-link to="/order-history">View All Orders</router-link>
      </div>
      <div class="profile-section">
        <h3>Payment Methods</h3>
        <ul>
          <li v-for="payment in user.paymentMethods" :key="payment">
            <p>{{ payment}}</p>
            <!-- <router-link :to="`/profile/payment-method/${payment}/edit`">Edit</router-link> -->
          </li>
        </ul>
        <!-- <router-link to="/profile/payment-method/new">Add Payment Method</router-link> -->
      </div>
      <div class="profile-section">
        <h3>Wishlist</h3>
        <ul>
          <li v-for="product in user.wishlist" :key="product.id">
            <p>{{ product.name }}</p>
            <router-link :to="`/product/${product.id}`">View Product</router-link>
            <button @click="removeFromWishlist(product.id)">Remove</button>
          </li>
        </ul>
        <router-link to="/wishlist">View All Wishlist Items</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const user = {
    name: "Jose P. Rizal",
    email: "random@gmail.com",
    address: 'La Trinidad, Benguet',
    phone: '09020210102',
    paymentMethods: [
        'COD','GCash', 'Maya'
    ],
    orders: [],
    imageUrl: "src/views/image.png"
}
</script>

<style scoped>
.profile-container {
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
  border: 1px solid #ddd;
  border-radius: 4px;
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

.profile-section button {
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
}

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
</style>
