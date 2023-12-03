<template>
  <div class="">
    <site-navigation />

    <div class="relative">
      <section class="bg-cover bg-center bg-no-repeat bg-main rounded h-xl">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Enjoy Your Dream Vacation
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Plan and book our perfect trip with expert advice, travel tips, destination information
            and inspiration from us
          </p>
        </div>
      </section>

      <div class="flex flex-wrap items-center">
        <form class="absolute -bottom-6 right-1/4 shadow-2xl">
          <div class="flex items-center bg-white rounded-notice">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 bg-btn inline-flex items-center py-1.5 px-2 text-sm font-medium text-center rounded-btn"
              type="button"
            >
              <img src="./images/icon/location 1.svg" alt="" />
              Where are you going?
              <img src="./images/icon/arrow-down 1.svg" alt="" />
            </button>
            <button
              class="flex-shrink-0 bg-btn inline-flex items-center py-1.5 px-2 text-sm font-medium text-center rounded-btn"
            >
              <img src="./images/icon/calendar 1.svg" alt="" />
              Check in date
            </button>
            <button
              class="flex-shrink-0 bg-btn inline-flex items-center py-1.5 px-2 text-sm font-medium text-center rounded-btn"
            >
              <img src="./images/icon/calendar 1.svg" alt="" />
              Check out date
            </button>
            <button
              class="flex-shrink-0 bg-btn inline-flex items-center py-1.5 px-2 text-sm font-medium text-center rounded-btn"
            >
              <img src="./images/icon/user-square 1.svg" alt="" />
              Guests
            </button>
            <button
              class="flex-shrink-0 bg-btn inline-flex items-center py-1.5 px-2 text-sm font-medium text-center rounded-btn"
            >
              <img src="./images/icon/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg" alt="" />
              Rooms
            </button>

            <div class="w-full">
              <button
                type="submit"
                class="flex content-center items-center text-center w-btn py-1.5 px-2 ms-2 text-sm font-medium text-white bg-blue-700 rounded-btn border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div
      class="w-full flex flex-row content-center items-center bg-notice my-8 rounded-notice h-notice"
    >
      <img class="px-2" src="./images/logo/danger 1.svg" alt="" srcset="" />
      <p class="px-2">Check the latest COVID-19 restrictions before you travel. Learn more</p>
    </div>

    <h5>Enjoy your dream vacation</h5>
    <p>
      Plan and book our perfect trip with expert advice, travel tips, destination information and
      inspiration from us
    </p>
    <!-- the start 4 cards -->
    <div class="grid grid-cols-4 gap-4 gap-x-4 py-8">
      <div v-for="i in 4" :key="i">
        <img src="./images/country-cards/Australia.png" alt="" />
        <h5>Australia</h5>
        <p>2246 properties</p>
      </div>
      <!-- <div>
          <img src="./images/country-cards/Greece.png" alt="">
          <h5>Greece</h5>
          <p>2246 properties</p>
        </div>
        <div>
          <img src="./images/country-cards/Japan.png" alt="">
          <h5>Japan</h5>
          <p>2246 properties</p>
        </div>
        <div>
          <img src="./images/country-cards/NewZealand.png" alt="">
          <h5>New Zealand</h5>
          <p>2246 properties</p>
        </div> -->
    </div>
    <!-- the end 4 cards -->

    <!-- the start 3 cards -->
    <div class="pb-10">
      <h5>Get inspiration for your next trip</h5>
      <div class="grid grid-cols-3 gap-4 py-8">
        <div>
          <section class="bg-trip-1 h-trip w-trip">
            <div class="flex flex-wrap items-end">
              <h1>Sydeny’s 10 most fashionable 5 star hotels</h1>
              <p>
                Browse the fastest growing tourism sector in the heart of Australia tourism capital
                ....
              </p>
            </div>
          </section>
        </div>
        <div>
          <section class="bg-trip-2 h-trip w-trip">
            <div class="flex items-end">
              <h1>Top cities for Vegan Travellers</h1>
              <p>
                Top sites where you do not have to worry about being a vegan. Our tourist guide is
                here...
              </p>
            </div>
          </section>
        </div>
        <div>
          <section class="bg-trip-3 h-trip w-trip">
            <div class="flex items-end">
              <h1>World’s top destinations during and post covid timeline</h1>
              <p>
                Pandemic is still intact and will be here for a longer time. Here’s where your next
                destination...
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- the end 3 cards -->

    <h5 font-size="28px">Popular hotels</h5>
    <!-- the start 4 cards -->
    <div class="grid grid-cols-4 gap-4 py-8">
      <div>
        <img src="./images/hotel-cards/Rectangle 8.png" alt="" />
        <h5>Lakeside Motel Warefront</h5>
        <p>2246 properties</p>
      </div>
      <div>
        <img src="./images/hotel-cards/Rectangle 9.png" alt="" />
        <h5>Recce Graham resort</h5>
        <p>1278 properties</p>
      </div>
      <div>
        <img src="./images/hotel-cards/Rectangle 10.png" alt="" />
        <h5>Fireside Dinners</h5>
        <p>480 properties</p>
      </div>
      <div>
        <img src="./images/hotel-cards/Rectangle 11.png" alt="" />
        <h5>Oculous Inn Stay</h5>
        <p>320 properties</p>
      </div>
    </div>
    <!-- the end 4 cards -->
    <section class="grid grid-cols-1 gap-0 grid-rows-6 grid-flow-col bg-app h-app rounded-notice">
      <div class="grid grid-cols-3 gap-4 w-text-app pl-10">
        <h1 class="text-white col-span-2">
          Download the mobile application for bonus coupons and travel codes
        </h1>
        <button
          type="submit"
          class="col-auto inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download mobile app
        </button>
      </div>
    </section>

    <!-- start the footer aria -->
    <footer>
      <h1>Explore the world with My Dream place</h1>
      <p>Discover new places and experiences</p>
      <div></div>
    </footer>
    <!-- end the footer aria -->
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
import SearchResults from './components/SearchResults.vue'
</script>
<style lang="scss" scoped>
</style>