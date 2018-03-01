<template>
  <section>
    <h1>Jollywise App</h1>
    <form class="form form--questions" v-bind:class="[(formState === 'step1') ? 'show' : 'hidden']">
      <div class="form-group">
        <label for="question1">Question 1: What is you name?</label>
        <section class="container">
          <input v-model="form.q1" type="text" class="form-control" id="question1" placeholder="Could be Sir Launcelot of Camelot..">
        </section>
      </div>
      <div class="form-group">
        <label for="question2">Question 2: What is your quest?</label>
        <section class="container">
          <input v-model="form.q2" type="text" class="form-control" id="question2" placeholder="Could be the Holy Grail...">
        </section>
      </div>
      <div class="form-group">
        <label for="question3">Question 3: What is your favorite colour?</label>
        <section class="container">
          <input v-model="form.q3" type="text" class="form-control" id="question3" placeholder="Could be blue... or yellow..">
        </section>
      </div>
      <div class="form-group">
        <label for="question4">Question 4: What is the capital of Assyria?</label>
        <section class="container">
          <input v-model="form.q4" type="text" class="form-control" id="question4" placeholder="I don't know that...">
        </section>
      </div>
      <div class="form-group">
        <label for="question5">Question 5: What is the air-speed velocity of an unladen swallow?</label>
        <section class="container">
          <input v-model="form.q5" type="text" class="form-control" id="question5" placeholder="What do you mean? An African or European swallow?...">
        </section>
      </div>
      <button v-on:click.self.prevent="fetchAPI()" type="submit" class="btn btn-primary">Next</button>
    </form>

    <form class="form form--sumbit" v-bind:class="[(formState === 'step2') ? 'show' : 'hidden']">
      <div class="form-group">
        <label for="username">Username</label>
        <section class="container">
          <input v-model="form.username" type="text" class="form-control" id="username" placeholder="username">
        </section>
      </div>
      <div class="form-group">
        <label for="question2">Your Email Address</label>
        <section class="container">
          <input v-model="form.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        </section>
      </div>
      <button v-on:click.self.prevent="changeFormState()" type="submit" class="btn btn-primary">Back</button>
      <button v-on:click.self.prevent="fetchAPI()" type="submit" class="btn btn-primary">Submit</button>
    </form>

    <aside class="check-data">
      {{data}}
      {{form}}
    </aside>

  </section>
</template>

<script>
// Import the baseURL from https-config
import {HTTPS} from './config/https-config.js'

export default {
  name: 'Questions',
  data() {
    return {
      formState: "step1",
      data: [],
      errors: [],
      form : {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    changeFormState: function () {
      (this.formState == 'step1') ? this.formState = 'step2' : this.formState = 'step1'
    },

    // Doing a get API for testing purposes
    fetchAPI: function () {
      HTTPS.get('daily?APPID=4f5a6fa2ae1f25030eda6cff7c97de4a&q=brighton&cnt=16')
        .then(response => {
          this.data = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
aside {
  background-color: white;
  position: fixed;
  top: 20px;
  right: 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  width: 200px;
  padding: 15px;
}
h1 {
  margin-bottom: 80px;
}

.form {
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;

  &.hidden {
    opacity: 0;
    height: 0;
    visibility: hidden;
  }

  &.show {
    opacity: 1;
    height: auto;
    visibility: visible;
  }
}

label,
.container {
  padding: {
    right: 15px;
    left: 15px;
  }
  text-align: center;
  margin{
    right: auto;
    left: auto;
  }
  max-width: 600px;
  width: 100%;
}

.field {
  margin-bottom: 10px;
}

input {
  // TODO: setup autoprefixer
  border-style: none;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);

  padding: {
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 20px;
  }

  min-height: 30px;
  width: 100%;

  &::placeholder {
    color: hsl(0, 0%, 80%);
  }
}

</style>
