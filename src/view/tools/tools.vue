<template lang="html">
<div class="bgg" ref="delay">
  <header>
    <div rel="scroll" id="scroll">
      <div class="use">
        <div class="e">
          <el-switch
            v-model="is_edit"
            active-color="#13ce66"
            inactive-color="#dcdfe6"
            active-text="编辑模式"  
            inactive-text="预览模式">
          </el-switch>
        </div>
        <div class="e">
          <el-button type="primary" @click="onSubmit">保存<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
      </div>
    </div>
  </header>
<div class="book-summary">
      
<nav role="navigation">
            
<ul class="summary">
    
        <li class="chapter active open" data-level="1.1.1" data-path="." data-name="基础">
                <a href="javascript:;">私人笔记 <i class="el-icon-plus" ref="zz" @click="add" v-if="is_edit"></i></a>
                <ul class="articles" ref="UL">
          <li class="chapter" v-for="(value,index) in listkey.key">
                <a href="javascript:;" @click="rightedit($event)" :data-key="index">{{value.title}}<i class="el-icon-tickets"  @click="rename($event)" :data-title="value.title" :data-key="index" v-if="is_edit"></i><i class="el-icon-circle-close" @click="del($event)" :data-title="value.title" :data-key="index" v-if="is_edit"></i></a>
                
            </li>
</ul>
            </li>

    <li class="divider" v-bind:class="{'hidden': flag}" v-if="is_edit"><div><input type="text" ref="rename"  value="" data-sec='222'  /><button v-on:click="save">保存</button></div></li>
</ul>

        </nav>
    </div>
<div class="right" ref="right">
  <div class="work">
    <Wysiwyg-Editor @input="geteditor" v-bind:value="pushcontent" :height="height" v-if="is_edit"  />
    <div v-html="pushcontent" v-if="!is_edit"></div>
  </div>
</div>
</div>

</template>
<style>
@import "style.css";
.bgg{margin:0 auto;width:1140px;}
header{
  height: 50px;
  margin-bottom: 15px;
    }
#scroll{
  position: fixed;
    width: 100%;
    height:50px;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 100;
    min-width: 700px;
    -webkit-box-shadow: 0 0 5px #888;
    box-shadow: 0 0 5px #888;
}
.hidden{display:none}
.right{
   background-color: #fff;
    padding: 10px;
    float: right;
    margin-right: 115px;
    width: 60%;
    margin-top: -15px;
    }
.use{
      position: absolute;
    right: 500px;
    line-height: 40px;
}
.e{
  margin-right:30px;
  float:left;
}
code{
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
        display: block;
        white-space: pre-wrap;
}
p code{
  color: #c1788b;
    padding: 4px 4px 2px 5px;
    letter-spacing: -0.3px;
}
.closed{
      margin: 0 auto;
    width: 1140px;
  display:none;
}
.opend{
      margin: 0 auto;
    width: 1140px;
  display:block;
}
</style>

<script>
import WysiwygEditor from '@/components/WysiwygEditor'
import { getCookieStorage } from '@/utils/cookieStorage'
import { Loading } from 'element-ui'
let username = ''
let loadingInstance 
export default {
  name: 'login',
  components: {WysiwygEditor},
  data () {
    return {
      sit: '',
      flag: 1,
      active: 0,
      show: 0,
      is_edit: false,
      pushcontent: '',
      height: '800px',
      listkey: {
        'key': [
          {
            'title': '添加新索引'
          },
          {
            'title': '添加新索引'
          },
          {
            'title': '添加新索引'
          }
        ],
        'value': [
          {
            'content': '增加新内容1'
          },
          {
            'content': '增加新内容2'
          },
          {
            'content': '增加新内容3'
          }
        ]
      }
    }
  },
  beforeCreate: function () {
    username = getCookieStorage('username')
    if (!username) {
      this.$alert('没有登录', '错误原因', {
        confirmButtonText: '确定',
        callback: action => {
          location = '#/login'
        }
      })
    }
  },
  mounted () {
    this.delay('closed')
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    const url = this.sit + '/index.php?app=web&act=index-getstylebook'
    this.$store.dispatch('getstylebook', {url: url, ssid: username}).then((res) => {
      if (this.$store.getters.stylebook !== '操作失败') {
        this.listkey = this.$store.getters.stylebook
        this.$refs.UL.childNodes[0].setAttribute('class', 'active')
        this.pushcontent = this.listkey.value[0].content
        this.delay('opend')
      } else {
        alert('获取失败')
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-stylebook'
      if (!this.listkey.key.length) { 
        this.$alert('不能提交空数据', '错误原因', {
          confirmButtonText: '确定'
        })
        return false 
      }
      this.$store.dispatch('pushstylebook', {url: url, ssid: username, scontent: this.listkey}).then((res) => {
        if (res.data.flag) {
          this.$alert(res.data.data, '消息提示', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert(res.data.data, '错误原因', {
            confirmButtonText: '确定'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    geteditor (data) {
      this.active ? this.active = this.active : this.active = 0
      this.pushcontent = this.listkey.value[this.active].content = data
    },
    rightedit (element) {
      let _self = element.target
      let _index = _self.getAttribute('data-key')
      // 向编辑器推送内容
      this.pushcontent = this.listkey.value[_index].content
      // this.this.listkey.value[_index].content
      // 向数据模型中存编辑器里的内容
      this.getactive(_index)
    },
    getactive (index) {
      this.active = index 
      for (let i in this.$refs.UL.childNodes) {
        if (i !== index && i.length === 1) {
          this.$refs.UL.childNodes[i].setAttribute('class', '')
        } else {
          this.$refs.UL.childNodes[index].setAttribute('class', 'active')
        }
      }
    },
    add () {
      this.listkey.key.push({'title': '添加新索引'})
      this.listkey.value.push({'content': '增加新内容'})
    },
    rename (element) {
      let _self = element.target
      let _text = _self.getAttribute('data-title')
      let _index = _self.getAttribute('data-key')
      this.$refs.rename.value = _text
      this.$refs.rename.dataset.sec = _index
      this.flag = 0
    },
    del (element) {
      let _self = element.target
      let _index = _self.getAttribute('data-key')
      this.listkey.value.splice(_index, 1)
      this.listkey.key.splice(_index, 1)
    },
    save () {
      let _value = this.$refs.rename.value
      let _key = this.$refs.rename.dataset.sec
      this.listkey.key[_key].title = _value
      this.flag = 1
    },
    delay (flag) {
      if (flag === 'closed') {
        loadingInstance = Loading.service({ fullscreen: true })
      }
      if (flag === 'opend') {
        this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          loadingInstance.close()
        })
      }
      this.$refs.delay.setAttribute('class', flag)
    }

  }
}
</script>
