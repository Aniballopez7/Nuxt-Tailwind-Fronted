<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="p-5 flex justify-center items-center min-h-dvh">
    <div class=" flex flex-col gap-10 lg:w-[40%]">
      <div class="flex flex-col items-center gap-10 mt-10">
        <figure class="w-20 lg:w-16"><img src="/assets/images/logo.svg"></figure>
        <div class="w-full flex flex-col gap-5">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-3xl text-gray font-light tracking-wide lg:text-4xl">We are launching <span class="text-Very-Dark-Blue font-bold">soon!</span></h1>
            <p class="text-Very-Dark-Blue text-lg">Subscribe and get notified</p>
          </div>
          <div class="w-full flex flex-col gap-5 lg:flex-row">
            <input type="email" placeholder="Enter your email" class="border border-Pale-Blue py-2.5 px-4 rounded-full lg:px-6 lg:w-[60%]" />
            <button class="bg-blue p-2 flex justify-center items-center cursor-pointer text-white rounded-full lg:w-[40%]">Notify Me</button>
          </div>
        </div>
      </div>
      <figure>
        <img src="/assets/images/illustration-dashboard.png">
      </figure>
      <div class="flex gap-5 justify-center">
        <div class="p-2 flex justify-center text-blue cursor-pointer bg-white rounded-full hover:bg-blue group">
          <Icon name="ri:facebook-fill" class="group-hover:text-white"/>
        </div>
        <div class="p-2 flex justify-center text-blue cursor-pointer bg-white rounded-full hover:bg-blue group">
          <Icon name="mdi:twitter" class="group-hover:text-white"/>
        </div>
        <div class="p-2 flex justify-center text-blue cursor-pointer bg-white rounded-full hover:bg-blue group">
          <Icon name="iconoir:instagram" class="group-hover:text-white"/>
        </div>
      </div>
      <footer class="text-gray">
        &copy; Copyright Ping. All rights reserved.
      </footer>
    </div>
  </div>
</template>
