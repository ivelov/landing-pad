<template>
  <div class="sticky top-0 z-30 transition-colors"
  :class="transparent?'':'bg-white shadow-14x28'">
    <header
      v-if="width > 1000"
      class="flex justify-around items-center py-3.5"
      :class="transparent?'text-white':'text-dark'"
    >
      <LogoSvg class="flex-auto basis-[28.57%] h-[46px]"
      :class="transparent?'text-white':'text-blue'"></LogoSvg>

      <nav class="flex justify-around flex-auto basis-[42.86%] text-xl">
        <router-link
          to="/home"
          :class="currentPage === 'home' ? 'font-bold' : ''"
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
        <router-link
          to="/home"
          :class="currentPage === 'team' ? 'font-bold' : ''"
          >Team</router-link
        >
        <router-link
          to="/home"
          :class="currentPage === 'contact' ? 'font-bold' : ''"
          >Contact</router-link
        >
        <router-link
          to="/home"
          :class="currentPage === 'blog' ? 'font-bold' : ''"
          >Blog</router-link
        >
      </nav>
      <div class="flex-auto basis-[28.57%] flex justify-center">
        <button
          class="rounded bg-blue text-white py-3.5 px-[42px] font-medium hover:bg-blue-700 transition-colors"
        >
          Book an online
        </button>
      </div>
    </header>

    <header v-else class="flex justify-between items-center mx-[7%] py-3.5 text-white">
      <LogoSvg class="h-[46px]" :class="transparent?'text-white':'text-blue'"></LogoSvg>

      <div class="relative">
        <button @click="expand">
          <BurgerSvg class="w-10 h-10"></BurgerSvg>
        </button>

        <div
          v-if="dropdown"
          class="absolute z-20 bg-white p-2 rounded-lg shadow-4x10 w-32 right-0"
        >
          <nav class="text-xl text-black">
            <div>
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'home' ? 'font-bold' : ''"
                  >Home</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'services' ? 'font-bold' : ''"
                  >Services</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'about us' ? 'font-bold' : ''"
                  >About us</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'team' ? 'font-bold' : ''"
                  >Team</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'contact' ? 'font-bold' : ''"
                  >Contact</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  :class="currentPage === 'blog' ? 'font-bold' : ''"
                  >Blog</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>

            <div class="mt-2">
              <router-link
                to="#"
                class="flex justify-between items-center gap-3"
              >
                <span
                  class="w-24"
                  >Book an online</span
                >
                <RightArrow class="w-[7px] h-3 inline"></RightArrow>
              </router-link>
            </div>
          </nav>
        </div>
      </div>

    </header>
  </div>
</template>

<script>
import LogoSvg from "./svg/LogoSvg.vue";
import BurgerSvg from "./svg/BurgerSvg.vue";
import RightArrow from "./svg/RightArrow.vue";
export default {
  name: "HeaderComponent",
  data() {
    return {
      width: window.innerWidth,
      dropdown: false,
      firstClick: true,
    };
  },
  props: {
    currentPage: {
      type: String,
    },
    transparent:{
      type: Boolean,
      default: false
    }
  },
  mounted() {
    window.addEventListener("resize", this.onWidthChange);
    this.onWidthChange();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWidthChange);
  },
  methods: {
    onWidthChange() {
      this.width = window.innerWidth;
    },
    expand() {
      this.dropdown = true;
      this.firstClick = true;
      this.$nextTick(() => {
        document.addEventListener("click", this.hide);
      });
    },
    hide() {
      if (this.firstClick) {
        this.firstClick = false;
        return;
      }
      this.dropdown = false;
      document.removeEventListener("click", this.hide);
    },
  },
  components: { LogoSvg, BurgerSvg, RightArrow },
};
</script>
