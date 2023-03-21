<template>
  <div>
    <HeaderComponent current-page="blogs" :with-shadow="scroll > 50"></HeaderComponent>
    <div class="overflow-hidden relative">
      <section class="relative z-10 px-[6.7%] mt-6">
        <router-link to="/blogs" class="text-dark hover:text-gray-600 flex items-center leading-6 text-lg font-light">
          <LeftArrow class="inline w-6 h-6 mr-1"></LeftArrow>
          Back to all articles
        </router-link>
        
        
        <h1 class="text-dark text-5xl mt-11 leading-[3.32.rem]">
          {{ blog.title }}
        </h1>
        <p class="mt-5 leading-5 text-gray-400">
          <small>{{ blog.date }}</small>
        </p>

       <img :src="blog.image" alt="Title image" class="w-full mt-5">
       <p class="mt-6 text-gray-600 text-xl leading-7" v-html="blog.content">

       </p>

       
      </section>
      <div
          class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[238px] h-[238px] z-0 -left-[91px] top-[50%]"
        ></div>
      <FooterComponent class="mt-[92px]"></FooterComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import LeftArrow from "../components/svg/LeftArrow.vue";
import BlogsMixin from "../components/mixins/BlogsMixin.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "BlogsPage",
  data() {
    return {
      scroll: window.scrollY,
      blog: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);

    if(!this.$route.params.id || !this.blogs[this.$route.params.id - 1]){
      this.$router.push('/blogs');
      return;
    }

    this.blog = this.blogs[this.$route.params.id - 1];
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(){
      this.scroll = window.scrollY;
    },
  },
  components: { HeaderComponent, FooterComponent, LeftArrow },
  mixins: [BlogsMixin],
};
</script>
