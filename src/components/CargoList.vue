<template>
  <div>
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
    <b-button variant="primary" v-on:click="goToReservation()">Reserve</b-button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex';

export default {
  name: "CargoList",

  data() {
    return {
      fields: ['productName', 'departure', 'pricePerKg', 'hazardous', 'deliveryDestination'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },
    computed: {
      ...mapState([
        'cargos',
        'token',
        'cargoInformation'
      ]),
      cargoTable: function () {
        return this.cargos;
        // .filter(book => book.libraryId == this.$route.params.id);
      }
    },

    mounted() {
      this.setCargoInformation("");
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }

    },

    methods: {

      ...mapMutations([
        'setCargoInformation',
        'setToken'
      ]),

      rowClicked(record) {
        this.setCargoInformation(record);
      },
      goToReservation() {
        if (this.token !== "") {
          let cargoReservation = this.cargoInformation
          this.$router.push({ name: 'CargoReservation', params: { cargoReservation } });
        }
        else alert("You cannot make reservations. Log in first!");
      }
    }
  }
</script>


<style scoped>


</style>