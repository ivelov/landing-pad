<template>
  <article
    class="group rounded-lg w-[290px] pr-[15px] pl-5 py-[26px] p-4 shadow-3x28 h-[380px] hover:text-white bg-white hover:bg-blue transition-colors"
  >
    <p class="font-medium text-xl">
      <img
        class="inline mr-4 w-[42px] h-[42px]"
        :src="`${$publicPath}img/services/${data.image}`"
        alt=""
      />{{ data.name }}
    </p>
    <BreakLineSvg
      class="mt-6 ml-[-3px] text-blue-text group-hover:text-white"
    ></BreakLineSvg>
    <ul class="mr-[15px] mt-[24px] text-dark group-hover:text-white">
      <li
        v-for="(category, index) in data.categories"
        :key="index"
        class="mt-5 first:mt-0"
      >
        <router-link
          :to="{ path: `${$publicPath}services`, query: { service: data.service, category:index }}"
          class="flex justify-between items-center gap-3 text-base leading-[19px]"
        >
          <span class="w-56">{{ category.name }}</span>
          <RightArrow class="w-[7px] h-3 inline"></RightArrow>
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script>
import BreakLineSvg from "./svg/BreakLineSvg.vue";
import RightArrow from "./svg/RightArrow.vue";
export default {
  name: "ServiceCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: { BreakLineSvg, RightArrow },
};
</script>
