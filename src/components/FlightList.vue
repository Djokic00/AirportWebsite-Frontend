<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="flightsTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="flightsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToReservation()">Book a flight</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "FlightList",

  data() {
    return {
      fields: ['flightDestination', 'departure', 'arrival', 'price', 'airline', 'numberOfSeats', 'typeOfAirplane'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },

  computed: {
    ...mapState([
      'flights',
      'token',
      'flightInformation'
    ]),
    flightsTable: function () {
      return this.flights;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setFlightInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setFlightInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setFlightInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
        let flightReservation = this.flightInformation
        this.$router.push({ name: 'FlightReservation', params: { flightReservation } });
      }
      else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>