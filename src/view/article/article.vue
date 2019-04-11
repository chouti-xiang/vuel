<template lang="html">

<div id="img-content">
  <div id="img-content1">
                <h2 class="rich_media_title" id="activity-name">{{content.title}}</h2>
                <div id="meta_content" class="rich_media_meta_list">
                    <span class="rich_media_meta rich_media_meta_text">
                                                {{content.author}}
                          </span>
                                        
                        <span class="rich_media_meta rich_media_meta_nickname" id="profileBt">
                      <router-link to="/">抽屉箱</router-link>
                                              
                    </span>

                    <em id="publish_time" class="rich_media_meta rich_media_meta_text">{{content.publishTime | formatDate}}
                    </em>

                </div>
                
                <div class="rich_media_content " id="js_content" v-html="content.content"> 
                </div>
                            </div>
                            </div>
</template>
<style>

.rich_media_area_primary_inner, .rich_media_area_extra_inner {
    max-width: 677px;
    margin-left: auto;
    margin-right: auto;
}
.rich_media_global_msg {
    position: relative;
    margin-bottom: 32px;
}
.rich_media_global_msg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .85em 35px .85em 15px;
    z-index: 2;
    background-color: #c6e0f8;
    color: #888;
    font-size: 12px;
}
.rich_media_meta_text{
      display: inline-block;
    vertical-align: middle;
    margin: 0 10px 10px 0;
    font-size: 15px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
        color: rgba(0,0,0,0.3);
    font-style: normal;
}
.rich_media_meta{
      display: inline-block;
    vertical-align: middle;
    margin: 0 10px 10px 0;
    font-size: 15px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
#img-content1{max-width: 750px;margin:0 auto;}
#img-content{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color:white;
}
#js_content{white-space: pre-wrap;}
#js_content p{
  box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 16px;
    white-space: pre-line;
    line-height: 30px;
    color: rgb(74, 74, 74);
    font-family: Avenir, -apple-system-font, 微软雅黑, sans-serif;
    text-align: justify;
        clear: both;
    min-height: 1em;
}
#js_content h1,h2,h3,h4,h5,h6{
      display: block;
    font-size: 20px;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
#js_content a{
  color: #576b95;
  font-size: 15px;
}
.rich_media_title {
    font-size: 22px;
    line-height: 1.4;
    margin-bottom: 14px;
        font-weight: 400;
}
</style>
<script>
import { formatDate } from '@/utils/common'
export default {
  name: 'login',
  data () {
    return {
      sit: '',
      content: '' 
    }
  },
  filters: {
    formatDate (time) {
      let date = new Date(time * 1000)
      return formatDate(date, 'yyyy/MM/dd')
    }
  },
  mounted () {
    let id = ''
    if (this.$route.params.id) {
      id = this.$route.params.id
    } else {
      id = this.$route.query.id
    }
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    const url = this.sit + '/index.php?app=web&act=index-getArticle'
    this.$store.dispatch('getArticle', {url: url, id: id}).then((res) => {
      this.content = this.$store.getters.article
    }).catch((error) => {
      console.log(error)
    })
    // formatDate('1554643918', 'yyyy/MM/dd')
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-check'
      this.$store.dispatch('loginUser', {url: url, name: this.form.name, password: this.form.password}).then((res) => {
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>
