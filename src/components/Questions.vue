<template>
  <section>
    <h1>Jollywise App</h1>
    <form class="form form--questions" :class="[(formState === 'step1') ? 'form--show' : 'form--hidden']">

      <div class="form-group" v-for="(value, key, index) in form.step1">
        <label :for="'question' + (index + 1)">Question {{index + 1}} : {{value.question}}</label>
        <section class="container">
          <input :id="'question' + (index + 1)" v-model="value.answer" type="text" class="form-control" placeholder="Enter your answer..">
        </section>
      </div>

      <button v-on:click.self.prevent="changeFormState()" type="submit" class="btn btn-primary">Next</button>

    </form>

    <form class="form form--sumbit" :class="[(formState === 'step2') ? 'form--show' : 'form--hidden']">
      <aside>
        {{form.step1}}
      </aside>

      <div class="form-group">
        <label for="username">Username</label>
        <section class="container">
          <input v-model="form.step2.username" type="text" class="form-control" id="username" placeholder="username">
        </section>
      </div>
      <div class="form-group">
        <label for="question2">Your Email Address</label>
        <section class="container">
          <input v-model="form.step2.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        </section>
      </div>
      <button v-on:click.self.prevent="changeFormState()" type="submit" class="btn btn-primary">Back</button>
      <button v-on:click.self.prevent="submitResults()" type="submit" class="btn btn-primary">Submit</button>
    </form>

  </section>
</template>

<script>
// Import the baseURL from https-config
import {HTTPS} from './config/https-config.js'

export default {
  name: 'Questions',
  data() {
    return {
      formState: 'step1',
      data: [],
      errors: [],
      form: {
        step1: {
          q1: {
            question: 'What is you name?',
            answer: ''
          },
          q2: {
            question: 'What is your quest?',
            answer: ''
          },
          q3: {
            question: 'What is your favorite colour?',
            answer: ''
          },
          q4: {
            question: 'What is the capital of Assyria?',
            answer: ''
          },
          q5: {
            question: 'What is the air-speed velocity of an unladen swallow?',
            answer: ''
          },
        },
        step2: {
          username: '',
          email: ''
        }
      },
      json: {
        "social_type": "none",
        "access_token": null,
        "access_token_secret": null,
        "device_id": null,
        "email": "tester@jollywise.co.uk",
        "first_name": "jon",
        "last_name": "heffernan",
        "dob": "",
        "entrant_data": "{ }",
        "entrant_private_data": "{ }",
        "data": "{ }",
        "private_data": "{ }",
        "searchable": "",
        "_xss_cookie": ""
      }
    }
  },
  methods: {
    changeFormState: function () {
      (this.formState == 'step1') ? this.formState = 'step2' : this.formState = 'step1'
    },

    submitResults: function () {
      this.submitted = 'The results have been sent'
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
  &--hidden {
    opacity: 0;
    height: 0;
    visibility: hidden;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  &--show {
    opacity: 1;
    height: auto;
    visibility: visible;
    -webkit-transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
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
