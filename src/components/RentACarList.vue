<template>
  <div>
    <b-table class="table table-hover"
             id="image-table"
             hover
             fixed
             :items="carTable"
             :fields="fields"
             small
             :per-page="perPage"
             :current-page="currentPage"
             @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="carTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToReservation()">Rent a car</b-button>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "RentACarList",

  data() {
    return {
      fields: ['carName', 'pricePerDay', 'yearOfProduction', 'fuelConsumption', 'numberOfSeats', 'numberOfCars'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },

  computed: {
    ...mapState([
      'cars',
    ]),
    carTable: function () {
      return this.cars;
      // .filter(book => book.libraryId == this.$route.params.id); //mora da bude == umesto ===, jer inace nece da ih nadje kada se uradi drugi put
    }
  },

  methods: {
    rowClicked(record) {
      console.log(record)
    },
    goToReservation(record){
      //this.$router.push({ name: 'Reservations', params: { id: this.$route.params.id} });
      //if (localStorage.token != null) {
      this.$router.push({ name: 'Reservations', params: {record} });
      //}
      //else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>