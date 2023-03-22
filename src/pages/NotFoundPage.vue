<template>
  <div class="min-h-screen bg-cover bg-no-repeat bg-center bg-blend-multiply bg-gray-300 bg-[url('../public/img/404.png')]">
    <HeaderComponent
      current-page="404"
      transparent
      text-white
      @onButtonClick="scrollToContacts"
    ></HeaderComponent>
  
    <h1 class="text-white font-medium text-[3.375rem] leading-[4.5rem] mt-10 sm:mt-20 md:mt-[214px] w-max mx-auto relative">
      <FeatureLeftSvg class="absolute -translate-x-[91%] w-[51px] h-[51px] text-blue -top-[25px]"></FeatureLeftSvg>
      Oops!
    </h1>
    <p class="mt-2 text-white leading-[1.625rem] text-center text-lg w-auto mx-auto">
      It looks like something went wrong <br>
Reload the page or return to the home screen
    </p>
    <div class="flex justify-center mt-[30px]">
      <router-link :to="$publicPath" class="text-white rounded leading-[1.813rem] text-lg py-[14px] px-10 text-center w-max bg-blue hover:bg-blue-700 transition-colors">
      Go to main page
    </router-link>
    </div>
    
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FeatureLeftSvg from "../components/svg/FeatureLeftSvg.vue";

export default {
  name: "NotFoundPage",
  methods: {
    scrollToContacts() {
      this.$router.push({ path: this.$publicPath, query: { contacts: true } });
    },
  },
  components: { HeaderComponent, FeatureLeftSvg },
};
</script>
