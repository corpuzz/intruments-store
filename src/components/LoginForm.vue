<template>
    <div class="login-container">
        <h2>Login to Your Music Store Account</h2>
        <form @submit.prevent="login" class="login-form">
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="input" type="email" id="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input class="input" type="password" id="password">
            </div>
            <button @click="router.push({ name: 'profile-details' })" type="submit" class="login-button">Login</button>
            <!-- <p style="width: 100%; text-align: center;">or</p> -->
            <br/>
            <p style="text-align: center">New user? <router-link class="register" to="/signup">Sign up</router-link> to create an account</p>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const loginData = {
    email: '',
    password: ''
};

// const router = useRouter();
// export default {
//   data() {
//     return {
//     };
//   },
//   methods: {
//     login() {
//       // Handle login logic here, e.g., send data to server, validate credentials, etc.
//       console.log('Login Data:', this.loginData);
//     }
//   }
// };
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 100px auto 0 auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 20px;
}

label {
    /* margin: 20px auto; */
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 378px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #0056b3;
}

</style>