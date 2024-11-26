<template>
  <!-- <div class="flex flex-col w-fit min-h-dvh justify-start p-10">
      <NuxtLink to="/" class="bg-Very-Dark-Grayish-Blue px-6 py-2.5 w-fit h-fit selft-end">Boton</NuxtLink>
    </div> -->
    <form class="bg-black h-screen flex flex-col  items-center justify-center text-white gap-10">
      <label>Enter store using password:</label>
      <div class="flex gap-5">
        <input type="text" placeholder="Your password" v-model="name" class="bg-transparent outline-none border-2 px-5 border-[#ccc]"/>
        {{ name }}
        <button @click="handleSubmit" class="bg-[#3b3838]/10 px-8 py-2.5">Enviar</button>
      </div>
      <a href="#">Are you the store owner?</a>
    </form>
</template>

<script setup>
  import { ref } from 'vue';
  const name = ref('');

</script>

<style lang="scss" scoped></style>