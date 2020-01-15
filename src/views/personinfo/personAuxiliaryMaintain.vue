<template>
  <div class="app-container">
    personAuxiliaryMaintain
  </div>
</template>

<script>
import { personAuxiliary } from '@/api/personinfo'
export default {
  name: 'PersonAuxiliaryMaintain',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      personAuxiliary({ 'session': document.cookie }).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
