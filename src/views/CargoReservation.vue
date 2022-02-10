<template>
  <div id="app"  v-if="this.token">
    <Header subtitle=""/>
    <h1>Your flight reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">Product Name: {{ cargoReservation.productName }}</li>
      <li class="list-group-item">Departure: {{ cargoReservation.departure }}</li>
      <li class="list-group-item">Price per kg: {{ cargoReservation.pricePerKg }}</li>
      <li class="list-group-item">Hazardous: {{ cargoReservation.hazardous }}</li>
      <li class="list-group-item">Delivery Destination: {{ cargoReservation.deliveryDestination }}</li>
    </ul>
    <b-button variant="primary" v-on:click="goToCargo()">Remove Reservation</b-button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservations',

  components: {
    Header
  },

  props: {
    cargoReservation: Object
  },

  computed: {
    ...mapState([
      'token',
      'flightInformation'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapActions([
      // 'fetchDepartments'
    ]),

    ...mapMutations([
      'removeToken',
      'setToken',
      'setFlightInformation'
    ]),

    goToCargo() {
      // this.setFlightInformation("");
      this.$router.push({ name: 'Cargo' });
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