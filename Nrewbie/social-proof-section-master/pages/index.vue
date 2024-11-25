<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="font-league-spartan w-full min-h-dvh flex justify-center items-center p-10">
    <div class="lg:w-4/5 lg:">
      <div class="grid justify-center items-center gap-10 mb-10 lg:grid-cols-2 lg:justify-between">
        <div class="flex flex-col text-center gap-5 lg:text-left">
          <h2 class="text-primary-magenta font-bold text-5xl tracking-tight lg:w-[55%]">10,000+ of our users love our
            products.</h2>
          <p class="text-lg font-medium text-neutral-dark-magenta lg:text-base lg:w-[70%] "> We only provide great
            products combined with excellent customer service.
            See what our satisfied customers are saying about our services.</p>
        </div>
        <div class="flex flex-col justify-evenly gap-5">
          <div class="div-start">
            <figure>
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
            </figure>
            <p>Rated 5 Stars in Reviews</p>
          </div>
          <div class="div-start lg:self-center">
            <figure>
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
            </figure>
            <p>Rated 5 Stars in Reviews</p>
          </div>
          <div class="div-start lg:self-end">
            <figure>
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
              <img src="/assets/images/icon-star.svg">
            </figure>
            <p>Rated 5 Stars in BestTech</p>
          </div>
        </div>
      </div>
      <div class="grid gap-8 text-white lg:grid-cols-3 lg:h-[270px]">
        <div class="div-person">
          <div class="profile">
            <figure>
              <img src="/assets/images/image-colton.jpg">
            </figure>
            <div>
              <h3>Colton Smith</h3>
              <span>Verified Buyer</span>
            </div>
          </div>
          <p> "We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent!"</p>
        </div>
        <div class="div-person self-center">
          <div class="profile">
            <figure>
              <img src="/assets/images/image-irene.jpg">
            </figure>
            <div>
              <h3> Irene Roberts</h3>
              <span>Verified Buyer</span>
            </div>
          </div>
          <p> "Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."</p>
        </div>
        <div class="div-person self-end">
          <div class="profile">
            <figure>
              <img src="/assets/images/image-anne.jpg">
            </figure>
            <div>
              <h3> Anne Wallace </h3>
              <span> Verified Buyer</span>
            </div>
          </div>
          <p> "Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"</p>
        </div>
      </div>
    </div>
  </div>
</template>
