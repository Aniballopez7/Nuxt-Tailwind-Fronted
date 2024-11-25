<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="font-[Outfit] bg-Slate-300 min-h-dvh flex justify-center items-center">
    <div class="bg-white max-w-[280px] p-3 flex flex-col gap-5 rounded-xl">
      <div>
        <img src="/assets/css/images/image-qr-code.png" class="rounded-lg">
      </div>
      <div class="space-y-5 text-center px-3 pb-4">
        <h2 class="text-Slate-900 font-bold text-lg leading-tight">Improve your front-end skills by building projects</h2>
        <p class="text-Slate-500"> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  </div>
</template>
