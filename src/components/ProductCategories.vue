<!-- <template>
  <h1>hi</h1>
</template>

<script>
export default {
  name: "ProductCategories",

  data() {
    return {
      productCategory: [],
    };
  },

  async mounted() {
    const res = await fetch("https://dummyjson.com/products/categories");

    const data = await res.json();
    console.log(data);
    this.productCategory = data.products;
  },
};
</script> -->
<!-- 
<template>
  <div>
    <h2>Select a Category</h2>
    <select v-model="selectedCategory">
      <option v-for="category in categories" :key="category">
        {{ category }}
      </option>
    </select>
    <button @click="fetchCategoryProducts">Fetch Products</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      selectedCategory: "",
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios
        .get("https://dummyjson.com/products/categories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    fetchCategoryProducts() {
      // You can now use this.selectedCategory to fetch products of the selected category
      if (this.selectedCategory) {
        this.$router.push(`/category/${this.selectedCategory}`);
      } else {
        console.error("Please select a category.");
      }
    },
  },
};
</script>

<style>
/* Add CSS styles as needed */
</style> -->

<template>
  <div>
    <h2>Select a Category</h2>
    <select v-model="selectedCategory">
      <option v-for="category in categories" :key="category">
        {{ category }}
      </option>
    </select>
    <button @click="fetchCategoryProducts">Fetch Products</button>

    <div v-if="selectedCategory">
      <h3>Products in {{ selectedCategory }}</h3>
      <ul>
        <li v-for="product in categoryProducts" :key="product.id">
          <img :src="product.thumbnail" :alt="product.name" />
          {{ product.title }} - {{ product.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      selectedCategory: "",
      categoryProducts: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios
        .get("https://dummyjson.com/products/categories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    fetchCategoryProducts() {
      if (this.selectedCategory) {
        axios
          .get(
            `https://dummyjson.com/products/category/${this.selectedCategory}`
          )
          .then((response) => {
            this.categoryProducts = response.data.products;
          })
          .catch((error) => {
            console.error(
              `Error fetching products for ${this.selectedCategory}:`,
              error
            );
          });
      } else {
        console.error("Please select a category.");
      }
    },
  },
};
</script>

<style>
/* Add CSS styles as needed */
</style>
