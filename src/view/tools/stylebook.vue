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
         <div class="tx-tj-tj">
        <div>
           <el-input 
  v-model="form.title"
  size="medium"
  placeholder="分类"
  clearable>
  </el-input>
          </div>
        <div>
                  
          </div>
        <Wysiwyg-Editor @input="geteditor"  />
        
          
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
      
        </div>
        <div style="text-align: center;"><el-button type="primary" @click="onSubmit">提交</el-button></div>
        </div>
    </div>
    </el-form>
    
</div>
</template>

<style>
#tx-tj{top:80px ;position:absolute;margin:0 auto;z-index: 160;left: 10%;}
  .tx-tj-tj{width: 1000px;margin:0 auto;background-color: white;border-left:1px solid #ddd;border-right:1px solid #ddd;border-bottom: 1px solid #ddd;padding: 0 0 10px 0;}
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
import { getCookieStorage, removeCookieStorage } from '@/utils/cookieStorage'
let username = getCookieStorage('username')
if (!username) {
  location = '/'
}
export default {
  name: 'stylebook',
  components: {WysiwygEditor},
  data () {
    return {
      sit: '',
      id: '',
      imageUrl: '',
      url: '',
      options: '',
      options2: '',
      SelectValue1: '',
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
 
  },
  computed: {
   
  },
  mounted () {
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    let SelectUrl = this.sit + '/index.php?app=web&act=index-getPID'
    this.$store.dispatch('getCategray', {url: SelectUrl, pid: 0}).then((res) => {
      this.options = this.$store.getters.categray
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-pullArticle'
      this.$store.dispatch('addArticle', {url: url, content: this.form}).then((res) => {
      }).catch((error) => {
        console.log(error)
      })
    },
    geteditor (data) {
      this.form.content = data
    },
    getCategray () {
      this.form.columnId = null
      let SelectUrl = this.sit + '/index.php?app=web&act=index-getPID'
      this.$store.dispatch('getCategray', {url: SelectUrl, pid: this.SelectValue1}).then((res) => {
        this.options2 = this.$store.getters.categray
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>
