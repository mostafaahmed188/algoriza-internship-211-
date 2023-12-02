<template>
  <nav class="bg-white">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../images/logo/bxs-plane-alt 1.svg" class="h-4" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">my Dream Place</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li>
            <a
              href="#"
              class="text-primary tracking-tightest block py-2 px-3 md:p-0"
              aria-current="page"
              >Home</a
            >
          </li>

          <li>
            <a href="#" class="text-primary tracking-tightest block py-2 px-3 md:p-0">Discover</a>
          </li>
          <li>
            <a href="#" class="text-primary tracking-tightest block py-2 px-3 md:p-0">Activities</a>
          </li>
          <li>
            <a href="#" class="text-primary tracking-tightest block py-2 px-3 md:p-0">About</a>
          </li>
          <li>
            <a href="#" class="text-primary tracking-tightest block py-2 px-3 md:p-0">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>