<template>
  <div class="bg-white w-full h-screen flex justify-center items-center font-[Nunito]">
    <div class="max-w-[600px] grid grid-cols-1 h-fit lg:grid-cols-2">
      <div class="p-10 bg-gradient flex flex-col gap-5 items-center rounded-b-3xl lg:rounded-3xl">
        <h2 class="text-Light-lavender text-xl font-bold">Your result</h2>
        <div class="circle-gradient flex flex-col justify-center items-center w-[168px] h-fit p-12 gap-2 font-semibold">
          <h2 class="text-white text-5xl">76</h2>
          <span class="text-Light-lavender">of 100</span>
        </div>
        <p class="text-3xl font-bold text-white">Great</p>
        <p class="text-center text-Light-lavender text-lg font-semibold lg:text-sm">You scored higher than 65% of the
          people who have taken these tests.</p>
      </div>
      <div class="p-10 flex flex-col justify-between shadow-2xl rounded-r-3xl gap-5">
        <h2 class="text-Dark-gray-blue font-bold">Summary</h2>
        <div class="summary red">
          <span class="text-[#db514e]">Reaction</span>
          <div class="font-bold">
            <span class="text-Dark-gray-blue">80 </span><span class="text-[#949199]">/ 100</span>
          </div>
        </div>
        <div class="summary yellow">
          <span class="text-[#FAB937]"> Memory</span>
          <div class="font-bold">
            <span class="text-Dark-gray-blue">92 </span>
            <span class="text-[#949199]">/ 100</span>
          </div>
        </div>
        <div class="summary green">
          <span class="text-[#20A583]"> Verbal</span>
          <div class="font-bold">
            <span class="text-Dark-gray-blue">61 </span><span class="text-[#949199]">/ 100</span>
          </div>
        </div>
        <div class="summary blue">
          <span class="text-[#2A35B7]"> Visual</span>
          <div class="font-bold">
            <span class="text-Dark-gray-blue">72 </span><span class="text-[#949199]">/ 100</span>
          </div>
        </div>
        <button class="w-full rounded-full p-3 bg-Dark-gray-blue text-white">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>