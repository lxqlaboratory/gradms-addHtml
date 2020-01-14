<template>
  <div class="dashboard-container">
    <div>
      <tinymce v-model="content" :height="500" />
    </div>
  </div>
</template>

<script>
  import { allCourseQueryInit } from '@/api/login'
  import Tinymce from '@/components/Tinymce'
export default {
  name: 'Dashboard',
  components: { Tinymce },
  data() {
    return {
      content:
        `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      allCourseQueryInit({ 'session': document.cookie }).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
