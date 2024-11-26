<template>
  <div class="font-manrope bg-Light-Grayish-Blue min-h-dvh p-5 flex justify-center items-center">
    <div class="bg-white grid rounded-xl lg:w-[1000px] lg:grid-cols-[0.6fr_1fr]">
      <figure class="">
        <img src="/assets/images/drawers.jpg"
          class="w-full h-full cover rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
      </figure>
      <div class="flex flex-col lg:gap-5 lg:p-10">
        <div class="space-y-5 px-8 py-5 lg:p-0">
          <h3 class="text-Very-Dark-Grayish-Blue font-bold text-lg lg:text-3xl"> Shift the overall look and feel by
            adding these wonderful
            touches to furniture in your home</h3>
          <p class="font-semibold  text-Desaturated-Dark-Blue text-base"> Ever been in a room and felt like something
            was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.</p>
        </div>
        <div class="flex h-[68px] justify-between items-center px-8 lg:pb-0 lg:px-0"
          v-if="!isMobile || (isMobile && !isOpen)">
          <div class="flex gap-5">
            <figure>
              <img src="/assets/images/avatar-michelle.jpg" class="w-12 h-12 rounded-full">
            </figure>
            <div>
              <h4 class="font-bold text-Very-Dark-Grayish-Blue ">Michelle Appleton</h4>
              <span class="text-Grayish-Blue"> 28 Jun 2020</span>
            </div>
          </div>
          <!-- Menu para PC -->
          <div class="relative">
            <div v-if="isOpen && !isMobile"
              class="absolute flex bg-Very-Dark-Grayish-Blue p-5 text-white z-0 gap-5 rounded-lg w-[250px] -translate-y-[120%] -translate-x-1/2">
              <p class="text-Grayish-Blue uppercase tracking-[0.5em]">Share</p>
              <a href="#" class="flex gap-5">
                <img src="/assets/images/icon-facebook.svg">
              </a>
              <a href="#" class="flex gap-5">
                <img src="/assets/images/icon-twitter.svg">
              </a>
              <a href="#" class="flex gap-5">
                <img src="/assets/images/icon-pinterest.svg">
              </a>
            </div>
            <button @click="toggleShare" v-if="!isMobile || (isMobile && !isOpen)"
              class="bg-Light-Grayish-Blue active:bg-Very-Dark-Grayish-Blue p-2 rounded-full text-Very-Dark-Grayish-Blue active:text-white">
              <Icon name="mdi:share" class="flex w-6 h-6 justify-center items-center" />
            </button>
          </div>
        </div>
        <!-- Menu para telefono -->
        <div class="w-full h-[68px] px-8 bg-Very-Dark-Grayish-Blue flex justify-between items-center rounded-b-lg"
          v-if="isOpen && isMobile">
          <div class="flex gap-2.5">
            <p class="text-Grayish-Blue uppercase tracking-[0.5em]">Share</p>
            <a href="#" class="flex">
              <img src="/assets/images/icon-facebook.svg">
            </a>
            <a href="#" class="flex">
              <img src="/assets/images/icon-twitter.svg">
            </a>
            <a href="#" class="flex">
              <img src="/assets/images/icon-pinterest.svg">
            </a>
          </div>
          <button @click="toggleShare" class="rounded-full text-white p-2 active:bg-white/50">
            <Icon name="mdi:share" class="flex w-6 h-6 justify-center items-center" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isOpen = ref(false);
const isMobile = ref(false);


// Detectar si es web o mobile
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024 // 1024px es el breakpoint de lg en Tailwind
}

const toggleShare = () => {
  isOpen.value = !isOpen.value
}

// Detectar cambios en el tamaño de la pantalla
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
});
</script>

<style lang="css" scoped></style>