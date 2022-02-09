<template>
  <div>
    <CargoList/>
  </div>

</template>

<script>

import CargoList from '@/components/CargoList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Cargo",

  components: {
    CargoList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchCargo();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchCargo'
    ])
  }


}
</script>


<style scoped>


</style>