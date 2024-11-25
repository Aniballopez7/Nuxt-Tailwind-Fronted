<template>
  <div class="w-full min-h-dvh relative flex justify-center items-start bg-light-pink pt-24 px-5">
    <span class="background-mobile lg:background-desktop"></span>
    <div class="bg-white w-full max-w-[600px] rounded-2xl  p-10 z-10 gap-10">
      <div class="flex items-center gap-10">
        <img src="/assets/images/icon-star.svg">
        <h1 class="text-5xl font-bold text-dark-purple">FAQs</h1>
      </div>
      <div class="article mt-5">
        <div @click="toggleFAQ(0)">
          <h2 class="text-sm lg:text-base">What is Frontend Mentor, and how will it help me?</h2>
          <span>{{ isOpen[0] ? '−' : '+' }}</span>
        </div>
        <p v-show="isOpen[0]" class="parraf"> Frontend Mentor offers realistic coding challenges to help developers improve
          their
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
          all levels and ideal for portfolio building.</p>
      </div>
      <div class="article">
        <div @click="toggleFAQ(1)">
          <h2 class="text-sm lg:text-base"> Is Frontend Mentor free?</h2>
          <span>{{ isOpen[0] ? '−' : '+' }}</span>
        </div>
        <p v-show="isOpen[1]" class="parraf"> Yes, Frontend Mentor offers both free and premium coding challenges, with the
          free
          option providing access to a range of projects suitable for all skill levels.</p>
      </div>
      <div class="article">
        <div @click="toggleFAQ(2)">
          <h2 class="text-sm lg:text-base"> Can I use Frontend Mentor projects in my portfolio?</h2>
          <span>{{ isOpen[0] ? '−' : '+' }}</span>
        </div>
        <p v-show="isOpen[2]" class="parraf"> Yes, you can use projects completed on Frontend Mentor in your portfolio. It's
          an excellent
          way to showcase your skills to potential employers!</p>
      </div>
      <div class="article article-last">
        <div @click="toggleFAQ(3)">
          <h2 class="text-sm lg:text-base"> How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
          <span>{{ isOpen[0] ? '−' : '+' }}</span>
        </div>
        <p v-show="isOpen[3]" class="parraf parraf-last"> The best place to get help is inside Frontend Mentor's Discord community.
          There's a help
          channel where you can ask questions and seek support from other community members.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: [false, false, false, false] // Todos comienzan como 'false', por lo tanto, las respuestas están ocultas
    };
  },
  methods: {
    toggleFAQ(index) {
      this.isOpen[index] = !this.isOpen[index]; // Alternar el estado abierto/cerrado para el índice correspondiente
    }
  }
};
</script>


<style lang="scss" scoped></style>