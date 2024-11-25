<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-dvh bg-neutral-mainBG font-[Outfit] flex justify-center items-center">
    <div class="bg-neutral-cardBG p-5 rounded-xl max-w-[320px] flex flex-col gap-5">
      <div class="rounded-lg relative group">
        <img src="/assets/images/image-equilibrium.jpg" class="rounded-lg w-full h-full">
        <div class="absolute inset-0 bg-primary-2/50 flex items-center justify-center opacity-0 rounded-lg group-hover:opacity-100 transition-opacity cursor-pointer">
          <img src="/assets/images/icon-view.svg">
        </div>
      </div>
      <a href="#" class="font-medium text-xl lg:text-lg text-white active:text-primary-2">Equilibrium #3429</a>
      <p class="text-primary-1 font-light">Our Equilibrium collection promotes balance and calm.</p>
      <div class="flex justify-between">
        <p class="text-primary-2 font-semibold flex items-center gap-2"><img src="/assets/images/icon-ethereum.svg"
            class="w-3 h-5"> 0.041 ETH</p>
        <p class="text-primary-1 font-light flex items-center gap-2"><img src="/assets/images/icon-clock.svg"
            class="w-4 h-4"> 3 days left</p>
      </div>
      <div class="h-[0.5px] bg-neutral-line"></div>
      <div class="flex items-center gap-5">
        <div class="w-7 h-7">
          <img src="/assets/images/image-avatar.png" class="border border-white rounded-full">
        </div>
        <a href="#" class="text-white font-light active:text-primary-2">
          <span class="text-primary-1">Creation of</span> Jules Wyvern
        </a>
      </div>
    </div>
  </div>
</template>
