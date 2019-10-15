<template>
  <section class="login">
    <div class="text-center">
      <section>
        <img alt="FUA PWA" class="logo" src="@/assets/logo/logo-2x.png">
        <h1 class="title">{{ $t('auth.welcome') }}</h1>
      </section>
      <section class="mt-30">
        <router-link tag="button" :to="{ path: '/' }" class="login-btn" disabled> {{ $t('auth.google') }}</router-link>
        <router-link tag="button" :to="{ path: '/feature' }" class="login-btn"> {{ $t('auth.guest') }}</router-link>
      </section>
    </div>
  </section>
</template>
