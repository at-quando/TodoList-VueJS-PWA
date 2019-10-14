<template>
  <div id="app" class="todos">
    <section class="login">
      <div class="text-center">
        <section>
          <img alt="FUA PWA" class="logo" src="@/assets/logo/logo-2x.png">
          <h1 class="title">Welcome to FUA PWA</h1>
        </section>
        <section class="mt-30">
          <button class="login-btn">Sign up with Google</button>
          <button class="login-btn" disabled="">Sign up with Guest</button>
        </section>
      </div>
    </section>
    <div id="install-banner" v-if="deferredPrompt">
      <p>Do you want to install Foo App?</p>
      <button @click="promptInstall()">Opt for!</button>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { BeforeInstallPromptEvent } from 'vue-pwa-install';

  @Component
  export default class App extends Vue {
    public deferredPrompt: BeforeInstallPromptEvent | any;

    public promptInstall() {
      // Show the prompt:
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt:
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          // User accepted the install prompt
        }
        this.deferredPrompt = null;
      });
    }

    public created() {
      this.$on('canInstall', (event: BeforeInstallPromptEvent) => {
        // Prevent Chrome >=67 from automatically showing the prompt:
        event.preventDefault();
        // Stash the event so it can be triggered later:
        this.deferredPrompt = event;
      });
    }
  }
</script>
