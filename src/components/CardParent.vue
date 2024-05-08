<template>
    <div v-if="!productStore.searchTerm" class="product-list">
        <div v-for="product in productStore.products" :key="product.id" class="product-card">
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



const viewDescription = (product) => {
    productStore.setSelectedProduct(product)
    // showDescription = true;
    // router.push(`/productDescription/`);
    router.push({name: 'productDescription'});
}

const addToCart = (product) => { 
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
</style>