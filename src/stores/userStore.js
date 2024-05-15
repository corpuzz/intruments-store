
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userInfo : {
            name: '',
            imageUrl: 'src/views/image.png',
            address: '',
            email: '',
            phone: '',
            password: '',
            // orders: [],
        }
    }),
    actions: {
        setName(name) {
            this.userInfo.name = name;
        },
        setAddress(address) {
            this.userInfo.address = address;
        },
        setEmail(email) {
            this.userInfo.email = email;
        },
        setPhone(phone) {
            this.userInfo.phone = phone;
        },
        initializeName() {
            this.userInfo.name = this.email.split("@")[0];
        }
    },
});