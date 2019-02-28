<template>
  <div class="main-wrap">
        <header data-click="{&quot;mod&quot;:&quot;header&quot;}">
            <div class="header-stackup" data-scroll-reveal="enter from the top over 0.66s" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <div class="ibx-container row clr" id="toubu">
                    <a href="http://i.baidu.com/" target="_self" class="header-logo header-logo-index"></a>
                    <div class="header-tool header-tool-user">
                        <a class="header-tu-img header-tool-user-nick" href="/index.php?app=web&act=index-login">
                            请登录                        </a>
                                            </div>
                    <div class="header-tool header-tool-news">
                        <a href="http://i.baidu.com/msg/messages/list/" class="header-tool-news-num">消息</a>
                    </div>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
