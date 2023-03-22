<template>
  <div>
    <HeaderComponent
      current-page="blogs"
      :transparent="scroll < 50"
      :with-shadow="scroll > 50"
      @onButtonClick="scrollToContacts"
    ></HeaderComponent>
    <section class="mt-[84px] pl-[6.7%] pr-[8.6%] font-gilroy">
      <h1 class="text-[2rem] leading-[2.375rem]">
        Information You Provide to Us
      </h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        We collect information you provide directly to us. For example, you
        share information directly with us when you create an account, fill out
        a form, submit or post content through our Services, purchase a
        membership, communicate with us via third-party platforms, request
        customer support, or otherwise communicate with us. The types of
        personal information we may collect include your name, display name,
        username, bio, email address, business information, your content,
        including your avatar image, photos, posts, responses, and series
        published by you, and any other information you choose to provide.
        <br /><br />
        In some cases, we may also collect information you provide about others,
        such as when you purchase a Medium membership as a gift for someone. We
        will use this information to fulfill your request and will not send
        communications to your contacts unrelated to your request, unless they
        separately consent to receive communications from us or otherwise engage
        with us.
        <br /><br />
        We do not collect payment information through our Services. We rely on
        third parties to process payments in connection with our Services. Any
        information you provide to facilitate such a payment is subject to the
        third-party payment processor’s privacy policy, and we encourage you to
        review this policy before you provide any information to the payment
        processor.
      </p>
      <h1 class="text-[2rem] leading-[2.375rem] mt-10">
        Information We Collect Automatically When You Interact with Us
      </h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        In some instances, we automatically collect certain information,
        including:
      </p>
      <br>
      <ul class="list-disc ml-5 text-lg leading-[1.813rem] capitalize">
        <li>
          Activity Information: We collect information about your activity on
          our Services, such as your reading history and when you share links,
          follow users, highlight posts, and clap for posts.
        </li>
        <li>
          Transactional Information: When you purchase a membership, we collect
          information about the transaction, such as subscription details,
          purchase price, and the date of the transaction.
        </li>
        <li>
          Device and Usage Information: We collect information about how you
          access our Services, including data about the device and network you
          use, such as your hardware model, operating system version, mobile
          network, IP address, unique device identifiers, browser type, and app
          version. We also collect information about your activity on our
          Services, such as access times, pages viewed, links clicked, and the
          page you visited before navigating to our Services.
        </li>
        <li>
          Information Collected by Cookies and Similar Tracking Technologies: We
          use tracking technologies, such as cookies and web beacons, to collect
          information about you. Cookies are small data files stored on your
          hard drive or in device memory that help us improve our Services and
          your experience, see which areas and features of our Services are
          popular, and count visits. Web beacons (also known as “pixel tags” or
          “clear GIFs”) are electronic images that we use on our Services and in
          our emails to help deliver cookies, count visits, and understand
          usage. We also work with third party analytics providers who use
          cookies, web beacons, device identifiers, and other technologies to
          collect information about your use of our Services and other websites
          and applications, including your IP address, web browser, mobile
          network information, pages viewed, time spent on pages or in mobile
          apps, and links clicked. This information may be used by Medium and
          others to, among other things, analyze and track data, determine the
          popularity of certain content, deliver content targeted to your
          interests on our Services, and better understand your online activity.
          For more information about cookies and how to disable them, see Your
          Choices below.
        </li>
      </ul>

      <h1 class="text-[2rem] leading-[2.375rem] mt-10">
        Information We Collect from Other Sources
      </h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        We obtain information from third-party sources. For example, we may
        collect information about you from social networks, accounting services
        providers and data analytics providers. Additionally, if you create or
        log into your Medium account through a third-party platform (such as
        Apple, Facebook, Google, or Twitter), we will have access to certain
        information from that platform, such as your name, lists of friends or
        followers, birthday, and profile picture, in accordance with the
        authorization procedures determined by such platform.
      </p>
      <h1 class="text-[2rem] leading-[2.375rem] mt-10">
        Information We Derive
      </h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        We may derive information or draw inferences about you based on the
        information we collect. For example, we may make inferences about your
        location based on your IP address or infer reading preferences based on
        your reading history.
      </p>
      <h1 class="text-[2rem] leading-[2.375rem] mt-10">THIRD-PARTY EMBEDS</h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        Medium does not host some of the content displayed on our Services.
        Users have the ability to post content that is actually hosted by a
        third party, but is embedded in our pages (an “Embed”). When you
        interact with an Embed, it can send information about your interaction
        to the hosting third party just as if you were visiting the third
        party’s site directly. For example, when you load a Medium post page
        with a YouTube video Embed and watch the video, YouTube receives
        information about your activity, such as your IP address and how much of
        the video you watch. Medium does not control what information third
        parties collect through Embeds or what they do with the information.
        This Privacy Policy does not apply to information collected through
        Embeds. The privacy policy belonging to the third party hosting the
        Embed applies to any information the Embed collects, and we recommend
        you review that policy before interacting with the Embed.
      </p>
      <h1 class="text-[2rem] leading-[2.375rem] mt-10">
        TRANSFER OF INFORMATION TO THE UNITED STATES AND OTHER COUNTRIES
      </h1>
      <p class="text-lg leading-[1.813rem] mt-[30px] capitalize">
        Medium is headquartered in the United States, and we have operations and
        service providers in the United States and other countries. Therefore,
        we and our service providers may transfer your personal information to,
        or store or access it in, jurisdictions that may not provide levels of
        data protection that are equivalent to those of your home jurisdiction.
        For example, we transfer personal data to Amazon Web Services, one of
        our service providers that processes personal information for us in
        various data center locations across the globe, including those listed
        here. We will take steps to ensure that your personal information
        receives an adequate level of protection in the jurisdictions in which
        we process it.
      </p>
    </section>
    <footer
      class="text-black mt-[32px] mb-5 text-sm leading-4 text-center relative"
    >
      <router-link :to="`${$publicPath}terms-of-service`" class="text-blue-line"
        >Terms of Service
      </router-link>
      <span class="font-gilroy font-normal">and</span>
      <router-link :to="`${$publicPath}privacy-policy`" class="text-blue-line">
        Privacy Policy</router-link
      >.
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  name: "PrivacyPolicyPage",
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
    scrollToContacts() {
      this.$router.push({ path: this.$publicPath, query: { contacts: true } });
    },
  },
  components: { HeaderComponent },
};
</script>
