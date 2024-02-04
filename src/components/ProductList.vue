<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product._id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
       const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/products`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>
