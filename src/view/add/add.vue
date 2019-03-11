<template lang="html">
<div class="main">
  <!-- 添加新页卡 bengin-->
        <div id="tx-tj">
         <div class="tx-tj-tj">
        <div><input type="text" ref="title" placeholder="请在这里输入标题" class="title" v-model="title"/></div>
        <div><input type="text"  placeholder="请输入作者"  class="author" v-model="author"/></div>
        <div id="editor"></div>
<WysiwygEditor @input="geteditor"  />
        <div class="tx-tj-qt">
            <div class="tx-tj-qt-titile">封面和摘要</div>
            <div>
            <div class="tx-tj-thumb"><div class="tx-tj-thumb-logo"><i class="icon-add_css"></i></div><span>选择封面</span>
            <input type="file" id="thumb" name="thumb" @change="onUpload1">
            <div id="tx-tj-thumb-show" v-bind:class="cflag"><img :src="thumb" /></div>
        </div>
            <div class="tx-tj-description"><textarea placeholder="选填，如果不填写会默认抓取正文前54个字"></textarea></div>
            </div>
        </div>
        <div class="tx-tj-category">
            <div class="tx-tj-qt-titile">分类名称</div>
            <div>
            <select v-model="selected" name="category" @change="getPid">
                <option value="">选择一个分类</option>
                <option value="1">媒体空间</option>
                <option value="2">百家讲坛</option>
                <option value="3">醍醐灌顶</option>
            </select>
            <select name="category" v-model="selectedC">
                <option value="">选择一个分类</option>
                <option v-for="(value, key, index) in FIDDATA" :value="value.id">{{value.cname}}</option>
            </select>
            </div>
        </div>
        <div>来源</div>
        <div><button @click="onSubmit">提交</button></div>
        </div>
    </div>
</div>
</template>

<style>
#tx-tj{top:80px ;position:absolute;margin:0 auto;z-index: 160;left: 10%;}
  .tx-tj-tj{width: 1000px;margin:0 auto;background-color: white;border-left:1px solid #ddd;border-right:1px solid #ddd;}
  .tx-tj-qt{border-top: 1px solid #ebebeb;padding: 10px 10px 25px 10px ;display: table;}
  .tx-tj-qt .tx-tj-qt-titile{margin:15px 0;}
  .title{ margin: 2px 0;padding-right: 98px;box-sizing: border-box;font-size: 24px;font-weight: 500;height: 46px;line-height: 46px;width: 100%;background-color: transparent;border: 0;outline: 0;padding-left: 7px;}
    .author{padding-left: 7px;margin: 2px 0;padding-right: 98px;box-sizing: border-box;width: 100%;background-color: transparent;border: 0;outline: 0;}
    .tx-tj-thumb{border:2px dashed #ebebeb;padding:5px;width: 200px;height: 85px;text-align: center;float: left;position: relative;}
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
</style>
<script>
import WysiwygEditor from '@/components/WysiwygEditor'
export default {
  name: 'add',
  components: {WysiwygEditor},
  data () {
    return {
      content: '',
      id: ''
    }
  },
  mounted () {
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-pullArticle'
      this.$store.dispatch('addArticle', {url: url, content: this.content}).then((res) => {
      }).catch((error) => {
        console.log(error)
      })
    },
    geteditor (data) {
      this.content = data
      console.log(this.content)
    }
  }
  
}
</script>
