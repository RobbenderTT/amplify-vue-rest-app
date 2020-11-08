<template>
<b-container class="">
  <div id="">
    <!-- <img src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x.png" alt="AWS Amplify"> -->
    <amplify-authenticator>
      <div class="welcome">
        <h1>Hey, {{ user.username }}!</h1>
        <div>
          <amplify-sign-out></amplify-sign-out>
        </div>
      </div>
      <div class="mt-5">
        <form v-on:submit.prevent>
          <b-button-group class="">
            <b-button @click="getTodos" class="button">GET /todos</b-button>
            <b-button @click="getTodo" class="button">GET /todos/:id</b-button>
            <b-button @click="addTodo" class="button">POST /todos</b-button>
            <b-button @click="updateTodo" class="button">PUT /todos</b-button>
            <b-button @click="deleteTodo" class="button"
              >DELETE /todos/:id</b-button
            >
          </b-button-group>
        </form>
      </div>
    </amplify-authenticator>
  </div>
  </b-container>
</template>

<script>
import { AuthState, onAuthUIStatChange } from "@aws-amplify/ui-components";
import { API } from "aws-amplify";

export default {
  name: "App",
  data() {
    return {
      user: {},
    };
  },
  created() {
    // Authentication state management
    onAuthUIStatChange((state, user) => {
      // set current user and load data after login
      if (state === AuthState.SignedIn) {
        this.user = user;
        console.log(user);
      }
    });
  },
  methods: {
    getTodos: function() {
      console.log("getTodos");
      API.get("todosApi", "/todos", {})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTodo: function() {

    },
    addTodo: function() {
      console.log("getTodos");
      // can use put also
      API.post("todosApi", "/todos", {
        body: {
          text: "todo-1"
        }
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateTodo: function() {
    },
    deleteTodo: function() {
    },
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
