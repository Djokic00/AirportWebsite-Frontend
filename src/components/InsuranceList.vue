<template>
  <div>
    <b-table class="table table-hover"
             id="image-table"
             hover
             fixed
             :items="insuranceTable"
             :fields="fields"
             small
             :per-page="perPage"
             :current-page="currentPage"
             @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="insuranceTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button variant="primary" v-on:click="goToReservation()">Buy an insurance</b-button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex';

export default {
  name: "InsuranceList",

  data() {
    return {
      fields: ['nameOfCompany', 'destinationCountry', 'typeOfInsurance', 'premium', 'levelOfCover'],
      items: [],
      currentPage: 1,
      perPage: 4,
    }
  },

  computed: {
    ...mapState([
      'insurances',
      'token',
      'insuranceInformation'
    ]),
    insuranceTable: function () {
      return this.insurances;
      // .filter(book => book.libraryId == this.$route.params.id);
    }
  },

  mounted() {
    this.setInsuranceInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setInsuranceInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setInsuranceInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
        let insuranceReservation = this.insuranceInformation
        this.$router.push({ name: 'InsuranceReservation', params: { insuranceReservation } });
      }
      else alert("You cannot make reservations. Log in first!");
    }
  }
}
</script>


<style scoped>


</style>