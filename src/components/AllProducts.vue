<template>
  <Header />
  <div class="container-fluid">
    <div class="row ms-3 me-3">
      <h2>Product List</h2>
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 mb-4"
        @click="navigateToProductDetail(product.id)"
      >
        <div class="card">
          <img
            :src="product.thumbnail"
            class="card-img-top"
            alt="Product Image"
            style="width: 100%; height: 300px"
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
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination controls -->
    <div class="ms-3 me-3 d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" @click="prevPage" href="#">Previous</a>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: page === currentPage }"
          >
            <a class="page-link" @click="goToPage(page)" href="#">{{ page }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }"
          >
            <a class="page-link" @click="nextPage" href="#">Next</a>
          </li>
        </ul>
      </nav>
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
      products: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  components: {
    Header,
    Footer,
  },

  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const limit = 10;
      const skip = (this.currentPage - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      this.products = data.products;

      // Calculate the total number of pages based on the total products count
      this.totalPages = Math.ceil(data.total / limit);
    },
    truncateDescription(description, maxLength) {
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + "...";
      }
    },
    navigateToProductDetail(productId) {
      // Navigate to the SingleProduct component with the specific product ID
      this.$router.push({ name: "SingleProduct", params: { id: productId } });
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this.fetchProducts();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchProducts();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchProducts();
      }
    },
  },
};
</script>
