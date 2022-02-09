<template>
  <div>
    <RentACarList/>
  </div>

</template>

<script>

import {mapActions} from 'vuex';
import RentACarList from "@/components/RentACarList";

export default {
  name: "RentACar",

  components: {
    RentACarList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchACar();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchACar'
    ])
  }


}
</script>


<style scoped>


</style>