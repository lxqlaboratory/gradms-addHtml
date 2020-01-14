<template>
  <quill-editor
    ref="myQuillEditor"
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  />
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'Editor',
  data() {
    return {
      content: null,
      editorOption: {}
    }
  },
  methods: {
    onEditorBlur() {
    },
    onEditorFocus() { // 获得焦点事件
    },
    onEditorChange() { // 内容改变事件
    }
  }
}
</script>

<style scoped>

</style>
