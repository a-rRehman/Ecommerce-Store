<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username">UserName </label>
            <input
              v-model="username"
              class="form-control"
              type="text"
              id="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              class="form-control"
              type="password"
              id="password"
            />
          </div>
          <button class="btn btn-primary mt-3" type="submit">Submit</button>
        </form>
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
      user: null,
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token) {
        try {
          const response = await axios.get(
            `https://dummyjson.com/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          this.user = response.data;
          console.log("fetchUser Response", response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    },

    async handleSubmit() {
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
        console.log("handleSubmit", response);
        // Handle a successful login response
        const token = response.data.token;
        const userId = response.data.id;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
      } catch (error) {
        this.error = "Invalid username or password";
        console.log("Authentication error:", error);
      }
    },
  },
};
</script>

<style></style>
