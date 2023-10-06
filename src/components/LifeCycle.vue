<!-- <template>
  <h1>Life Cycle {{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",

  data() {
    console.log("created");
    return {
      name: "arj",
    };
  },
  beforeCreate() {
    this.name = "musa";
    alert("Before Created");
  },
  created() {
    alert("After Created");
  },
};
</script>

<style></style> -->
<!-- 
<template>
  <div>
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello, Vue!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate hook: Component is about to be created.");
  },
  created() {
    console.log("created hook: Component has been created.");
  },
};
</script> -->
<!-- 
<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate: Component is about to be created.");
  },
  created() {
    console.log("created: Component has been created.");
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        console.log(response.data);
        this.posts = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script> -->
<!-- 
<template>
  <p>hello world</p>
</template>

<script>
export default {
  data() {},
  beforeMount() {
    console.log("beforeMount: Component is about to be mounted.", this.$el);
  },
  mounted() {
    console.log("mounted: Component has been mounted.", this.$el);
  },
};
</script> -->

<!-- <template>
  <h1 ref="letCount">Counter : {{ counter }}</h1>
  <button @click="CounterFunction">Add Count</button>
</template>

<script>
export default {
  name: "LifeCycle",
  beforeUpdate() {
    console.log("Before Updated", this.$refs["letCount"].textContent);
  },
  updated() {
    console.log("After Updated", this.$refs["letCount"].textContent);
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    CounterFunction() {
      this.counter++;
    },
  },
};
</script>

<style></style> -->

<!-- <template>
  <div>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate: Component is about to re-render.");
  },
  updated() {
    console.log("updated: Component has been re-rendered.");
  },
  mounted() {
    console.log("mounted: Component has been mounted.");

    // Increment the counter every second
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script> -->
<!-- 
<template>
  <div>
    <p>Click the document to see the counter increase:</p>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    console.log("mounted: Component has been mounted.");

    // Add a global click event listener
    this.clickHandler = () => {
      this.counter++;
    };
    document.addEventListener("click", this.clickHandler);
  },
  beforeUnmount() {
    console.log("beforeUnmount: Component is about to be unmounted.");

    // Remove the global click event listener before unmounting
    document.removeEventListener("click", this.clickHandler);
  },
  unmounted() {
    console.log("unmounted: Component has been unmounted.");
  },
};
</script> -->

<template>
  <button @click="toogleFunction" class="btn btn-primary">Click here</button>
  <div>
    <img
      v-if="toggle"
      src="https://images.pexels.com/photos/18056655/pexels-photo-18056655/free-photo-of-a-humpback-whale-emerging-from-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      srcset=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      toggle: true,
    };
  },
  methods: {
    toogleFunction() {
      this.toggle = !this.toggle;
      return this.toggle;
    },
  },
};
</script>
