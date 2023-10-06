<!-- 
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div
      class="container-fluid ms-4 me-4"
      style="margin-top: 0px; margin-bottom: 0px"
    >
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" class="img-fluid logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/Home" class="nav-link">Home</router-link>
          </li>
         
          <li class="nav-item">
            <router-link to="/SearchProduct" class="nav-link">
              Search for Product
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AllProducts" class="nav-link"
              >All Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/SingleProduct" class="nav-link"
              >Single Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/ProductCategories" class="nav-link"
              >Product Categories</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/AddProduct" class="nav-link"
              >Add New Product</router-link
            >
          </li>
        </ul>
      </div>

      <router-link
        to="/SearchProduct"
        style="background-color: #5e17eb !important"
        class="btn btn-primary btn-random ml-3"
        >Search Product</router-link
      >

    
      <router-link to="/" class="btn btn-primary btn-random ml-3"
        >Login</router-link
      >
    
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  // Your component logic here
};
</script>

<style scoped>

.logo {
  max-width: 200px; /* Adjust the logo's max-width as needed */
}
</style>
 -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div
      class="container-fluid ms-4 me-4"
      style="margin-top: 0px; margin-bottom: 0px"
    >
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" class="img-fluid logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/TheLogin" class="nav-link">The Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Home" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/SearchProduct" class="nav-link">
              Search for Product
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AllProducts" class="nav-link"
              >All Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/SingleProduct" class="nav-link"
              >Single Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/ProductCategories" class="nav-link"
              >Product Categories</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/AddProduct" class="nav-link"
              >Add New Product</router-link
            >
          </li>
        </ul>
      </div>

      <router-link
        to="/SearchProduct"
        style="background-color: #5e17eb !important"
        class="btn btn-primary btn-random ml-3 me-2"
        >Search Product</router-link
      >

      <!-- Add a Login button -->
      <router-link to="/" class="btn btn-primary btn-random ml-3"
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  // Your component logic here
};
</script>

<style scoped>
/* Add custom CSS styles as needed */
.logo {
  max-width: 300px; /* Adjust the logo's max-width as needed */
  width: 230px; /* Adjust the logo's max-width as needed */
}

/* Apply hover effect to nav-link */
.nav-link:hover {
  color: #5e17eb; /* Change the color on hover */
  /* You can add other styles for hover effect here if needed */
}
</style>
