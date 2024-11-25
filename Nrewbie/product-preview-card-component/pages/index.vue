<template>
  <div class="bg-cream min-h-dvh flex justify-center items-center p-5">
    <div class="bg-white max-w-[700px] grid grid-cols-1 font-[Montserrat] lg:grid-cols-2 lg:w-[700px] rounded-3xl">
      <div class="bg-mobile bg-cover bg-center w-full h-[300px] rounded-t-xl lg:h-full lg:rounded-r-none lg:rounded-l-xl lg:bg-desktop"></div>
      <div class="bg-white p-6 flex flex-col gap-4 lg:rounded-r-xl lg:p-10 lg:gap-5">
        <p class="uppercase tracking-[0.5em] text-lg text-gray-blue font-semibold lg:text-sm">Perfume</p>
        <h1 class="text-dark-blue font-bold font-[Fraunces] text-3xl ">Gabrielle Essence Eau De Parfum</h1>
        <p class="text-gray-blue font-medium text-lg"> A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.</p>
        <div class="flex gap-5 items-center">
          <span class="font-bold text-cyan text-4xl font-[Fraunces]">$149.99</span>
          <span class="line-through text-gray-blue">$169.99</span>
        </div>
        <button class="btn">
          <Icon name="proicons:cart" width="24" height="24"/>Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>