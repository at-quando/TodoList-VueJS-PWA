<template>
  <div id="app" class="todos">
    <div id="install-banner" v-if="deferredPrompt">
      <p>Do you want to install Foo App?</p>
      <button @click="promptInstall()">Opt for!</button>
    </div>
    <div v-if="!loading">
      <router-view/>
    </div>
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

    get loading() {
      return this.$store.state.loading;
    }

    public created() {
      this.$on('canInstall', (event: BeforeInstallPromptEvent) => {
        // Prevent Chrome >=67 from automatically showing the prompt:
        event.preventDefault();
        // Stash the event so it can be triggered later:
        this.deferredPrompt = event;
      });
      this.$store.dispatch('showMe');
    }
  }
</script>
