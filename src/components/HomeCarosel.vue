<template>
  <div>
    <div class="container-fluid" style="padding: 0px !important">
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(product, index) in products"
            :key="product.id"
            :class="{ active: index === 0 }"
          >
            <img
              :src="product.thumbnail"
              class="d-block w-100"
              alt="Product Image"
              style="height: 100vh"
              @click="navigateToProductDetail(product.id)"
            />
            <div
              class="carousel-caption d-flex align-items-center justify-content-center"
            >
              <div class="text-center text-white">
                <h2
                  class="display-4"
                  style="
                    color: white;
                    font-size: 62px;
                    font-weight: 700 !important;
                  "
                >
                  {{ product.title }}
                </h2>
                <p class="lead">Price: ${{ product.price }}</p>
                <button
                  class="btn btn-primary btn-lg"
                  @click="navigateToProductDetail(product.id)"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev pri"
          href="#productCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon pri-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next pri"
          href="#productCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon pri-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    navigateToProductDetail(productId) {
      // Navigate to the SingleProduct component with the specific product ID
      this.$router.push({ name: "SingleProduct", params: { id: productId } });
    },
  },
  async created() {
    try {
      // Fetch the initial product details based on the category
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      this.products = data.products;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<style scoped>
/* Add custom CSS styles as needed */
.carousel-caption {
  background: rgba(
    0,
    0,
    0,
    0.7
  ); /* Background color and opacity for the caption */
  padding: 20px; /* Add padding to the caption */
  color: white; /* Text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for better readability */
}

.carousel-caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent overlay */
  z-index: 1; /* Place the overlay above the image */
}

.carousel-caption h2 {
  font-size: 2.5rem; /* Big font size for the title */
}

.carousel-caption p {
  font-size: 1.5rem; /* Big font size for the description */
}

.carousel-caption button {
  font-size: 1.5rem; /* Big font size for the button */
}
</style>
