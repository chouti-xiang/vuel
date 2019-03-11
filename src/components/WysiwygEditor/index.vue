<template>
<div :id="id"></div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content
import Editor from 'tui-editor'
import editorDefaultOptions from './editorDefaultOptions'
export default {
  name: 'WysiwygEditor',
  props: {
    value: '',
    height: {
      type: String,
      default: '400px'
    },
    mode: {
      type: String,
      default: 'wysiwyg'
    },
    id: {
      default () {
        return 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    }
  },
  data () {
    return {
      editor: ''
    }
  },
  computed: {
    editorOptions () {
      const options = Object.assign({}, editorDefaultOptions)
      options.initialValue = this.value
      options.initialEditType = this.mode
      options.height = this.height
      return options
    }
  },
  mounted () {
    const options = Object.assign(this.editorOptions, {
      el: document.getElementById(this.id)
    })
    this.editor = new Editor(options)

    this.editor.on('change', () => {
      this.$emit('input', this.editor.getHtml())
    })
  },
  methods: {
    setValue (value) {
      this.editor.setValue(value)
    },
    getValue () {
      return this.editor.getValue()
    },
    setHtml (value) {
      this.editor.setHtml(value)
    },
    getHtml () {
      return this.editor.getHtml()
    }
  }
  
}
</script>
