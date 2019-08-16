<template lang="html">
<div class="main">
  <!-- 添加新页卡 bengin-->
  <el-alert
    title="抽屉箱系列，这里是发烧友根据自身情况制定的免费使用场所，能够体验记录，收集，交流，空间，在这里你可以添加文章，投放到不同的页卡中去，
    产品会不断的完善中"
    type="success">
  </el-alert>
      <el-form ref="form" :model="form" label-width="65px">
        <div id="tx-tj">
         <div class="tx-tj-tj" id="tx-tj-tj">
        <div>
           <el-input 
  v-model="form.title"
  size="medium"
  placeholder="请在这里输入标题"
  clearable>
  </el-input>
          </div>
        <div>
                    <el-input 
  v-model="form.author"
  size="small " 
  placeholder="请输入作者"
  clearable>
  </el-input>
          </div>
        <Wysiwyg-Editor @input="geteditor"  :value="imghtml"  />
        <div class="tx-tj-qt">
            <div class="tx-tj-qt-titile">封面和摘要</div>
            <div>
            <div class="tx-tj-thumb">
                   <el-upload
          class="avatar-uploader"
          :action="url"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
              <span>选择封面</span>
        </div>
            <div class="tx-tj-description">
              <el-input
                type="textarea"
                :rows="3"
                :maxlength="54"
                placeholder="选填，如果不填写会默认抓取正文前54个字"
                v-model="form.description">
             </el-input>
              </div>
            </div>
        </div>
        <div class="tx-tj-category">
            <div class="tx-tj-qt-titile">分类名称</div>
            <div>
              <el-select v-model="SelectValue1"  placeholder="请选择" @change="getCategray">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.cname"
      :value="item.id">
    </el-option>
  </el-select>
  <el-select
    v-model="form.columnId"
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择"
    >
    <el-option
      v-for="item in options2"
      :key="item.id"
      :label="item.cname"
      :value="item.id">
    </el-option>
  </el-select>
            </div>
        </div>
        <div>
      
          <el-form-item label="来源" style="margin-top:20px">
 <el-input 
  v-model="form.url"
  size="medium"
  clearable
  style="width:50%">
  </el-input>
</el-form-item>

        </div>
        <div style="text-align: center;"><el-button type="primary" @click="onSubmit">提交</el-button></div>
        </div>
    </div>
    </el-form>
  <template >
      <el-tabs v-model="activeName" @tab-click="handleClick" class="expression">
    <el-tab-pane label="逗图" name="first">
       <ul>
         <li v-for="(value,key) in this.imageList" @click="select1($event, value)"><img :src="'http://'+value" /></li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="排版" name="second">排版，markdown不支持排版，需要更新百度编辑器</el-tab-pane>
    <el-tab-pane label="编者注" name="third">如果想要更新更多的逗图，请联系作者iseedyou@163.com</el-tab-pane>
    </el-tabs>
  </template>
</div>

</template>

<style>
li{list-style: none;}
.expression{position:fixed;width:340px;overflow-y: auto;overflow-x: hidden;left:1000px;}
.expression li{width:80px;padding:5px 10px;float:left;}
.expression li img{width:80px;height:100px;cursor: pointer;}
#tx-tj{top:80px ;position:absolute;margin:0 auto;z-index: 160;left: 10%;}
 #tx-tj #tx-tj-tj{max-width: 1000px;width:auto;margin:0 auto;background-color: white;border-left:1px solid #ddd;border-right:1px solid #ddd;border-bottom: 1px solid #ddd;padding: 0 0 10px 0;}
  .tx-tj-qt{border-top: 1px solid #ebebeb;padding: 10px 10px 25px 10px ;display: table;}
  .tx-tj-qt .tx-tj-qt-titile{margin:15px 0;}
  .title{ margin: 2px 0;padding-right: 98px;box-sizing: border-box;font-size: 24px;font-weight: 500;height: 46px;line-height: 46px;width: 100%;background-color: transparent;border: 0;outline: 0;padding-left: 7px;}
    .author{padding-left: 7px;margin: 2px 0;padding-right: 98px;box-sizing: border-box;width: 100%;background-color: transparent;border: 0;outline: 0;}
    .tx-tj-thumb{border:2px dashed #ebebeb;padding:5px;width: 200px;height: auto;text-align: center;float: left;position: relative;}
    .tx-tj-thumb span{color:green;font-size:16px;width:100%;text-align: center;display: block;margin-top: 5px;}
    .tx-tj-thumb .tx-tj-thumb-logo{margin-top:13px;}
/*这个地方使用了伪类 如:before，content就是为了美化标签做的背景，如果不想美化，只用线条，那么这个写空，然后给长宽*/
  .tx-tj-thumb i{clear: both;}
  .tx-tj-qt i{display: inline-block;width: 24px;height: 24px;position: relative;}
    .tx-tj-qt i:before{width: 20px;height: 2px;left: 2px;top: 11px;content: "";display: block;position: absolute;background-color: #43b548;}
    .tx-tj-qt i:after{width: 2px;height: 20px;left: 11px;top: 2px;content: "";display: block;position: absolute;background-color: #43b548;}
    .tx-tj-qt .tx-tj-description{float:left;margin-left: 10px;height:100px;width: 500px}
    .tx-tj-qt .tx-tj-description textarea{height:100%;width:100%;resize:none}
  
    /*分类*/
    .tx-tj-category {margin-left:10px;}
    .tx-tj-category .tx-tj-qt-titile{margin:10px 0;}   
    #thumb{ height: 100%;
    width: 100%;
    position: absolute;
    z-index: 99;
    opacity: 0;
    top: 0;
    left: 0;}     
    #tx-tj-thumb-show{width: 100%;height:100%;
    position: absolute;
    top: 0;
    z-index: 9;
    opacity: 0.7;
    overflow: hidden;}   
    #tx-tj-thumb-show img{width: 100%;height: auto;} 
    .cflag{display: none;}   
    #editor{display: table;width: 100%} 
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
import WysiwygEditor from '@/components/WysiwygEditor'
import { getCookieStorage } from '@/utils/cookieStorage'
export default {
  name: 'add',
  components: {WysiwygEditor},
  data () {
    return {
      sit: '',
      id: '',
      imageUrl: '',
      imageList: '',
      url: '',
      url1: '',
      options: '',
      options2: '',
      SelectValue1: '',
      imghtml: '',
      activeName: 'first',
      form: {
        title: '',
        author: '',
        description: '',
        columnId: '',
        thumb: '',
        content: ''
      }
    }
  },
  beforeCreate: function () {
    const username = getCookieStorage('username')
    if (!username) {
      this.$alert('没有登录', '错误原因', {
        confirmButtonText: '确定',
        callback: action => {
          location = '#/login'
        }
      })
    }
  },
  computed: {
    s: function () {
      return this.SelectValue1
    }
  },
  mounted () {
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    this.url = this.sit + '/index.php?app=web&act=index-imgup'
    let SelectUrl = this.sit + '/index.php?app=web&act=index-getPID'
    this.$store.dispatch('getCategray', {url: SelectUrl, pid: 0}).then((res) => {
      this.options = this.$store.getters.categray
    }).catch((error) => {
      console.log(error)
    })
    this.url1 = this.sit + '/index.php?app=web&act=collect-list_image'
    console.log(this.url1)
    this.$store.dispatch('getListImage', {url: this.url1}).then((res) => {
      this.imageList = this.$store.getters.imagelist
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-pullArticle'
      this.form.uuid = getCookieStorage('username')
      this.$store.dispatch('addArticle', {url: url, content: this.form}).then((res) => {
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
      this.form.content = data
    },
    handleAvatarSuccess (res, file) {
      this.form.thumb = res
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    getCategray () {
      this.form.columnId = null
      let SelectUrl = this.sit + '/index.php?app=web&act=index-getPID'
      this.$store.dispatch('getCategray', {url: SelectUrl, pid: this.SelectValue1}).then((res) => {
        this.options2 = this.$store.getters.categray
      }).catch((error) => {
        console.log(error)
      })
    },
    // 选项卡
    handleClick (tab, event) {
      console.log(tab, event)
    },
    select1 (object, index) {
      this.imghtml = '<img src="http://' + index + '"/>'
      if (window.getSelection().baseNode === null) {
        return false
      }
      // document.getElementsByClassName('tui-editor-contents-placeholder')[0].focus()
      
      let sel = window.getSelection()
      let range = sel.getRangeAt(0)// 创建一个选中区域
      if (range.startContainer.parentNode.parentElement.className === 'tui-editor-contents' || range.startContainer.parentNode.parentElement.className === 'te-editor') {
        if (sel.getRangeAt && sel.rangeCount) {
          range.deleteContents()
          let c = document.createElement('p')
          c.innerHTML = this.imghtml
          let frag = document.createDocumentFragment()
          let node = c.firstChild
          let lastNode = frag.appendChild(node)
          range.insertNode(frag)
          let contentRange = range.cloneRange()
          contentRange.setStartAfter(lastNode)
          contentRange.collapse(true)
          sel.removeAllRanges()
          sel.addRange(contentRange)
        }

        let imageListUrl = this.sit + '/index.php?app=web&act=collect-setcore'
        this.$store.dispatch('addCore', {url: imageListUrl, imgUrl: index}).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
  
}
</script>
