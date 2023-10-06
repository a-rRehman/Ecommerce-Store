<template>
  <Header />
  <div v-if="product">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.thumbnail" class="img-fluid" alt="Product Image" />
        </div>

        <div class="col-md-6">
          <h1 class="display-4 mb-4">
            {{ isEditMode ? "Edit Product" : product.title }}
          </h1>
          <p class="lead">
            {{
              isEditMode
                ? "Edit the product details below:"
                : product.description
            }}
          </p>
          <p class="h3">
            Price: ${{ isEditMode ? editedProduct.price : product.price }}
          </p>

          <!-- Toggle Edit Mode button -->
          <button class="btn btn-secondary mb-3" @click="toggleEditMode">
            {{ isEditMode ? "Cancel" : "Edit" }}
          </button>

          <!-- Edit Product Form (shown when in edit mode) -->
          <form v-if="isEditMode" @submit="updateProduct">
            <div class="mb-3">
              <label for="editedTitle" class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                id="editedTitle"
                v-model="editedProduct.title"
              />
            </div>
            <div class="mb-3">
              <label for="editedDescription" class="form-label"
                >Description</label
              >
              <textarea
                class="form-control"
                id="editedDescription"
                v-model="editedProduct.description"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="editedPrice" class="form-label">Price</label>
              <input
                type="number"
                class="form-control"
                id="editedPrice"
                v-model="editedProduct.price"
              />
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </form>
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
      product: null,
      isEditMode: false,
      editedProduct: {
        title: "",
        description: "",
        price: 0,
      },
    };
  },
  components: {
    Header,
    Footer,
  },
  async created() {
    const productId = this.$route.params.id; // Get the product ID from the route parameter

    // Fetch the initial product details based on the product ID
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    this.product = data;

    // Initialize the edited product with the current product data
    this.editedProduct = { ...data };
  },
  methods: {
    toggleEditMode() {
      // Toggle edit mode
      this.isEditMode = !this.isEditMode;
    },

    async updateProduct() {
      // Send a PUT or PATCH request to update the product
      const productId = this.$route.params.id;
      const method = "PUT"; // or 'PATCH'
      const updatedProduct = this.editedProduct;

      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        });

        if (res.ok) {
          // Product updated successfully, you can handle the response as needed
          const data = await res.json();
          this.product = data;
          this.isEditMode = false; // Exit edit mode
        } else {
          // Handle error cases here
          console.error("Failed to update product.");
        }
      } catch (error) {
        console.error("An error occurred while updating the product.", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add custom CSS styles here to further enhance the product page */
</style>
