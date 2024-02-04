<template>
  <div id="app">
    <AppHeader />
    <ProductForm />
  </div>
</template>

<script>
//import ProductList from '@/components/ProductList.vue'; // Update the path if necessary
import ProductForm from '@/components/ProductForm.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
     AppHeader,
    ProductForm,
    
  },
};
</script>


