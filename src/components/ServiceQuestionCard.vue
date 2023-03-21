<template>
  <article
    class="rounded-lg w-[290px] h-[380px] relative bg-blend-multiply bg-[url('../public/img/services/question.png')]"
  >
  <!-- Tint -->
  <div class="w-full h-full bg-blue-question absolute z-0 rounded-lg">
    
  </div>
  <h3 class="text-2xl text-center text-white mt-[83px] relative z-10 w-[160px] mx-auto">
      Didn't find the right service?
    </h3>

    <div class="mt-[19px] mx-auto w-fit">
      <button class="relative z-10 rounded-lg text-blue-text text-lg text-center py-[14px] px-[49px] bg-white shadow-4x10 hover:bg-blue-200 transition-colors"
      @click="$emit('onButtonClick')">
        Ask a question
      </button>
    </div>
    
  </article>
</template>

<script>
export default {
  name: "ServiceQuestionCard",
};
</script>
