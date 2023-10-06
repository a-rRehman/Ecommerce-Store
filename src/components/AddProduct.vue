<template>
  <div class="container mt-5">
    <h2>Add a New Product</h2>
    <form @submit.prevent="addNewProduct">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="product.title"
          required
        />
      </div>

      <div class="form-group">
        <label for="price">Price:</label>
        <input
          type="number"
          id="price"
          class="form-control"
          v-model="product.price"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          class="form-control"
          v-model="product.description"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        price: 0,
        description: "",
      },
    };
  },
  methods: {
    addNewProduct() {
      // Simulating a POST request to add a new product
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.product),
      })
        .then((response) => response.json())
        .then((newProduct) => {
          // Handle the response (newly created product with ID)
          console.log("New Product:", newProduct);

          // Clearing the form
          this.product = {
            title: "",
            price: "",
            description: "",
          };
        })
        .catch((error) => {
          // Handle errors
          console.error("Error adding new product:", error);
        });
    },
  },
};
</script>

<style scoped></style>
