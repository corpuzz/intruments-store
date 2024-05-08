import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        selectedProduct: null,
        filteredProducts: [],
        selectedProductImage: '',
        searchTerm: '',
    }),
    actions: {
        setSelectedProduct(product) {
            this.selectedProduct = product;
            // this.selectedProductImage = product.image;
        },
        formatToPeso(price) {
            let formatter = new Intl.NumberFormat('en-PH', {
                style: 'currency',
                currency: 'PHP',
            });
            return formatter.format(price);
        },
        setProducts(products) {
            this.products = products;
            this.filteredProducts = products; // Initially set filtered to all products
        },
        filterProducts() {
            this.filteredProducts = this.products.filter((product) => product.category.includes(this.searchTerm.toLocaleLowerCase()) || product.name.toLowerCase().includes(this.searchTerm));
            this.$state.products = [...this.products];
        },
        convertToPhp(price) {
        const formatter = new Intl.NumberFormat('fil-PH', {
            style: 'currency',
            currency: 'PHP',
        });
            return formatter.format(price);
        },

    },
});