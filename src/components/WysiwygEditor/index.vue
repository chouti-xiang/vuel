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
      // if (newValue !== preValue && newValue !== this.editor.getHtml()) {
        // let range = window.getSelection().getRangeAt(0)// 创建一个选中区域
        // range.deleteContents()
        // let element = document.getElementsByClassName('tui-editor-contents')
        // let c = document.createElement('p')
        // c.innerHTML = newValue
        // let frag = document.createDocumentFragment()
        // let node = c.firstChild;
        // let lastNode = frag.appendChild(node);
        // range.insertNode(frag)
        // let contentRange = range.cloneRange()
        // contentRange.setStartAfter(lastNode)
        // contentRange.collapse(true)
        // window.getSelection().removeAllRanges();
        // window.getSelection().addRange(contentRange); 
        // this.editor.setHtml(element[1].childNodes[0])
      // }
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
