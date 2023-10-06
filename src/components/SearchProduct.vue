<template>
  <Header />
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <h2 class="mb-4">Search Products</h2>
        <form @submit.prevent="searchProducts">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control mb-3"
              style="border-radius: 5px !important"
              id="searchQuery"
              v-model="searchQuery"
              placeholder="Enter your search query..."
              required
            />
            <button
              style="border-radius: 5px !important"
              type="submit"
              class="btn btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="row" v-if="searchResults.length > 0">
      <div class="col-lg-6 offset-lg-3 mt-4">
        <div
          class="card mb-0"
          v-for="product in searchResults"
          :key="product.id"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="product.thumbnail"
                alt="Product Image"
                class="img-fluid"
                style="min-height: 180px"
              />
            </div>
            <div class="col-md-8">
              <div
                class="card-body"
                @click="navigateToProductDetail(product.id)"
              >
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
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
  </div>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    searchProducts() {
      // Perform the product search based on the user's input
      fetch(`https://dummyjson.com/products/search?q=${this.searchQuery}`)
        .then((response) => response.json())
        .then((results) => {
          // Handle the search results
          this.searchResults = results.products;
        })
        .catch((error) => {
          // Handle errors
          console.error("Error searching products:", error);
        });
    },
    navigateToProductDetail(productId) {
      // Navigate to the SingleProduct component with the specific product ID
      this.$router.push({ name: "SingleProduct", params: { id: productId } });
    },
  },
};
</script>

<style></style>
