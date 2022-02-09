<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="cargoTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

    <b-table class="table table-hover"
             id="image-table"
             hover
             fixed
             :items="cargoTable"
             :fields="fields"
             small
             :per-page="perPage"
             :current-page="currentPage"
             @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="cargoTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="goToReservation()">Reservation</b-button>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "CargoList",

  data() {
    return {
      fields: ['productName', 'departure', 'pricePerKg', 'hazardous', 'deliveryDestination'],
      items: [],
      currentPage: 1,
      perPage: 10,
    }
  },

  computed: {
    ...mapState([
      'cargos',
    ]),
    cargoTable: function () {
      return this.cargos;
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