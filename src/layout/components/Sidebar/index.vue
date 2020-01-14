<template>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  data() {
    return {
      menuList: [],
      residList: []
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    validateRole: function(routeItem) { // 验证用户权限
      return true
    }
  }
}
</script>
