<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="flight.flightDestination"
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <h4>{{flight.flightDestination}}</h4>
        <h4>{{book.id}}</h4>
        <b-card-text>
          <p id="year">Release date: {{book.relesedate}}</p>
          <p>Genre: {{book.genre}}</p>
          <p>Description: {{book.desciption}}</p>
        </b-card-text>
        <b-button v-on:click="makeReservation()" pill>Book a flight</b-button>
      </b-card>
    </div>
  </div>

</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "SingleFlight",

  props: {
    flight: Object
  },

  computed: {
    ...mapState([
      'flightInformation'
    ])
  },

  methods: {
    ...mapMutations([
      "setFlightInformation"
    ]),
    makeReservation() {
      if (localStorage.token) {
        this.setFlightInformation({
          flightDestination: this.flight.flightDestination,
          departure: this.flight.departure,
          arrival: this.flight.arrival,
          price: this.flight.price,
          airline: this.flight.airline,
          numberOfSeats: this.flight.numberOfSeats,
          typeOfAirplane: this.flight.typeOfAirplane
        })
        this.$router.push({ name: 'Reservations'});
      }
      else alert("You have to be logged in to make the reservation")
    }
  }

}

</script>

<style scoped>

</style>