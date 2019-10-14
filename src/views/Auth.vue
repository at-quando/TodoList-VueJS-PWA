<template>
  <section class="login">
    <div class="text-center">
      <section>
        <img alt="FUA PWA" class="logo" src="@/assets/logo/logo-2x.png">
        <h1 class="title">Welcome to FUA PWA</h1>
      </section>
      <section class="mt-30">
        <router-link tag="button" :to="{ path: '/' }" class="login-btn" disabled>Sign up with Google</router-link>
        <router-link tag="button" :to="{ path: '/feature' }" class="login-btn">Sign up with Guest</router-link>
      </section>
    </div>
  </section>
</template>
