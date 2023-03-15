<template>
  <div class="text-white">
    <section class="h-[900px] bg-[url('../public/img/home-header.jfif')]">
      <HeaderComponent current-page="home"></HeaderComponent>
      <h2 class="text-[54px] font-bold max-w-lg ml-24 mt-[187px]">Moving to Portugal?</h2>
      <p class="text-2xl ml-24 max-w-[434px]">Let the experts of the ACK ecosystem handle your administrative headaches</p>
      <button class="rounded bg-blue text-white ml-24 mt-10 py-3.5 px-10 font-medium text-lg hover:bg-blue-700 transition-colors">Help to emigrate</button>
    </section>
    
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: 'HomePage',
  data(){
    return {

    };
  },
components:{HeaderComponent}
}
</script>
