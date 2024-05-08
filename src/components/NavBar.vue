<template>
    <nav class="nav-bar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <div>
                <div class="search-div">
                    <li class="search-li"><input type="search" id="search-box" v-model="productStore.searchTerm" @input="detectInput" placeholder="Search Products"></li>
                    <li class="search-btn-li"><button @click="productStore.filterProducts" id="search-btn">Search</button></li>
                </div>
                <li><router-link to="/">Shop</router-link></li>
                <li><router-link to="/cart">Cart</router-link></li>
                <li><router-link to="/profile">Profile</router-link></li>
            </div>
        </ul>
    </nav>

    <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
// import { ref } from 'vue';

import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore';

const router = useRouter();
const productStore = useProductStore();

// const updateSearchTerm = (event) => {
//   productStore.updateSearchTerm(event.target.value);
// };
const detectInput = () => {
    router.push({name: 'home'});
}


</script>

<style scoped>
.nav-bar {
    /* background-color: #333; */
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 1rem;
    /* box-shadow: 0px 0px 5px 0px #005fc5; */
}

ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
    margin-right: 20px;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    transition: background-color 0.3s ease;
    transition: padding 0.3s ease;
}

#search-box {
    width: 250px;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: none;
    border: 3px solid #007bff;
    transition: border 0.3s ease-in-out;
}

#search-box:hover {
    border: 3px solid #0056b3;
}

.search-div {
    display: inline-block;
}


.search-li {
    margin-right: 0;
}


#search-btn {
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: none;
    border: 3px solid #007bff;
    transition: background-color 0.3s ease-in-out;
}
#search-btn:hover {
    background-color: #00e5ff;
    cursor: pointer;
}

</style>
