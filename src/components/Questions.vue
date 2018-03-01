<template>
  <section>
    <h1>Answer me these questions three ... no wait five</h1>
    <form class="form--questions">
      <div class="form-group">
        <label for="question1">Question 1: What is you name?</label>
        <section class="container">
          <input v-model="form.q1" type="text" class="form-control" id="question1" placeholder="Could be Sir Launcelot of Camelot..">
        </section>
      </div>
      <div class="form-group">
        <label for="question2">Question 2: What is your quest?</label>
        <section class="container">
          <input v-model="form.q2" type="text" class="form-control" id="question1" placeholder="Could be the Holy Grail...">
        </section>
      </div>
      <div class="form-group">
        <label for="question3">Question 3: What is your favorite colour?</label>
        <section class="container">
          <input v-model="form.q3" type="text" class="form-control" id="question1" placeholder="Could be blue... or yellow..">
        </section>
      </div>
      <div class="form-group">
        <label for="question4">Question 4: What is the capital of Assyria?</label>
        <section class="container">
          <input v-model="form.q4" type="text" class="form-control" id="question1" placeholder="I don't know that...">
        </section>
      </div>
      <div class="form-group">
        <label for="question5">Question 5: What is the air-speed velocity of an unladen swallow?</label>
        <section class="container">
          <input v-model="form.q5" type="text" class="form-control" id="question1" placeholder="What do you mean? An African or European swallow?...">
        </section>
      </div>
      <button v-on:click="fetchAPI($event)" type="submit" class="btn btn-primary">Submit</button>
    </form>

    {{ data }}
  </section>
</template>

<script>
// Import the baseURL from https-config
import {HTTPS} from './config/https-config.js'

export default {
  name: 'Questions',
  data() {
    return {
      data: [],
      errors: [],
      form : {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    fetchAPI: function (event) {
      if (event) event.preventDefault()
      HTTPS.get('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4f5a6fa2ae1f25030eda6cff7c97de4a&q=brighton&cnt=16')
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
h1 {
  margin-bottom: 80px;
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
}

</style>
