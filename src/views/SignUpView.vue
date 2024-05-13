<!-- Register.vue -->
<template>
  <div class="signup-container">
    <h2>Create Your Music Store Account</h2>
    <form @submit.prevent="register" class="signup-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input class="input" type="email" id="email" >
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input class="input" type="password" id="password" >
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input class="input" type="password" id="confirmPassword" >
      </div>
      <button @click="router.push({ name: 'home'})" type="submit" class="signup-button">Register</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const registerData = {
        email: 'random@gmail.com',
        password: '1234',
        confirmPassword: '1234'
};


//   data() {
//     return {
//       registerData: {
//         email: '',
//         password: '',
//         confirmPassword: ''
//       }
//     };
//   },
//   methods: {
//     register() {
//       // Handle registration logic here, e.g., send data to server, validate inputs, etc.
//       console.log('Register Data:', this.registerData);
//     }
//   }
// };
</script>

<style scoped>
.signup-container {
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

.signup-form {
    width: 100%;
}

.form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.input {
/* display: block; */
  width: 378px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-button:hover {
  background-color: #007bff;
}
</style>
