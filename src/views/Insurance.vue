<template>
  <div>
    <InsuranceList/>
  </div>

</template>

<script>

import InsuranceList from '@/components/InsuranceList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Insurance",

  components: {
    InsuranceList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchInsurance();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchInsurance'
    ])
  }


}
</script>


<style scoped>


</style>