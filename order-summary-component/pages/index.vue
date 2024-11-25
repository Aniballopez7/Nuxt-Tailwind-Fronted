<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div
    class="font-[Red+Hat+Display] w-full h-screen bg-[url('/assets/images/pattern-background-mobile.svg')] lg:bg-[url('/assets/images/pattern-background-desktop.svg')] bg-cover flex justify-center items-center p-5">
    <div class="bg-white rounded-2xl max-w-[400px]  shadow-lg flex flex-col gap-6">
      <div>
        <img src="/assets/images/illustration-hero.svg" class="w-full h-full cover rounded-t-2xl">
      </div>
      <div class="flex flex-col items-center justify-center text-center space-y-5 p-5 lg:px-10">
        <h2 class="text-3xl font-bold text-Dark-blue">Order Summary</h2>
        <p class="text-Desaturated-blue text-lg ">You can now listen to millions of songs, audiobooks, and podcasts on any
          device anywhere you like!</p>
        <div class="flex w-full justify-between items-center">
          <div class="flex gap-5">
            <img src="/assets/images/icon-music.svg">
            <div>
              <h3 class="font-bold text-Dark-blue"> Annual Plan</h3>
              <span class="text-Desaturated-blue  "> $59.99/year</span>
            </div>
          </div>
          <div>
            <a href="#" class="underline text-Bright-blue font-semibold">Change</a>
          </div>
        </div>
        <div class="w-full flex flex-col gap-5">
          <button class="w-full rounded-lg py-2.5 bg-Bright-blue text-white transition-color duration-300 ease-in-out hover:bg-Bright-blue/80"> Proceed to Payment</button>
          <button class="text-Desaturated-blue font-bold"> Cancel Order</button>
        </div>
      </div>
    </div>
  </div>
</template>
