<template>
  <div >
    <HeaderComponent @onButtonClick="scrollToContacts" current-page="home" :transparent="scroll < 100" :with-shadow="scroll > 100" :text-white="scroll < 100"></HeaderComponent>
    <section
      class="relative mt-[-80px] z-10 text-white h-[700px] sm:h-[900px] rounded-b-lg bg-cover bg-no-repeat bg-center bg-blend-multiply bg-gray-300 bg-[url('../public/img/home-header.jfif')]"
    >
    &nbsp;
      <h2
        class="text-[54px] font-bold leading-[4.5rem] max-w-lg ml-10 min-[500px]:ml-24 mt-16 sm:mt-[173px]"
      >
        Moving to Portugal?
      </h2>
      <p class="text-2xl ml-10 min-[500px]:ml-24 mt-[10px] max-w-[434px] font-gilroy">
        Let the experts of the ACK ecosystem handle your administrative
        headaches
      </p>
      <button
        class="rounded bg-blue text-white ml-10 min-[500px]:ml-24 mt-10 py-3.5 px-10 w-[270px] font-medium text-lg hover:bg-blue-700 transition-colors"
        @click="scrollToContacts"
        >
        Help to emigrate
      </button>
    </section>

    <!-- Reviews -->
    <section class="mt-16 relative">
      <div
        class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[380px] h-[380px] z-0 -top-[134px] -left-[87px]"
      ></div>
      <div
        class="z-10 w-[85.4%] mx-auto flex justify-between items-center h-36 relative"
      >
        <button @click="reviewLeft" class="mr-3">
          <LeftArrow class="text-blue"></LeftArrow>
        </button>
        <div
          class="flex gap-[38px] items-center relative"
          :class="{ slideLeft: slideLeft, slideRight: slideRight }"
        >
          <ReviewComponent
            v-for="(review, index) in reviews"
            :key="index"
            :data="review.data"
            :class="[
              { hidden: review.hidden, '-left-[373px]': review.isLeft },
              review.absolute ? 'absolute' : 'relative',
              review.isRight ? '-right-[373px]' : '',
              review.fade ? 'fade' : 'unfade',
            ]"
          ></ReviewComponent>
        </div>
        <button @click="reviewRight" class="ml-3">
          <RightArrow class="text-blue"></RightArrow>
        </button>
      </div>
    </section>

    <!-- Services -->
    <section class="mt-32 relative overflow-hidden">
      <div
        class="absolute bg-gray-bg blur-[58px] rounded-[190px] w-[255px] h-[255px] z-0 -right-[65px] top-[42%]"
      ></div>
      <div class="relative z-10">
        <h1
          class="text-center font-medium text-[54px] leading-[4.5rem] relative"
        >
          <span class="text-dark">Our </span>
          <span class="text-blue-text"
            >Services
            <FeatureSvg
              class="inline absolute -top-3 -translate-x-[3px]"
            ></FeatureSvg>
          </span>
        </h1>
        <h2
          class="text-dark text-center font-medium text-[2rem] leading-[42px] mt-4"
        >
          Tailor-made solutions for your unique situation
        </h2>
        <p class="text-[15px] leading-[18px] mt-8 w-[92.5%] mx-auto">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will
        </p>

        <div
          class="grid w-max mx-auto gap-[31px] mt-4 justify-center grid-cols-1 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 min-[1400px]:grid-cols-4 min-[1800px]:grid-cols-5"
        >
          <ServiceCard
            v-for="service in services"
            :key="service.service"
            :data="service"
          ></ServiceCard>
          <ServiceQuestionCard @onButtonClick="scrollToContacts"></ServiceQuestionCard>
        </div>
      </div>
    </section>

    <section
      class="mt-12 sm:mt-[100px] text-white bg-cover bg-no-repeat bg-center bg-blend-multiply bg-dark-400 bg-[url('../public/img/home-bg-2.png')]"
    >
    &nbsp;
      <h1
        class="mt-9 sm:mt-[87px] text-[3.375rem] leading-[4.5rem] text-center relative"
      >
        Our Story
        <FeatureSvg
          class="inline absolute -top-3 -translate-x-[3px]"
        ></FeatureSvg>
      </h1>
      <p class="mt-10 mb-9 sm:mb-[89px] text-lg leading-[1.625rem] text-center mx-auto w-[66%]">
        We can help you reimagine your business through a digital lens. Our
        software engineering heritage combined with our strategic business and
        innovation consulting, design thinking, and physical-digital
        capabilities provide real business value to our customers through
        human-centric innovation. 
        <br><br>
        There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend.
      </p>
      &nbsp;
    </section>

    <section class="bg-blue-200 rounded-2xl w-[92.5%] mx-auto mt-[100px] relative overflow-hidden">
      <div
        class="absolute bg-blue-400 blur-[170px] rounded-[190px] w-[190px] h-[190px] z-0 -left-[72px] -top-[47px]"
      ></div>
      <div class="relative z-10">
        &nbsp;
      <h1 class="relative text-[54px] leading-[4.5rem] w-min mx-auto mt-[71px]">
        <FeatureLeftSvg class="inline absolute -top-7 -translate-x-[93%] text-blue-text h-[51px] w-[51px]"></FeatureLeftSvg>
        Team
      </h1>

      <h2 class=" text-center text-[2rem] leading-[2.625rem] max-w-[385px] mx-auto">
        A team of <span class="text-blue-text">professionals</span> is <span class="text-blue-text">working</span> on your problem
      </h2>

      <div class="mt-16 mx-auto mb-[53px] w-max grid grid-cols-1 lg:grid-cols-2 gap-x-[90px] gap-y-16">
        <TeamMember v-for="(member, index) in team" :key="index" :data="member"></TeamMember>
      </div>
      &nbsp;
      </div>
      <div
        class="absolute bg-blue-400 blur-[170px] rounded-[190px] w-[190px] h-[190px] z-0 -right-[133px] -bottom-[136px]"
      ></div>
    </section>

    <FooterComponent ref="contacts" class="mt-[92px]"></FooterComponent>
  </div>
</template>
<script>

import HeaderComponent from "../components/HeaderComponent.vue";
import ReviewComponent from "../components/ReviewComponent.vue";
import ServiceCard from "../components/ServiceCard.vue";
import ServiceQuestionCard from "../components/ServiceQuestionCard.vue";
import TeamMember from "../components/TeamMember.vue";
import FooterComponent from "../components/FooterComponent.vue";

import ReviewsMixin from "../components/mixins/ReviewsMixin.vue";
import ServicesMixin from "../components/mixins/ServicesMixin.vue";
import TeamMixin from "../components/mixins/TeamMixin.vue";

import RightArrow from "../components/svg/RightArrow.vue";
import LeftArrow from "../components/svg/LeftArrow.vue";
import FeatureSvg from "../components/svg/FeatureSvg.vue";
import FeatureLeftSvg from "../components/svg/FeatureLeftSvg.vue";

export default {
  name: "HomePage",
  data() {
    return {
      slideLeft: false,
      slideRight: false,
      firstReview: 0,
      lastReview: 2,
      sliderRunning: false,
      windowWidth: window.innerWidth,
      scroll: window.scrollY
    };
  },
  mounted() {
    window.addEventListener("resize", this.onWidthChange);
    this.onWidthChange();
    this.updateReviews();

    window.addEventListener('scroll', this.onScroll);

    if(this.$route.query.contacts){
      this.$router.replace({ query: undefined });
      this.scrollToContacts();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWidthChange);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(){
      this.scroll = window.scrollY;
    },
    onWidthChange() {
      this.windowWidth = window.innerWidth;
      let newLast = this.lastReview;
      let newFirst = this.firstReview;
      let elementsDisplayed = this.lastReview - this.firstReview + 1;

      if (newLast >= this.reviews.length) {
        newLast = this.reviews.length - 1;
      }

      //Small screens, max 1 element
      if (this.windowWidth < 900) {
        if (elementsDisplayed > 1) {
          newLast = this.firstReview;
        }

        //Medium screens, max 2 elements
      } else if (this.windowWidth < 1300) {
        if (elementsDisplayed > 2) {
          newLast = this.firstReview + 1;
        } else if (elementsDisplayed < 2) {
          if (this.reviews.length > 3) {
            let nextOutOfBounds = newLast + 1 >= this.reviews.length;
            if (nextOutOfBounds) {
              if (newFirst > 0) {
                newFirst--;
              }
            } else {
              newLast++;
            }
          } else {
            newFirst = 0;
            newLast = 1;
          }
        }

        //Large screens, max 3 elements
      } else {
        if (elementsDisplayed > 3) {
          newLast = this.firstReview + 1;
          this.updateReviews();
        } else if (elementsDisplayed < 3) {
          let mustDisplay =
            this.reviews.length > 3 ? 3 : this.reviews.length - 1;
          let nextOutOfBounds = newLast + 1 >= this.reviews.length;
          while (!nextOutOfBounds && elementsDisplayed < mustDisplay) {
            newLast++;
            nextOutOfBounds = newLast + 1 >= this.reviews.length;
            elementsDisplayed = newLast - newFirst + 1;
          }
          let prevOutOfBounds = newFirst - 1 < 0;
          while (!prevOutOfBounds && elementsDisplayed < mustDisplay) {
            newFirst--;
            prevOutOfBounds = newFirst - 1 < 0;
            elementsDisplayed = newLast - newFirst + 1;
          }
        }
      }

      if (newFirst !== this.firstReview || newLast !== this.lastReview) {
        this.firstReview = newFirst;
        this.lastReview = newLast;
        this.updateReviews();
      }
    },
    updateReviews() {
      let newReviews = [...this.reviews];
      for (let i = 0; i < this.reviews.length; i++) {
        if (i >= this.firstReview && i <= this.lastReview) {
          newReviews[i].absolute = false;
          newReviews[i].fade = false;
          newReviews[i].hidden = false;
        } else {
          newReviews[i].absolute = true;
          newReviews[i].fade = true;
          newReviews[i].hidden = true;
        }
      }
      this.reviews = newReviews;
    },
    reviewLeft() {
      let reviewsCount = this.reviews.length;
      if (this.sliderRunning || reviewsCount <= 1) {
        return;
      }
      this.sliderRunning = true;
      this.slideLeft = true;

      let elementToFadeIndex = this.firstReview;
      if (this.lastReview + 1 >= reviewsCount) {
        //Move first element to end
        this.reviews.push(this.reviews.splice(0, 1)[0]);
        if (elementToFadeIndex > 0) {
          elementToFadeIndex--;
        }
      } else {
        this.lastReview++;
        this.firstReview++;
      }

      this.$set(this.reviews[elementToFadeIndex], "fade", true);
      this.$set(this.reviews[this.lastReview], "hidden", false);
      this.$set(this.reviews[this.lastReview], "fade", false);
      this.$set(this.reviews[this.lastReview], "isRight", true);

      setTimeout(() => {
        this.$set(this.reviews[elementToFadeIndex], "hidden", true);
        this.$set(this.reviews[elementToFadeIndex], "absolute", true);
        this.$set(this.reviews[this.lastReview], "absolute", false);
        this.$set(this.reviews[this.lastReview], "isRight", false);

        this.slideLeft = false;
        this.sliderRunning = false;
      }, 150);
    },
    reviewRight() {
      let reviewsCount = this.reviews.length;
      if (this.sliderRunning || reviewsCount <= 1) {
        return;
      }
      this.sliderRunning = true;
      this.slideRight = true;

      let lastReview = this.lastReview;
      if (this.firstReview - 1 < 0) {
        //Move last element to start
        this.reviews.unshift(this.reviews.splice(reviewsCount - 1, 1)[0]);
        if (this.lastReview + 1 < reviewsCount) {
          lastReview++;
        }
      } else {
        this.firstReview--;
        this.lastReview--;
      }

      this.$set(this.reviews[lastReview], "fade", true);
      this.$set(this.reviews[this.firstReview], "hidden", false);
      this.$set(this.reviews[this.firstReview], "fade", false);
      this.$set(this.reviews[this.firstReview], "isLeft", true);

      setTimeout(() => {
        this.$set(this.reviews[lastReview], "hidden", true);
        this.$set(this.reviews[lastReview], "absolute", true);
        this.$set(this.reviews[this.firstReview], "absolute", false);
        this.$set(this.reviews[this.firstReview], "isLeft", false);

        this.slideRight = false;
        this.sliderRunning = false;
      }, 150);
    },
    scrollToContacts(){
      this.$refs.contacts.$el.scrollIntoView({ behavior: 'smooth' });
    }
  },
  components: {
    HeaderComponent,
    ReviewComponent,
    LeftArrow,
    RightArrow,
    FeatureSvg,
    ServiceCard,
    ServiceQuestionCard,
    FeatureLeftSvg,
    TeamMember,
    FooterComponent
  },
  mixins: [ReviewsMixin, ServicesMixin, TeamMixin],
};
</script>

<style scoped>
.slideRight {
  left: 0px;
  animation: slideRight 150ms 1 ease-in-out;
}

@keyframes slideRight {
  0% {
    left: 0px;
  }
  100% {
    left: 373px;
  }
}

.slideLeft {
  right: 0px;
  animation: slideLeft 150ms 1 ease-in-out;
}

@keyframes slideLeft {
  0% {
    right: 0px;
  }
  100% {
    right: 373px;
  }
}

.fade {
  opacity: 0;
  animation: fade 150ms 1 ease-in;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.unfade {
  opacity: 1;
  animation: unfade 150ms 1 ease-out;
}

@keyframes unfade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
