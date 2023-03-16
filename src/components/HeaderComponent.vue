<template>
  <header class="flex justify-around items-center pt-3.5 text-white">
    <LogoSvg
      class="flex-auto basis-[28.57%] h-[46px]"
    ></LogoSvg>

    <nav class="flex justify-around flex-auto basis-[42.86%] text-xl">
      <router-link to="/home" :class="currentPage === 'home' ? 'font-bold' : ''"
        >Home</router-link
      >
      <router-link
        to="/home"
        :class="currentPage === 'services' ? 'font-bold' : ''"
        >Services</router-link
      >
      <router-link
        to="/home"
        :class="currentPage === 'about us' ? 'font-bold' : ''"
        >About us</router-link
      >
      <router-link to="/home" :class="currentPage === 'team' ? 'font-bold' : ''"
        >Team</router-link
      >
      <router-link
        to="/home"
        :class="currentPage === 'contact' ? 'font-bold' : ''"
        >Contact</router-link
      >
      <router-link to="/home" :class="currentPage === 'blog' ? 'font-bold' : ''"
        >Blog</router-link
      >
    </nav>
    <div class="flex-auto basis-[28.57%] flex justify-center">
      <button class="rounded bg-blue text-white py-3.5 px-[42px] font-medium hover:bg-blue-700 transition-colors">
        Book an online
      </button>
    </div>
  </header>
</template>

<script>
import LogoSvg from "./svg/LogoSvg.vue";
export default {
  name: "HeaderComponent",
  props: {
    currentPage: {
      type: String,
    },
  },
  components: { LogoSvg },
};
</script>
