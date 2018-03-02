<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-12">
        <form id="step1" class="form form--questions" :class="[(formState === 'step1') ? 'form--show' : 'form--hidden']">

          <div class="form-group" v-for="(value, key, index) in form.step1">
            <label :for="'question' + (index + 1)">Question {{index + 1}} : {{value.question}}</label>
            <section class="container">
              <input :id="'question' + (index + 1)" v-model="value.answer" type="text" class="form-control" placeholder="Enter your answer...">
            </section>
          </div>

          <router-link class="btn btn-primary" :to="{ path: 'results' }" tag="button" type="submit">Next</router-link>

        </form>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Questions',
  data() {
    return {
      formState: 'step1',
      postData: [],
      postErrors: [],
      validateErrors: [],
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
        }
      }
    }
  },

  methods: {
    changeFormState: function () {
      // TODO: make this dynamic by checking against event.srcElement.form.id
      (this.formState == 'step1') ? this.formState = 'step2' : this.formState = 'step1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
aside {
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);

  margin: {
    top: 20px;
    right: auto;
    bottom: 20px;
    left: auto;
  }
  padding: 15px;


  text-align: center;
  max-width: 600px;

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin-bottom: 10px;
    }
  }
}

.form {
  &--hidden {
    opacity: 0;
    height: 0;
    overflow: hidden;
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

.container {
  max-width: 720px;
}

label {
  padding: {
    right: 15px;
    left: 15px;
  }
  text-align: center;
  margin{
    right: auto;
    left: auto;
  }
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

.validate-errors {
  list-style: none;
  margin: {
    top: 20px;
    bottom: 20px;
  }
  padding: 0;
}

</style>
