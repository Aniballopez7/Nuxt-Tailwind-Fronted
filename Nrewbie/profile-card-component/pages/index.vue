<script setup>
</script>

<template>
  <div class="bg-dark-cyan min-h-dvh relative overflow-hidden p-5 flex justify-center items-center font-kumbh-sabs">
    <img src="/assets/images/bg-pattern-top.svg" class="absolute -translate-x-[35%] -translate-y-1/2">
    <img src="/assets/images/bg-pattern-bottom.svg"
      class="absolute translate-y-[60%] translate-x-1/2 lg:translate-y-1/2 lg:translate-x-[80%] ">
    <div class="bg-white w-full rounded-xl overflow-hidden relative  lg:max-w-[500px]">
      <span class="bg w-full h-[150px] bg-cover"></span>
      <div class="relative pt-[100px] pb-5 flex flex-col justify-center items-center gap-5">
        <figure class="bg-white w-fit rounded-full p-2 overflow-hidden">
          <img src="/assets/images/image-victor.jpg" class="rounded-full">
        </figure>
        <div class="flex flex-col items-center gap-1">
          <div class="flex gap-2.5">
            <h2 class="text-2xl font-bold text-dark-desaturated">Victor Crest</h2>
            <p class="text-2xl text-dark-grayish">26</p>
          </div>
          <span class="text-dark-grayish font-medium tracking-wider">London</span>
        </div>
        <span class="h-[0.5px] w-full bg-gray"></span>
        <div class="w-full flex justify-between px-10">
          <div class="div-span">
            <span class="number">80K</span>
            <span class="text">Followers</span>
          </div>
          <div class="div-span">
            <span class="number">803K</span>
            <span class="text">Likes</span>
          </div>
          <div class="div-span">
            <span class="number">1.4K</span>
            <span class="text">Photos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
