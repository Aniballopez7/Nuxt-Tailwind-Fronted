<template>
  <div class="container ">
    <div v-show="isMobile" class="space-y-10 w-full">
      <figure class="px-10">
        <img src="/assets/images/logo.svg">
      </figure>
      <figure class="w-full">
        <img src="/assets/images/hero-mobile.jpg" class="w-full cover">
      </figure>
    </div>
    <div class="flex flex-col justify-between lg:p-[8rem]">
      <figure v-show="!isMobile">
        <img src="/assets/images/logo.svg" class="cover">
      </figure>
      <div class="flex flex-col text-center px-10 space-y-8 lg:w-[70%] lg:text-start lg:p-0">
        <h1 class="uppercase tracking-[0.3em] font-semibold text-5xl lg:text-6xl"><span
            class="text-desaturated-red font-light">We're</span> coming soon</h1>
        <p class="text-desaturated-red"> Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals
        </p>
        <form class="flex justify-between border border-desaturated-red rounded-full overflow-hidden">
          <input type="email" v-model="email" placeholder="Email Address" class="outline-none border-none py-3 px-5">
          <button type="submit"><img src="/assets/images/icon-arrow.svg" class="btn"></button>
        </form>
      </div>
    </div>
    <figure v-show="!isMobile">
      <img src="/assets/images/hero-desktop.jpg">
    </figure>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMobile = ref(false);
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024 // 1024px es el breakpoint de lg en Tailwind
}
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
});
</script>