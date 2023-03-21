<template>
  <div>
    <HeaderComponent
      current-page="blogs"
      :transparent="scroll < 50"
      :with-shadow="scroll > 50"
      @onButtonClick="scrollToContacts"
    ></HeaderComponent>
    <div class="overflow-hidden mt-[-80px] pt-20">
      <div
        class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[380px] h-[380px] z-0 -right-[82px] -top-[51px]"
      ></div>

      <section class="relative z-10 px-[6.7%] mt-[63px]">
        <h1 class="text-black text-[2rem]">
          Blog
          <FeatureSvg
            class="inline absolute -top-[6px] -translate-x-[3px] text-blue gap-x-10 w-6 h-6"
          ></FeatureSvg>
        </h1>

        <ul class="mt-2">
          <li v-for="blog in blogs" :key="blog.id">
            <article class="p-4 mt-6 rounded-2xl bg-white shadow-3x28">
              <img :src="blog.image" alt="Title image" class="w-full mb-4" />
              <router-link
                :to="`/blogs/${blog.id}`"
                class="font-medium text-xl text-dark leading-[1.66rem] hover:text-blue-text transition-colors"
              >
                {{ blog.title }}
              </router-link>
              <p class="mt-2 leading-5 text-gray-text">
                <small>{{ blog.date }}</small>
              </p>
              <p class="mt-4 text-gray-600">
                {{
                  blog.content.length > 340
                    ? blog.content.slice(0, 340) + "..."
                    : blog.content
                }}
              </p>
            </article>
          </li>
        </ul>
      </section>

      <FooterComponent ref="contacts" class="mt-[92px]"></FooterComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FeatureSvg from "../components/svg/FeatureSvg.vue";
import BlogsMixin from "../components/mixins/BlogsMixin.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "BlogsPage",
  data() {
    return {
      scroll: window.scrollY,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scroll = window.scrollY;
    },
    scrollToContacts(){
      this.$refs.contacts.$el.scrollIntoView({ behavior: 'smooth' });
    }
  },
  components: { HeaderComponent, FeatureSvg, FooterComponent },
  mixins: [BlogsMixin],
};
</script>
