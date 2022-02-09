<template>
  <div id="app">
    <Header subtitle="Create account"/>

<!--    <script>-->
<!--      function validateForm() {-->
<!--        let x = document.forms["myForm"]["fullName"].value;-->
<!--        if (x === "") {-->
<!--          alert("Name must be filled out");-->
<!--          return false;-->
<!--        }-->
<!--        let z = document.forms["myForm"]["email"].value;-->
<!--        if (z === "") {-->
<!--          alert("Email must be filled out");-->
<!--          return false;-->
<!--        }-->
<!--        let q = document.forms["myForm"]["password"].value;-->

<!--        if (q === "") {-->
<!--          alert("Password must be filled out");-->
<!--          return false;-->
<!--        } else if (q.length<5){-->
<!--          alert("Password smaller than 5");-->
<!--          return false;-->
<!--        }-->
<!--        else if (q.length>20){-->
<!--          alert("Password longer than 20");-->
<!--          return false;-->
<!--        }-->
<!--      }-->

<!--    </script>-->

    <b-form @submit="onSubmit">
      <form name="myForm">
      <b-form-group label="Fullname:" label-for="fullName">
        <b-form-input id="fullName" v-model="form.fullName" placeholder="Enter fullname" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Username:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      <br>
      <b-button type="submit" variant="primary" onclick="return validateForm()">Submit</b-button>
      </form>
    </b-form>

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  components: {
    Header
  },

  data() {
    return {
      form: {
        fullName: '',
        email: '',
        username: '',
        password: '',
        userType: "USER",
        isBanned: "false"
      }
    }
  },

  methods: {
    ...mapActions([
      'register'
    ]),

    onSubmit(e) {
      e.preventDefault();
      this.register(this.form);
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style scoped>

</style>
