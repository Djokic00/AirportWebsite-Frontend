<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="flightsTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

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
    <b-button v-on:click="goToReservation()" >Reserve</b-button>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "FlightList",

  data() {
    return {
      fields: ['flightDestination', 'departure', 'arrival', 'price', 'airline', 'numberOfSeats', 'typeOfAirplane'],
      items: [],
      currentPage: 1,
      perPage: 10,
    }
  },

  computed: {
    ...mapState([
      'flights',
      'token'
    ]),
    flightsTable: function () {
      return this.flights;
      // .filter(book => book.libraryId == this.$route.params.id); //mora da bude == umesto ===, jer inace nece da ih nadje kada se uradi drugi put
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    // rowClicked(record) {
    //   console.log(record)
    // },
    goToReservation(record){
      //this.$router.push({ name: 'Reservations', params: { id: this.$route.params.id} });
      if (this.token !== "") {
        console.log(record)
        this.$router.push({ name: 'Reservations', params: { record } });
      }
      else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>