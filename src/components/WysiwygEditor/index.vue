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
  watch: {
    value (newValue, preValue) {
      if (newValue !== preValue && newValue !== this.editor.getHtml()) {
        let range = window.getSelection().getRangeAt(0)// 创建一个选中区域
        let element = document.getElementsByClassName('tui-editor-contents')
        console.log(range)
        console.log(element)
        console.log(element[1].childNodes[0])
        // range.selectNodeContents(element[1])// 选中节点的内容
        // var range = window.getSelection().getRangeAt(0)
        // var strongNode = document.getElementById('b')
        range.selectNodeContents(element[1])
        range.setStart(element[1].childNodes[0], range.startOffset)
        console.log(range.startOffset)
        // range.setStartAfter
        // range.collapse(true)
        // 选中区域文本
        // strongNode.innerHTML = range.toString()
        // // 删除选中区
        // range.deleteContents()
        // 在光标处插入新节点
        let c = document.createElement('div')
        c.innerHTML = newValue
        // range = range.cloneRange()
        range.setStartAfter(element[1].childNodes[0])
        // range.deleteContents()
        range.insertNode(c)
        range.collapse(false)
        range.deleteContents()
        range.detach()
        this.editor.setHtml(element[1].childNodes[0])
      }
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
    
    if (this.value) {
      this.editor.setHtml(this.value)
    }

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
