<template>
  <div>
    <FlightList/>
  </div>

</template>

<script>

import FlightList from '@/components/FlightList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Flight",

  components: {
    FlightList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchFlights();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchFlights'
    ])
  }


}
</script>


<style scoped>


</style>