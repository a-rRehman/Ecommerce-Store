<template>
  <Header />
  <div v-if="categoryProducts">
    <div class="container mt-5">
      <h2>{{ selectedCategory }}</h2>
      <div class="row">
        <div
          class="col-md-4 mb-3"
          v-for="product in categoryProducts"
          :key="product.id"
        >
          <div class="card" @click="navigateToProductDetail(product.id)">
            <img
              :src="product.thumbnail"
              class="card-img-top"
              alt="Product Image"
              style="height: 300px; width: 100%"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ truncateDescription(product.description, 30) }}
              </p>
              <p class="card-text">Price: ${{ product.price }}</p>
              <button
                @click="navigateToProductDetail(product.id)"
                class="btn btn-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  data() {
    return {
      selectedCategory: "",
      categoryProducts: null,
    };
  },
  components: {
    Header,
    Footer,
  },
  async created() {
    const categoryName = this.$route.params.category;
    this.selectedCategory = categoryName;
    // Fetch the initial product details based on the product ID
    const res = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`
    );
    const data = await res.json();
    this.categoryProducts = data.products;
    console.log(data);
  },
  methods: {
    navigateToProductDetail(productId) {
      // Navigate to the SingleProduct component with the specific product ID
      this.$router.push({ name: "SingleProduct", params: { id: productId } });
    },
    truncateDescription(description, maxLength) {
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + "...";
      }
    },
  },
};
</script>

<style scoped>
/* Add custom CSS styles as needed */
</style>
