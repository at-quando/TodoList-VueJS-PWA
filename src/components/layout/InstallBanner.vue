<template>
 <div class="banner" v-if="deferredPrompt">
   <p>Do you want to install Foo App?</p>
   <button @click="promptInstall()">Opt for!</button>
 </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import { BeforeInstallPromptEvent } from 'vue-pwa-install';

 @Component({})
 export default class InstallBanner extends Vue {
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