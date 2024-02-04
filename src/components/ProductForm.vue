<template>
  <div>
    <h2>Add/Edit Product</h2>
    <form @submit.prevent="submitProduct">
      <input v-model="newProduct.name" placeholder="Product Name" />
      <input v-model.number="newProduct.price" placeholder="Price" />
      <button type="submit">{{ editingProduct ? 'Update Product' : 'Add Product' }}</button>
      <button v-if="editingProduct" @click="cancelEdit">Cancel</button>
    </form>

    <h2>Product List</h2>
    <ul>
      <li v-for="(product, index) in products" :key="product._id">
        {{ product.name }} - {{ product.price }}
        <button @click="editProduct(product)">Edit</button>
        <button @click="deleteProduct(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newProduct: { name: '', price: 0 },
      products: [],
      editingProduct: null
    };
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
    async submitProduct() {
      try {
        if (this.editingProduct) {
          await this.updateProduct(this.editingProduct);
        } else {
          await this.addProduct();
        }
      } catch (error) {
        console.error('Error adding/editing product:', error);
      }
    },
    async addProduct() {
      try {
        const response = await this.$axios.post(`${process.env.VUE_APP_API_URL}/api/products`, this.newProduct);
        this.products.push(response.data);
        this.clearForm();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async updateProduct(product) {
      try {
        const response = await this.$axios.put(`${process.env.VUE_APP_API_URL}/api/products/${product._id}`, product);
        const updatedProductIndex = this.products.findIndex(p => p._id === response.data._id);
        this.products[updatedProductIndex] = response.data;
        this.clearForm();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async deleteProduct(index) {
      const product = this.products[index];
      try {
        await this.$axios.delete(`${process.env.VUE_APP_API_URL}/api/products/${product._id}`);
        this.products.splice(index, 1);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    editProduct(product) {
      this.editingProduct = { ...product };
    },
    cancelEdit() {
      this.editingProduct = null;
      this.clearForm();
    },
    clearForm() {
      this.newProduct = { name: '', price: 0 };
    }
  },
  mounted() {
    this.fetchProducts(); // Fetch products when the component is mounted
  }
};
</script>
