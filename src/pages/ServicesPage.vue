<template>
  <div class="overflow-hidden">
    <HeaderComponent current-page="services"></HeaderComponent>
    
    <section class="relative z-10">
      <h1 class="text-black text-[2rem] mt-[87px] ml-[7%]">
        {{ curService.name }}
        <FeatureSvg
          class="inline absolute -top-[27px] -translate-x-[3px] text-blue gap-x-10"
        ></FeatureSvg>
      </h1>

      <div class="flex flex-col-reverse sm:flex-row justify-center mx-[7%] gap-10 mt-[43px]">
        <div class="w-full sm:w-[80%] mt-7">
          <article
            v-for="(category, index) in curService.categories"
            :key="index"
            class="py-7 pl-8 pr-7 mt-4 first:mt-0 shadow-14x28 text-dark"
          >
            <h3
              @click="toggleCategory(category)"
              class="cursor-pointer font-medium text-[1.25rem] hover:text-blue-text leading-[1.813rem] flex justify-between"
            >
              <span>{{ category.name }}</span>
              <UpArrow v-if="category.expanded"></UpArrow>
              <DownArrow v-else></DownArrow>
            </h3>

            <div v-if="category.expanded">
              <BreakLineSvg
                class="mt-[14px] w-full text-gray-bg"
              ></BreakLineSvg>
              <p class="mt-4 leading-[1.625rem]">
                {{ category.content }}
              </p>
            </div>
          </article>
        </div>

        <div
          class="sm:w-[305px] w-full py-5 px-4 text-black shadow-1x28 rounded-[11px] h-max"
        >
          <h2 class="font-gilroy text-[2rem] leading-[2.375rem] text-center">
            Our services
          </h2>
          <nav class="mt-8">
            <ul>
              <li
                v-for="(service, index) in services"
                :key="index"
                class="px-4 py-[10px] mt-[11px] first:mt-0 leading-[1.32rem] rounded hover:bg-blue hover:text-white transition-colors"
                :class="service === curService ? 'bg-blue text-white' : ''"
                @click="selectService(service)"
              >
                <button>
                  <img
                    class="inline mr-[10px] w-5 h-5"
                    :src="`/img/services/${service.image}`"
                    alt=""
                  />
                  {{ service.name }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <footer class="text-blue-line mt-[70px] mb-[21px] text-smleading-4 text-center relative">   
      <div class="relative z-10">
        Terms of Service
        <span class="text-black font-gilroy font-normal">and</span> Privacy
        Policy.
      </div>   
        

        <div
        class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[230px] h-[207px] z-0 -left-[35px] -top-[120px]"
      ></div>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FeatureSvg from "../components/svg/FeatureSvg.vue";
import DownArrow from "../components/svg/DownArrow.vue";
import UpArrow from "../components/svg/UpArrow.vue";
import BreakLineSvg from "../components/svg/BreakLineSvg.vue";
import ServicesMixin from "../components/mixins/ServicesMixin.vue";

export default {
  name: "ServicePage",
  data() {
    return {
      curService: {},
    };
  },
  mounted() {
    if (this.$route.query.service) {
      this.services.forEach((service) => {
        if (service.service === this.$route.query.service) {
          this.curService = service;
          this.$set(service.categories[parseInt(this.$route.query.category)], "expanded", true);
        }
      });
    }else{
      if(this.services[0]){
        this.curService = this.services[0];
      }
    }
  },
  methods: {
    toggleCategory(category) {
      if (category.expanded) {
        this.$set(category, "expanded", false);
      } else {
        this.$set(category, "expanded", true);
      }
    },
    selectService(service){
      this.curService = service;
    }
  },
  components: { HeaderComponent, FeatureSvg, UpArrow, DownArrow, BreakLineSvg },
  mixins: [ServicesMixin],
};
</script>
