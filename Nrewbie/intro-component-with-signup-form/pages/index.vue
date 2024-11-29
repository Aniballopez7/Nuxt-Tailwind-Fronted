<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="bg-red text-white font-[Poppins]">
    <div class="flex p-5 py-20 justify-center items-center bg-mobile bg-cover min-h-dvh lg:bg-desktop">
      <div class="w-full grid justify-center items-center gap-5 lg:grid-cols-2 lg:w-[75%] ">
        <div class="mx-auto w-[90%] flex flex-col text-center lg:space-y-10 lg:text-start">
          <h1 class="text-2xl font-bold lg:text-5xl">Learn to code by watching others</h1>
          <p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable. </p>
        </div>
        <div class="space-y-7">
          <div class="bg-blue text-center p-5 rounded-lg shadow-[0px_5px_0px_0px] shadow-dark-blue/50"> <span
              class="font-bold">Try it free 7 days</span> then $20/mo. thereafter</div>
          <form
            class="bg-white flex flex-col gap-5 p-5 rounded-lg shadow-[0px_5px_0px_0px] shadow-dark-blue/50 lg:p-10">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button type="submit" class="btn"> Claim your free trial </button>
            <p class="text-xs text-grayish-blue text-center">By clicking the button, you are agreeing to our <span
                class="text-red"> Terms and Services</span> </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
