<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="AAA"/>
    <h1>Your flight reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">FlightDestination: {{ flightReservation.flightDestination }}</li>
      <li class="list-group-item">Departure: {{ flightReservation.departure }}</li>
      <li class="list-group-item">Arrival: {{ flightReservation.arrival }}</li>
      <li class="list-group-item">Price: {{ flightReservation.price }}</li>
      <li class="list-group-item">Airline: {{ flightReservation.airline }}</li>
      <li class="list-group-item">Number of seats: {{ flightReservation.numberOfSeats }}</li>
      <li class="list-group-item">Type of airplane: {{ flightReservation.typeOfAirplane }}</li>
    </ul>
    <b-button type="submit" variant="primary" onclick="return validateForm()">Remove Reservation</b-button>
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
    flightReservation: Object
  },

  computed: {
    ...mapState([
      'token'
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
      'setToken'
    ]),

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