<template>
  <div class="bg-dark min-h-dvh w-full flex justify-center items-center font-[Overpass] p-5">
    <div class="max-w-[400px] bg-dark-blue flex flex-col gap-5 p-10 rounded-3xl">
      <div class="bg-white/5 p-3 w-fit rounded-full">
        <img class=" h-5 w-5" src="/assets/images/icon-star.svg">
      </div>
      <h1 class="text-white text-2xl font-medium lg:text-4xl">How did we do?</h1>
      <p class="text-grey font-medium"> Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!</p>
      <div class="flex justify-between items-center">
        <button class="btn" :class="{ active: selectedButton === 1 }" @click="toggleButton(1)">1</button>
        <button class="btn" :class="{ active: selectedButton === 2 }" @click="toggleButton(2)">2</button>
        <button class="btn" :class="{ active: selectedButton === 3 }" @click="toggleButton(3)">3</button>
        <button class="btn" :class="{ active: selectedButton === 4 }" @click="toggleButton(4)">4</button>
        <button class="btn" :class="{ active: selectedButton === 5 }" @click="toggleButton(5)">5</button>
      </div>
      <a href="/thanks" class="btn button">Submit</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedButton: null,
    };
  },
  methods: {
    toggleButton(buttonId) {
      this.selectedButton = this.selectedButton === buttonId ? null : buttonId;
      // this.$router.push({ name: 'detail', params: { id } });
    }
  }
}
</script>

<style scoped>
.active {
  background-color: #f0f0f0;
  color: #121417;
}
</style>