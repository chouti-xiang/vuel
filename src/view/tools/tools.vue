<template lang="html">
<div class="body">
 <el-alert
    title="这是一个抽屉箱，我们可以自行的添加stylebook，也可以自由管理stylebook"
    type="success"
   >
  </el-alert>
  <div style="text-align:right;">
     <router-link to="/stylebook"><el-button type="primary" icon="el-icon-edit"></el-button></router-link>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
<div class="book-summary">
      
<nav role="navigation">
            
<ul class="summary">
    
        <li class="chapter active open" data-level="1.1.1" data-path="." data-name="linux">
           
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>linux</a>
                <ul class="articles">
                    <li class="chapter" data-level="1.1.1.1" data-path="." data-name="安装">
                        <a href="https://developers.weixin.qq.com/minigame/dev/">安装</a>
                    </li>
                </ul>
            </li>
        <li class="chapter" data-level="1.1.2" data-path="./framework/structure.html" data-name="nginx">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>nginx</a>
            </li>
        <li class="chapter" data-level="1.1.3" data-path="./framework/config.html" data-name="centos">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>centos</a>
            </li>
        <li class="chapter" data-level="1.1.4" data-path="./framework/scene.html" data-name="git">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>git</a>
            </li>
        <li class="chapter" data-level="1.1.5" data-path="./framework/app-service/api.html" data-name="php">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>php</a>
            </li>
        <li class="chapter close" data-level="1.1.6" data-path="./tutorial/ability/network.html" data-name="mysql">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>mysql</a>
        <ul class="articles"><li class="chapter" data-level="1.1.6.1" data-path="./tutorial/ability/network.html" data-name="网络">
                <a href="https://developers.weixin.qq.com/minigame/dev/tutorial/ability/network.html">网络</a>
                
            </li>
        </ul>
            </li>
<li class="chapter close" data-level="1.1.7" data-path="./framework/server-ability/backend-api.html" data-name="svn">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>svn</a>
                <ul class="articles"><li class="chapter" data-level="1.1.7.1" data-path="./framework/server-ability/backend-api.html" data-name="后端API">
                <a href="https://developers.weixin.qq.com/minigame/dev/framework/server-ability/backend-api.html">后端API</a>
                
            </li>
</ul>
            </li>
<li class="chapter open" data-level="1.1.8" data-path="./tutorial/usability/debug.html" data-name="vim">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>vim</a>
                <ul class="articles"><li class="chapter" data-level="1.1.8.1" data-path="./tutorial/usability/debug.html" data-name="调试">
                <a href="https://developers.weixin.qq.com/minigame/dev/tutorial/usability/debug.html">调试</a>
                
            </li>
</ul>
            </li>
<li class="chapter close" data-level="1.1.9" data-path="./tutorial/open-ability/authorize.html" data-name="ftp">
                <a href="javascript:;"> <i class="el-icon-arrow-down"></i>ftp</a>
                <ul class="articles"><li class="chapter" data-level="1.1.9.1" data-path="./tutorial/open-ability/login.html" data-name="登录">
                <a href="https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/login.html">登录</a>
                
            </li>
</ul>
            </li>
</ul>
            </li></ul>
            </li>

</ul>

        </nav>
    </div>
<div class="right" v-html="content.content">

</div>
</div>
</template>
<style>
@import "style.css";
</style>

<script>

 
export default {
  name: 'login',
  data () {
    return {
      content:''
    }
  },
  mounted () {
  // console.log($('.summary').html())
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    const url = this.sit + '/index.php?app=web&act=index-getArticle'
    this.$store.dispatch('getArticle', {url: url, id: 61}).then((res) => {
      this.content = this.$store.getters.article
    }).catch((error) => {
      console.log(error)
    })
    $('.chapter').click(function(){
        $(this).find('ul').toggle()
    })
  },
  methods: {
    onSubmit () {
      const url = this.sit + '/index.php?app=web&act=index-check'
      this.$store.dispatch('loginUser', {url: url, name: this.form.name, password: this.form.password}).then((res) => {
        if (res.data.flag) {
          this.$router.push('/')
        } else {
          this.$alert(res.data.data, '错误原因', {
            confirmButtonText: '确定'
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>
