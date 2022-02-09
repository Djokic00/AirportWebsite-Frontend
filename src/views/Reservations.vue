<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="AAA"/>
    <p>Your flight reservation</p>
    <ul>
      <li>FlightDestination: {{ reservation.flightDestination }}</li>
      <li>Departure: {{ reservation.departure }}</li>
      <li>Arrival: {{ reservation.arrival }}</li>
      <li>Price: {{ reservation.price }}</li>
      <li>Airline: {{ reservation.airline }}</li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';
import Flight from "@/views/Flight";

export default {
  name: 'Reservations',

  components: {
    Header
  },

  data() {
    return {
      //subtitle: 'You have booked your ticked!',
      reservation: Flight
    }
  },

  // props: {
  //   reservation: Object
  // },

  computed: {
    ...mapState([
      'token'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
    // this.getItem(this.$route.params.id).then( res => {
    //   this.reservation = res;
    //   this.subtitle = "You have booked your ticked!";
    // });
  },

  methods: {
    ...mapActions([
      // 'fetchDepartments'
      'getItem'
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