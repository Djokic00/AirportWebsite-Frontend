<template>
  <div id="app"  v-if="this.token">
    <Header subtitle=""/>
    <h1>Your flight reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">Name of the Company: {{ insuranceReservation.nameOfCompany }}</li>
      <li class="list-group-item">Destination Country: {{ insuranceReservation.destinationCountry }}</li>
      <li class="list-group-item">Type of Insurance: {{ insuranceReservation.typeOfInsurance }}</li>
      <li class="list-group-item">Premium: {{ insuranceReservation.premium }}</li>
      <li class="list-group-item">Level of Cover: {{ insuranceReservation.levelOfCover }}</li>
    </ul>
    <b-button variant="primary" v-on:click="goToInsurance()">Remove Reservation</b-button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import {mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservations',

  components: {
    Header
  },

  props: {
    insuranceReservation: Object
  },

  computed: {
    ...mapState([
      'token',
      'insuranceInformation'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapMutations([
      'removeToken',
      'setToken'
    ]),

    goToInsurance() {
      this.$router.push({ name: 'Insurance' });
    },

    logout() {
      this.removeToken();
    }
  },

  sockets: {
    error(err) {
      alert(err);
    }
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
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>