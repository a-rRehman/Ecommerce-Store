<template>
  <div class="container mt-5">
    <div class="row">
      <h1>Shop By Category</h1>
      <div class="col-md-3" v-for="category in categories" :key="category">
        <div
          class="card mt-2 mb-2 category-card"
          @click="navigateToSpecificCategoryProducts(category)"
        >
          <div class="card-body">
            <h5 class="card-title">{{ category }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    navigateToSpecificCategoryProducts(category) {
      // Navigate to the SingleProduct component with the specific product ID
      this.$router.push({
        name: "SpecificCategory",
        params: { category: category },
      });
    },
  },
  mounted() {
    // Fetch categories from the API
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        this.categories = data;
      });
  },
};
</script>

<style scoped>
.category-card {
  transition: transform 0.2s, background-color 0.2s;
}

.category-card:hover {
  transform: scale(1.05); /* Zoom effect on hover */
  background-color: #f0f0f0; /* Change background color on hover */
  cursor: pointer;
}
</style>
