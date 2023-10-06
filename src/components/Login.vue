<template>
  <div class="container" style="margin-top: 7%">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2)">
          <div class="card-body">
            <div class="row ms-2 me-5 mb-md-5">
              <div class="col-md-6 d-flex align-items-md-center">
                <img
                  src="../assets/loginLogo.png"
                  alt="Logo"
                  class="img-fluid mb-md-4 mt-md-3"
                />
              </div>
              <div class="col-md-6 mt-5">
                <h2>Login</h2>
                <form @submit.prevent="loginUser">
                  <div class="mt-3 mb-3">
                    <div class="form-group mb-3">
                      <label class="mb-2" for="username">Username/Email:</label>
                      <input
                        type="text"
                        id="username"
                        v-model="username"
                        class="form-control"
                        placeholder="Username/Email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label class="mb-2" for="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                <p v-if="error" class="text-danger text-center mt-3">
                  {{ error }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          {
            username: this.username,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Handle a successful login response
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Redirect to home page
        this.$router.push("/Home");
      } catch (error) {
        this.error = "Invalid username or password";
        console.error("Authentication error:", error);
      }
    },
  },
};
</script>
