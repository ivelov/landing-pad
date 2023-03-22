<template>
  <footer class="relative overflow-hidden pt-5">
    <div class="relative z-10">
      <h1 class="text-center text-[54px] leading-[4.5rem] relative">
        Contacts
        <FeatureSvg
          class="inline absolute -top-3 -translate-x-[3px] text-blue-text"
        ></FeatureSvg>
      </h1>

      <div
        class="mt-[46px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-3 justify-between gap-x-[41px] gap-y-[20px] w-max"
      >
        <article class="pt-[19px] px-5 pb-8 bg-gray-200 rounded-lg">
          <p class="flex justify-center"><MailSvg></MailSvg></p>
          <BreakLineSvg class="w-[225px] mt-3 text-blue-300"></BreakLineSvg>
          <p
            class="text-center text-blue-text mt-[11px] text-lg leading-[1.625rem]"
          >
            <a href="mailto:ackecosystem@gmail.com"> ackecosystem@gmail.com </a>
          </p>
        </article>

        <article class="pt-[19px] px-5 pb-8 bg-gray-200 rounded-lg">
          <p class="flex justify-center"><TelSvg></TelSvg></p>
          <BreakLineSvg class="w-[225px] mt-3 text-blue-300"></BreakLineSvg>
          <p
            class="text-center text-blue-text mt-[9px] text-lg leading-[1.625rem]"
          >
            <a href="tel:+1884654458"> +1 884 65 44 58 </a>
          </p>
        </article>

        <article class="pt-[19px] px-5 pb-8 bg-gray-200 rounded-lg">
          <p class="flex justify-center"><MessageLikeSvg></MessageLikeSvg></p>
          <BreakLineSvg class="w-[225px] mt-3 text-blue-300"></BreakLineSvg>
          <div class="mt-[14px] flex gap-8 justify-center items-center">
            <a href="https://www.instagram.com" target="_blank">
              <InstagramSvg></InstagramSvg>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FacebookSvg></FacebookSvg>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <LinkedInSvg></LinkedInSvg>
            </a>
          </div>
        </article>
      </div>

      <p class="text-black mt-[70px] mb-[21px] text-sm leading-4 text-center">
        <router-link to="/terms-of-service" class="text-blue-line"
          >Terms of Service </router-link
        >
        <span class="font-gilroy font-normal">and</span>
        <router-link to="/privacy-policy" class="text-blue-line"
          > Privacy Policy</router-link
        >.
      </p>
    </div>

    <div
      class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[306px] h-[306px] z-0 -bottom-[153px] -left-[151px]"
    ></div>
  </footer>
</template>

<script>
import MailSvg from "./svg/MailSvg.vue";
import TelSvg from "./svg/TelSvg.vue";
import MessageLikeSvg from "./svg/MessageLikeSvg.vue";
import FeatureSvg from "./svg/FeatureSvg.vue";
import BreakLineSvg from "./svg/BreakLineSvg.vue";
import InstagramSvg from "./svg/InstagramSvg.vue";
import FacebookSvg from "./svg/FacebookSvg.vue";
import LinkedInSvg from "./svg/LinkedInSvg.vue";
export default {
  name: "FooterComponent",
  components: {
    FeatureSvg,
    MailSvg,
    BreakLineSvg,
    TelSvg,
    MessageLikeSvg,
    InstagramSvg,
    FacebookSvg,
    LinkedInSvg,
  },
};
</script>
