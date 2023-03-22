<template>
  <article class="w-[342px]">
    <img
      class="w-[193px] h-[193px] mx-auto"
      :src="`${$publicPath}img/team/${data.image}`"
      alt=""
    />
    <p class="text-center mt-6 text-dark font-bold text-lg">
      {{ data.name }}
    </p>
    <p class="text-blue-text text-center text-sm leading-6 font-medium">
      {{ data.role ? data.role : "\u200b" }}
    </p>
    <p class="mt-6 text-dark text-sm leading-[1.813rem] text-center">
      {{ data.description }}
    </p>
  </article>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
