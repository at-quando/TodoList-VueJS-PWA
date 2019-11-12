<template>
  <section class="login">
    <div class="main-login text-center">
      <section>
        <img alt="FUA PWA" class="logo" src="@/assets/logo/logo.png">
        <!-- <h1 class="title">{{ $t('auth.welcome') }}</h1> -->
      </section>
      <section class="mt-30">
        <button class="login-btn" @click="loginGmail()">{{ $t('auth.google') }}</button>
        <button class="login-btn" @click="loginFacebook()">{{ $t('auth.facebook') }}</button>
        <input type="number" v-model="phNo" placeholder="Phone Number"/>
        <div id="recaptcha-container"></div>
        <input type="number" v-model="otp" placeholder="OTP"/>
        <button @click="verifyOtp()">Verify</button><br>
        <button @click="resendOtp()">Resend OTP</button>
        <!-- <router-link tag="button" :to="{ path: '/feature' }" class="login-btn"> {{ $t('auth.guest') }}</router-link> -->
      </section>
    </div>
  </section>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import '../helpers/services/vueprototype';
  import { User } from '../helpers/models/User';

  declare global {
    interface Window { recaptchaVerifier: any; confirmationResult: any; }
}

  @Component({
  })
  export default class Auth extends Vue {

    windowRef: any;
    appVerifier: any;
    otp: any;
    phNo: any;

    private loginGmail() {
      this.$firebase.createProviderGmail().then((res: any) => {
        const user = new User(res);
        this.registerUser(res, user);
      });
    }

    private registerUser(res: any, user: any) {
      this.$http.post(['users', 'register', res.additionalUserInfo.profile.id], user).then((resApi: any) => {
        localStorage.setItem('ACCESS_TOKEN', res.credential.accessToken);
        localStorage.setItem('ID_TOKEN', res.credential.idToken);
        this.$store.dispatch('showMe');
        this.$router.push('/feature');
      });
    }

    private loginFacebook() {
      this.$firebase.createProviderFacebook().then((res: any) => {
        const result = res;
        result.additionalUserInfo.profile.picture = res.additionalUserInfo.profile.picture.data.url;
        const user = new User(result);
        this.registerUser(result, user);
        // this.$http.post(['users', 'register', res.additionalUserInfo.profile.id], user).then((resApi: any) => {
        //   localStorage.setItem('ACCESS_TOKEN', res.credential.accessToken);
        //   localStorage.setItem('ID_TOKEN', res.credential.idToken);
        //   this.$store.dispatch('showMe');
        //   this.$router.push('/feature');
        // });
      });;
    }

    mounted() {
      this.initReCaptcha();
    }
    verifyOtp(){
      //
      let vm = this
      let code = this.otp
      //
      window.confirmationResult.confirm(code).then( (result: any) => {
        // User signed in successfully.
        var user = result.user;
        // ...
        //route to set password !
        vm.$router.push({path:'/setPassword'})
      }).catch( (error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    };

    resendOtp(){
      if(this.phNo.length > 11 || this.phNo.length < 8){
        alert('Invalid Phone Number Format !');
      } else {
        let countryCode = '+84';
        let phoneNumber = countryCode + this.phNo;
        let appVerifier = this.appVerifier;
        this.$firebase.firebaseOpt.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then( (confirmationResult: any) => {
            window.confirmationResult = confirmationResult;
            alert('SMS sent')
          }).catch( (error: any) => {
          alert('Error ! SMS not sent')
        });
      }
    };

    initReCaptcha() {
        setTimeout(()=>{
          let vm = this
          window.recaptchaVerifier = new this.$firebase.firebaseOpt.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response: any) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          });
          //
          this.appVerifier =  window.recaptchaVerifier
        },1000)
      }
  }
</script>
