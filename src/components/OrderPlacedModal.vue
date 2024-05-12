<template>
  <div v-if="showOrderPlacedModal">
    <div class="modal-backdrop"></div>
    <div class="modal">
      <div class="modal-header">
        <h3>Order Placed!</h3>
        <button @click="closeOrderPlacedModal" class="modal-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 9.29L7.71 17 6 15.29 10.71 10 6 4.71 7.71 3 12 7.29z" />
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Your order (number {{ orderNumber }}) has been successfully placed. We'll keep you updated on its status.</p>
        <button @click="goToOrders" class="modal-button">View Orders</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showOrderPlacedModal = ref(false);
const orderNumber = ref(null); // Assume you have a way to get the order number

function closeOrderPlacedModal() {
  showOrderPlacedModal.value = false;
}

function goToOrders() {
  // Implement logic to navigate to the orders page
  // (e.g., using a router or redirecting)
  console.log('Going to orders page...');
}

</script>

<style scoped>
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
