<template>
  <article
    class="rounded-lg bg-white w-[200px] sm:w-[335px] p-4 shadow-4x10 h-min max-h-40 overflow-y-auto"
  >
    <p class="flex items-center">
      <DotSvg class="text-blue-text mr-2"></DotSvg>
      {{ data.author }}
    </p>
    <small class="ml-3 text-xs text-gray leading-7 font-light">{{
      data.role
    }}</small>
    <div class="ml-3 mb-2 sm:ml-0 sm:absolute top-6 right-4 flex gap-[5px]">
      <StarSvg class="text-blue" v-for="n in data.rate" :key="n"></StarSvg>
      <StarSvg class="text-gray" v-for="n in 5 - data.rate" :key="n"></StarSvg>
    </div>
    <p class="ml-3 text-[0.938rem] font-light mr-9 leading-[17px]">
      {{ data.message }}
    </p>
  </article>
</template>

<script>
import StarSvg from "../components/svg/StarSvg.vue";
import DotSvg from "../components/svg/DotSvg.vue";

export default {
  name: "ReviewComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: { StarSvg, DotSvg },
};
</script>
