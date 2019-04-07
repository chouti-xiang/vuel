<template lang="html">
<div class="main-wrap">
        <header data-click="{&quot;mod&quot;:&quot;header&quot;}">
            <div class="header-stackup" data-scroll-reveal="enter from the top over 0.66s" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <div class="ibx-container row clr" id="toubu">
                    <a href="http://i.baidu.com/" target="_self" class="header-logo header-logo-index"></a>
                    <div class="header-tool header-tool-user" v-if="this.username">
                        <a class="header-tu-img header-tool-user-nick" >
                            {{this.username}}
                        </a>
                        <div class="header-tc-content" style="display: block;">
                            <a class="header-tuc-logout" @click="logout">
                            退出帐号</a>
                        </div>
                    </div>
                    <div class="header-tool header-tool-user" v-else>
                        <a class="header-tu-img header-tool-user-nick" >
                            <router-link to="/login">请登录</router-link> 
                        </a>
                    </div>
                    <div class="header-tool header-tool-news">
                        <a href="http://i.baidu.com/msg/messages/list/" class="header-tool-news-num">消息</a>
                    </div>
                </div>
            </div>
        </header>
         <section data-scroll-reveal="enter from the top over 0.66s" class="header-app ibx-container" data-click="{&quot;mod&quot;:&quot;header&quot;}" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
            <ul class="ibx-header-app clr">
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-tool">工具</div>
                </li>
                <li class="ibx-header-app-item clr">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;sousuo&quot;}" target="_blank" href="http://element-cn.eleme.io/#/zh-CN"><router-link to="/tools" target="_blank">stylebook</router-link></a></span>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-space"></div>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-sns">外链</div>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;tieba&quot;}" target="_blank" href="https://baike.baidu.com/">百度百科</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;baike&quot;}" target="_blank" href="https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN">公众平台</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;zhidao&quot;}" target="_blank" href="https://www.aliyun.com/">阿里云</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;wenku&quot;}" target="_blank" href="http://www.cssmoban.com">免费模版</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-space"></div>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-life">文档</div>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;ditu&quot;}" target="_blank" href="http://element-cn.eleme.io/#/zh-CN/component/installation">element-ui</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;licai&quot;}" target="_blank" href="https://www.cnblogs.com/hezihao/p/8072585.html">webpack</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;tuangou&quot;}" target="_blank" href="http://www.jq22.com/chm/jquery/index.html">jquery</a></span>
                </li>
            </ul>
        </section>
        <div class="ibx-container row">   
            <div data-scroll-reveal="" class="row user-panel" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <div class="col span_5_1">
                    <div id="ibx-uc" data-click="{&quot;mod&quot;:&quot;uc&quot;}">
                        <div class="ibx-inner" id="geren">
                            <div class="ibx-uc-uimg">
                                <div class="ibx-uc-uimg-mask">
                                    <a data-click="{&quot;act&quot;:&quot;uc_set&quot;}" class="ibx-uc-ulink" target="_blank" href="http://www.baidu.com/p/setting/profile/portrait">更换头像</a>
                                </div>
                                <el-upload
  class="avatar-uploader"
  :action="thumbUrl"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class=" ibx-uc-img">
  <img v-else class="ibx-uc-img" src="@/assets/2.jpg" >
</el-upload>
                                                     
                            </div>
                            <div class="ibx-uc-unick">
                                <a data-click="{&quot;act&quot;:&quot;uc_name&quot;}" target="_blank" href="http://www.baidu.com/p/setting/profile/basic" class="ibx-uc-nick">{{name}}</a>                
                            </div> 
                            <div class="ibx-uc-utool">
                                <span class="ibx-uc-utool-cover"></span>
                                <span class="ibx-uc-utool-cover ibx-uc-utool-cover-mask"></span>
                                <div class="ibx-uc-utool-title">认证 :</div>
                                <div class="ibx-uc-utool-content clr">
                                    <a data-click="{&quot;act&quot;:&quot;icon_mobile&quot;}" class="ibx-uc-utool-mobile current" target="_blank" href="http://passport.baidu.com/center" data-title="绑定手机">
                                    </a>
                                    <a data-click="{&quot;act&quot;:&quot;icon_email&quot;}" class="ibx-uc-utool-envelope current" target="_blank" href="http://passport.baidu.com/center" data-title="绑定邮箱">
                                    </a>
                                </div>
                            </div> 
                            <div class="ibx-uc-uop">
                                <div class="ibx-uc-uop-item first">
                                    <a data-click="{&quot;act&quot;:&quot;uc_dingdan&quot;}" target="_blank" href="http://dingdan.baidu.com/my/order/" title="订单中心">
                                        订单中心
                                    </a>
                                </div>
                                <div class="ibx-uc-uop-item">
                                    <a data-click="{&quot;act&quot;:&quot;uc_setting&quot;}" target="_blank" href="http://passport.baidu.com/" title="帐户设置">
                                        帐户设置
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col span_5_4">
                    <div id="ibx-cal" data-click="{&quot;mod&quot;:&quot;cal&quot;}">
                        <div class="ibx-inner" id="ibx-cal-content">
                        <div class="ibx-cal-box clr">
                        <div id="ibx-cal-box"><div class="ibx-cal-box-l">
                        <iframe width="800" scrolling="no" height="120" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=19&icon=1&temp=1&num=1&site=12"></iframe>
                        </div>
                        <div class="ibx-cal-box-r" id="ibx-cal-box-r">
                            <ul class="ibx-cal-dlist clr" style="width: 338px; margin-left: 0px;">
                                <li class="ibx-cal-ditem ibx-cal-digame" style="border:none">
                </li>
                        <li class="ibx-cal-ditem ibx-cal-diadd">
                            <a data-click="{&quot;act&quot;:&quot;cal_add&quot;}" href="javascript:;" class="ibx-cal-ditem-addbtn">
                                <span class="ibx-cal-ditem-addicon"></span>新建提醒</a>
                            </li>
                        </ul>
                    </div></div>
                </div>
                    </div>
                </div>
                </div>
            </div>
            <div data-scroll-reveal="" class="row card-panel"  data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true" >
                <span class="rule-wrap"><a id="video" name="video" class="rule"></a></span>
                <div class="col span_4_4">
                    <div class="ibx-even">
                        <div class="ibx-inner" id="ibx-mod-video">
                        <div class="ibx-inner-title" id='fenlei'>
                            <a  target="_blank" href="http://v.baidu.com/" class="ibx-inner-title-ctx">媒体空间</a>
                            <ul class="ibx-inner-title-tab">
                                <li  class="ibx-inner-title-tabitem ibx-video-hotTop OP_LOG_TITLE current">个人推荐</li>
                            </ul>
                            <a herf='#' class="OP_LOG_TITLE card-enter-video-link" click='miniPrograme' >关注我的小程序</a>
                            <div style="width: 250px;height: 140px;position: absolute;right: 0;top: 50px;" v-if='tag'>
                            <img src="/web/resources/xiaochengxu.jpg" style="width: 100px;height: 100px" />
                            </div>
                        </div>
                        <div class="ibx-inner-content" id="ibx-video-list">
                        <div class="hot-video-tab">
                            <span class="hot-video-tab-item hot-video-tab-tv OP_LOG_TITLE"  v-bind:class="{'current':selected ==1}" data-id="0" @click="changetab('video', 4, {key:'selected',value:1})">电影</span>
                            <span class="hot-video-tab-item hot-video-tab-movie OP_LOG_TITLE"  v-bind:class="{'current':selected ==2}" @click="changetab('video', 5, {key:'selected',value:2})">电视剧</span>
                        </div>
                        <div id="hot-video" class="my-video">
                            <ul class="ibx-video-list" style="width: 2868px; left: 0px;" id="hot-video1">
                            <li class="ibx-video-item" v-for="(value, key) in video"><a target="_blank" :href="value.url"><img v-bind:src="'http://'+value.thumb" :alt="value.title" width="130"></a><div class="ibx-video-detail"><em class="ibx-video-dtitle-rank front ">{{key+1}}</em><a target="_blank" class="ibx-video-dtitle" :href="value.url" :title="value.title">{{value.title}}</a><label class="ibx-video-actor" :title="key">{{key}}</label><label class="ibx-video-tag" :title="value.type">{{value.type}}</label></div></li>
                            </ul>
                        </div>
                        <div class="ibx-video-mask"></div>
                        </div></div>
                    </div>
                </div>
            </div>
            <div data-scroll-reveal="" class="row card-panel" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true" id="tuijian">
                <span class="rule-wrap"><a id="xinwen" name="xinwen" class="rule"></a></span>
                <div class="col span_4_4">
                    <div class="ibx-even">
                        <div class="ibx-inner" id="ibx-mod-xinwen">
                        <div class="ibx-inner-title">
                            <a target="_blank" href="#" class="ibx-inner-title-ctx">外引文章</a>
                            <ul class="ibx-inner-title-tab">
                                <li data-click="{&quot;act&quot;: &quot;card_xinwen_pernews&quot;}" class="ibx-inner-title-tabitem ibx-xinwen-pernews OP_LOG_TITLE" @click="changetab('item', 7, {key:'is_tj',value:1})" v-bind:class="{'current':is_tj ==1}">工具类</li>
                                <li data-click="{&quot;act&quot;: &quot;card_xinwen_hot&quot;}" class="ibx-inner-title-tabitem ibx-xinwen-hot OP_LOG_TITLE" @click="changetab('item', 8, {key:'is_tj',value:2})" v-bind:class="{'current':is_tj ==2}">生活类</li>
                            </ul>
                            <div class="xinwen-title-link-container OP_LOG_TITLE"><a href="javascript:void(0)" class="OP_LOG_TITLE" click="gongzhong">关注我的公众号</a></div>
                            <div style="width: 150px;height: 100px;z-index: 10;position: absolute;right: 0;top: 50px;" v-if="tag">
                                <img src="/web/resources/4.jpg" style="width: 100px;height: 100px">
                            </div>
                        </div>
                        <div class="ibx-inner-content" id="ibx-xinwen">
                        <div id="xinwen-pernews" class="xinwen-pernews"><div class="xinwen-common-tab"><div class="xinwen-normal-top"><span class="xinwen-normal-top-title">个人推荐</span><span class="xinwen-normal-top-line"></span></div>
                        <!-- <div class="ibx-card-pager"><span class="ibx-card-pager-prev"></span><span class="ibx-card-pager-item current" data-page="0"></span><span class="ibx-card-pager-next"></span></div> -->
                        </div>
                        <div id="xinwen-pernews-main" class="xinwen-pernews-main">
                        <ul class="xinwen-normal-list xinwen-pernews-list" style="width: 976px; left: 0px;" id="hot_article">
                            <li class="xinwen-pernews-item"  v-for="article in item">
                                <div class="xinwen-pernews-item-news"><a class="xinwen-pernews-item-link" target="_blank" href="http://tj.people.com.cn/n2/2018/0823/c375366-31968703.html"><img class="xinwen-pernews-item-img" :src="'http://'+article.thumb" alt=""></a><div class="xinwen-pernews-item-detail detail-type-img"><router-link :to="{ name: 'article', params: { id: article.id }}" class="xinwen-pernews-item-title">{{article.title}}</router-link>
                                    <!-- <p class="xinwen-pernews-item-info"><span class="xinwen-pernews-item-read">0</span><span class="xinwen-pernews-item-up">0</span><span class="xinwen-pernews-item-down">0</span></p> -->
                                </div></div>
                            </li>
                        </ul>
                    </div>
            <div class="ibx-xinwen-mask hidden"></div></div></div></div>
                    </div>
                </div>
            </div>                 
                                <div data-scroll-reveal="" class="col span_4_2" data-click="{&quot;mod&quot;: &quot;card_koubei&quot;}" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                    <span class="rule-wrap"><a id="koubei" name="koubei" class="rule"></a></span>
                    <div class="ibx-odd" id="zz">
                        <div id="ibx-mod-koubei" class="ibx-inner ibx-mod-koubei">
                          <div class="ibx-inner-title">
                          <a data-click="{&quot;act&quot;: &quot;card_koubei_link&quot;}" target="_blank" href="http://koubei.baidu.com/" class="ibx-inner-title-ctx">个人文章</a>
                          <ul class="ibx-inner-title-tab">
                            <li ref="ho" data-click="{&quot;act&quot;: &quot;card_koubei_mine&quot;}" class="ibx-inner-title-tabitem ibx-koubei-mine OP_LOG_TITLE" v-bind:class="{'current':is_th ==1}" @click="changetab('think', 9, {key:'is_th',value:1})">我的工作</li>
                            <li ref="think" class="ibx-inner-title-tabitem ibx-koubei-turth OP_LOG_TITLE" v-bind:class="{'current':is_th ==2}" @click="changetab('think', 10, {key:'is_th',value:2})">我的生活</li>
                            <li data-click="{&quot;act&quot;: &quot;card_koubei_hot&quot;}" class="ibx-inner-title-tabitem ibx-koubei-hot OP_LOG_TITLE"  v-bind:class="{'current':is_th ==3}" @click="changetab('think', 11, {key:'is_th',value:3})">我的随笔</li>
                          </ul>
                            <div class="koubei-title-link-container OP_LOG_TITLE">
                            </div></div><div class="ibx-inner-content" id="ibx-koubei"><div id="koubei-mine-container" class="koubei-mine-container "><div class="koubei-mine-top"><div class="ibx-card-pager"><span class="ibx-card-pager-prev"></span><span class="ibx-card-pager-item current" data-page="0"></span><span class="ibx-card-pager-item" data-page="1"></span><span class="ibx-card-pager-item" data-page="2"></span><span class="ibx-card-pager-next"></span></div></div><div id="koubei-mine-list">
                            <ul class="koubei-mine-list"  >
                            <li class="koubei-mine-item" v-for="(value) in think"><div class="koubei-mine-item-container"><p class="koubei-mine-item-title"><a class="OP_LOG_TITLE" target="_blank" :title="value.title"  data-click="{&quot;act&quot;: &quot;card_koubei_item_message&quot;}"> <router-link :to="{ name: 'article', params: { id: value.id }}">{{value.title}}</router-link></a></p><span class="koubei-mine-item-time">{{value.date}}</span></div></li>
                            </ul>
                            </div></div></div></div>
                    </div>
                </div>
                                                <div data-scroll-reveal="" class="col span_4_2 OP_LOG_LINK" data-click="{&quot;mod&quot;:&quot;card_mgr&quot;,&quot;act&quot;:&quot;msg_click&quot;}" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                    <a href="#" style="display: block;" ><div class="ibx-even editCard" id="editCard">
                        <router-link to="/add" target="_blank">
                        <div class="ibx-inner editCard-inner">
                            <div class="editCard-inner-add"></div>
                            <div class="editCard-inner-tip"><i ></i><p>添加文章</p></div>
                        </div>
                        </router-link>
                        </div>
                       </a>
                    </div>
                </div>
            </div>
</template>
<style>
    @import "main.css";
</style>
<script>
import { getCookieStorage, removeCookieStorage } from '@/utils/cookieStorage'
import { getsessionStorage } from '@/utils/sessionStorage'

export default {
  name: 'home',
  data () {
    return {
      name: ' ',
      tag: false,
      url: '',
      selected: 1,
      is_tj: 1,
      is_th: 1,
      item: '',
      video: '',
      think: '',
      sit: '',
      username: '',
      imageUrl: '',
      thumbUrl:''
    }
  },
  created () {
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    this.id = this.$route.query.id
  },
  watch: {
    // value (newValue, preValue) {
    //   if (newValue !== preValue && newValue !== this.editor.getHtml()) {
    //     this.editor.setHtml(newValue)
    //   }
    // }
  },
  mounted () {
    this.thumbUrl = this.sit + '/index.php?app=web&act=index-imgup'
    this.username = getCookieStorage('username')
    this.url = this.sit + '/index.php?app=web&act=index-initDATAT'
    this.$store.dispatch('get_qqtj', {url: this.url, pid: 7, username: this.username}).then(res => {
      if (!this.$store.getters.homeitem) {
        this.item = JSON.parse(getsessionStorage('get_item'))
      } else {
        this.item = this.$store.getters.homeitem
      }  
    })
    this.$store.dispatch('get_qqtj', {url: this.url, pid: 4, username: this.username}).then(res => {
      if (!this.$store.getters.homeitem) {
        this.video = JSON.parse(getsessionStorage('get_video'))
      } else {
        this.video = this.$store.getters.homeitem
      }  
    })
    this.$store.dispatch('get_qqtj', {url: this.url, pid: 9, username: this.username}).then(res => {
      if (!this.$store.getters.homeitem) {
        this.think = JSON.parse(getsessionStorage('get_think'))
      } else {
        this.think = this.$store.getters.homeitem
      }  
    })
    let getthumburl = this.sit + '/index.php?app=web&act=index-get_thumb'
    this.$store.dispatch('getcontent', {url: getthumburl,uid: this.username}).then(res => {
        console.log(this.$store.getters.contents)
      if (!this.$store.getters.contents) {
        // this.think = JSON.parse(getsessionStorage('get_think'))
      } else {
        this.imageUrl = 'http://'+this.$store.getters.contents.content
      }  
    })
  },
  methods: {
    changetab (parma, pid, obj) {
      this.$store.dispatch('get_qqtj', {url: this.url, pid: pid, username: this.username}).then(res => {
        this.$set(this, parma, this.$store.getters.homeitem)
        this.$set(this, obj.key, obj.value)
      })
    },
    logout () {
      removeCookieStorage('username')
      this.username = ''
    },
     handleAvatarSuccess (res, file) {
      // this.form.thumb = res
      this.imageUrl = URL.createObjectURL(file.raw)
      if(!this.username){
        this.$message('不登录是无法保存的呦')
      }else{
        let upthumb = this.sit + '/index.php?app=web&act=index-up_thumb'
        this.$store.dispatch('up_thumb', {url: upthumb, content: res, uid: this.username}).then(res => {
        
      })
      }
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
  }
}
</script>
