<template>
  <div id="app">
       <!-- <img src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x.png" alt="AWS Amplify"> -->
    <amplify-authenticator>
      <div class="welcome">
        <h1>Hey, {{ user.username }}!</h1>
        <amplify-sign-out></amplify-sign-out>
      </div>
      <div>
        <form v-on:submit.prevent>
          <button @click='getTodos' class="button">GET /todos</button>
        </form>
      </div>
    </amplify-authenticator>
  </div>
</template>

<script>
import { AuthState, onAuthUIStatChange } from '@aws-amplify/ui-components';

export default {
  name: 'App',
  data() {
    return {
      user: { }
    }
  },
  created() {
    // Authentication state management
    onAuthUIStatChange((state, user) => {
      // set current user and load data after login
      if (state === AuthState.SignedIn) {
        this.user = user;
        console.log(user);
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
