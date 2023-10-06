<template>
  <Header />
  <HomeCarosel />
  <Authenticity />
  <HomePageCategory />
  <HomeHotSells />
  <HighlyRecommended />
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import HomePageCategory from "./HomePageCategory.vue";
import HomeCarosel from "./HomeCarosel.vue";
import HomeHotSells from "./HomeHotSells.vue";
import Authenticity from "./Authenticity.vue";
import HighlyRecommended from "./HighlyRecommended.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    HomePageCategory,
    HomeCarosel,
    HomeHotSells,
    Authenticity,
    HighlyRecommended,
  },
};
</script>

<style></style>
