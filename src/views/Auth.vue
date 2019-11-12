<template>
  <section class="login">
    <div class="text-center">
      <section>
        <img alt="FUA PWA" class="logo" src="@/assets/logo/logo-2x.png">
        <h1 class="title">{{ $t('auth.welcome') }}</h1>
      </section>
      <section class="mt-30">
        <button class="login-btn" @click="loginGmail()">{{ $t('auth.google') }}</button>
        <button class="login-btn" @click="loginFacebook()">{{ $t('auth.facebook') }}</button>
        <router-link tag="button" :to="{ path: '/feature' }" class="login-btn"> {{ $t('auth.guest') }}</router-link>
      </section>
    </div>
  </section>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import '../helpers/services/vueprototype';
  import { User } from '../helpers/models/User';

  @Component({
  })
  export default class Auth extends Vue {

    private loginGmail() {
      this.$firebase.createProviderGmail().then((res: any) => {
        const user = new User(res);
        this.$http.post(['users', 'register', res.additionalUserInfo.profile.id], user).then((resApi: any) => {
          localStorage.setItem('ACCESS_TOKEN', res.credential.accessToken);
          localStorage.setItem('ID_TOKEN', res.credential.idToken);
          this.$store.dispatch('showMe');
          this.$router.push('/feature');
        });
      });
    }

    private loginFacebook() {
      this.$firebase.createProviderFacebook();
    }
  }
</script>
