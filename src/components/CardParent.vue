<template>
    <div>
    <div v-if="!productStore.searchTerm" class="product-list">
        <div v-for="product in productStore.products" :key="product.id" class="product-card" >
            <div class="image-container">
                <img :src="product.image" alt="Product Image" class="product-image">

            </div>
            <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p class="description">{{ product.description }}</p>
                <p class="price">{{ `${productStore.convertToPhp(product.price)}` }}</p>
                <button class="btn" @click="addToCart(product)">Add to Cart</button>
                <button class="btn" @click="viewDescription(product)">View Description</button>
            </div>
        </div>
    </div>
    <div v-else class="product-list">
        <div v-for="product in productStore.filteredProducts" :key="product.name" class="product-card">
            <div class="image-container">
                <img :src="product.image" alt="Product Image" class="product-image">

            </div>
            <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p class="description">{{ product.description }}</p>
                <p class="price">{{ `${productStore.convertToPhp(product.price)}` }}</p>
                <button class="btn" @click="addToCart(product)">Add to Cart</button>
                <button class="btn" @click="viewDescription(product)">View Description </button>
                    <!-- <router-link to="/productDescription">View Description</router-link> -->
            </div>
        </div>
    </div>
    <!-- Modal  -->
    <div v-if="showOrderPlacedModal">
    <div class="modal-backdrop"></div>
    <div class="modal">
      <div class="modal-header">
        <h3>Success!</h3>
        <button @click="closeOrderPlacedModal" class="modal-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 9.29L7.71 17 6 15.29 10.71 10 6 4.71 7.71 3 12 7.29z" />
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Item has been added to cart </p>
        <button @click="router.push({name: 'cart'})" class="modal-button">View Cart</button>
      </div>
    </div>
  </div>
    

    </div>
</template>

<script setup>
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { products } from '@/data/products.json'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'


const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();
productStore.setProducts(ref(products).value);
// const filteredProducts = ref(productStore.filteredProducts).value;


const showOrderPlacedModal = ref(false);

function closeOrderPlacedModal() {
  showOrderPlacedModal.value = false;
}

const viewDescription = (product) => {
    productStore.setSelectedProduct(product)
    // showDescription = true;
    // router.push(`/productDescription/`);
    router.push({name: 'productDescription'});
}

const addToCart = (product) => { 
  showOrderPlacedModal.value = true;
    cartStore.addToCart(product)
} 

</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.product-card {
    border: 1px solid #ccc;
    background-color: #fff; 
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    width: 250px;
    box-shadow: 0px 0px 10px 0px #8383837d;
    transition: box-shadow 0.3s ease;
}

.product-card:hover {
    box-shadow: 0px 0px 25px 0px #005fc5;
}

.image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.product-image {
    width: 100%;
    height: 100%;
    object-fit: scale-down
}

.product-info {
    text-align: center;
}

.product-info h3, 
.product-info p, 
.product-info button {
    margin: 5px auto;
}

.description {
    height: 1.5rem;
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
}

.price {
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
}

p {
    padding: 0px 10px;
}
.btn {
    width: 100%;
    color: white;
    background-color: #007bff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transition: font-weight 0.3 ease-in-out;
}
.btn:hover {
    background: #005fc5;
    font-weight: 700;
}

/* Modal style */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10; /* Adjust as needed */
}

.modal {
    width: 400px;
    height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 11; /* Adjust as needed */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.modal-close-button {
  border: none;
  background: none;
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