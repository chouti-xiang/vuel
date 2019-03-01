<template lang="html">
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
         <section data-scroll-reveal="enter from the top over 0.66s" class="header-app ibx-container" data-click="{&quot;mod&quot;:&quot;header&quot;}" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
            <ul class="ibx-header-app clr">
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-tool">工具</div>
                </li>
                <li class="ibx-header-app-item clr">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;sousuo&quot;}" target="_blank" href="http://www.baidu.com/?fr=ibaidu">搜索</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-space"></div>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-sns">外链</div>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;tieba&quot;}" target="_blank" href="http://tieba.baidu.com/home/main?un=mpshenqi&amp;fr=ibaidu&amp;ie=utf-8">百度</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;baike&quot;}" target="_blank" href="http://baike.baidu.com/usercenter?fr=ibaidu">谷歌</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;zhidao&quot;}" target="_blank" href="http://zhidao.baidu.com/uhome?fr=ibaidu">阿里</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;wenku&quot;}" target="_blank" href="http://wenku.baidu.com/user/index?fr=ibaidu">教育</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-space"></div>
                </li>
                <li class="ibx-header-app-item">
                    <div class="ibx-hai-title ibx-hai-life">分类</div>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;ditu&quot;}" target="_blank" href="http://map.baidu.com/?fr=ibaidu">地理</a></span>
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;licai&quot;}" target="_blank" href="https://licai.baidu.com/user/0/center/0?fr=ibaidu">历史</a></span>
                </li>
                <li class="ibx-header-app-item">
                    <span class="ibx-hai-link"><a data-click="{&quot;act&quot;:&quot;tuangou&quot;}" target="_blank" href="http://www.nuomi.com/?cid=002544&amp;fr=ibaidu">财经</a></span>
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
                                <img class="ibx-uc-img" >                     
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
                                <!-- <li  class="ibx-inner-title-tabitem ibx-video-my OP_LOG_TITLE">我的分类</li> -->
                                <li  class="ibx-inner-title-tabitem ibx-video-hotTop OP_LOG_TITLE current">亲情推荐</li>
                            </ul>
                            <a herf='#' class="OP_LOG_TITLE card-enter-video-link" click='miniPrograme' >关注我的小程序</a>
                            <div style="width: 250px;height: 140px;position: absolute;right: 0;top: 50px;" v-if='tag'>
                            <img src="/web/resources/xiaochengxu.jpg" style="width: 100px;height: 100px" />
                            </div>
                        </div>
                        <div class="ibx-inner-content" id="ibx-video-list">
                        <div class="hot-video-tab">
                            <span class="hot-video-tab-item hot-video-tab-tv OP_LOG_TITLE"  v-bind:class="{'current':selected ==1}" data-id="0" click='movie()'>电影</span>
                            <span class="hot-video-tab-item hot-video-tab-movie OP_LOG_TITLE"  v-bind:class="{'current':selected ==2}"><router-link to="/foo" click='dianshiju()'>电视剧</router-link></span>
                        </div>
                        <div id="hot-video" class="my-video">
                            <ul class="ibx-video-list" style="width: 2868px; left: 0px;" id="hot-video1">
                            <li class="ibx-video-item" v-for="(value, key, index) in item"><a target="_blank" :href="value.url"><img v-bind:src="value.thumb" :alt="value.title" width="130"></a><div class="ibx-video-detail"><em class="ibx-video-dtitle-rank front ">{{key+1}}</em><a target="_blank" class="ibx-video-dtitle" :href="value.url" :title="value.title">{{value.title}}</a><label class="ibx-video-actor" :title="key">{{key}}</label><label class="ibx-video-tag" :title="value.type">{{value.type}}</label></div></li>
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
                            <a target="_blank" href="http://xinwen.baidu.com/" class="ibx-inner-title-ctx">激情推荐</a>
                            <ul class="ibx-inner-title-tab">
                                <li data-click="{&quot;act&quot;: &quot;card_xinwen_pernews&quot;}" class="ibx-inner-title-tabitem ibx-xinwen-pernews OP_LOG_TITLE" click='tools()' v-bind:class="{'current':selected ==1}">工具类</li>
                                <li data-click="{&quot;act&quot;: &quot;card_xinwen_hot&quot;}" class="ibx-inner-title-tabitem ibx-xinwen-hot OP_LOG_TITLE" click="life()" v-bind:class="{'current':selected ==2}">生活类</li>
                            </ul>
                            <div class="xinwen-title-link-container OP_LOG_TITLE"><a href="javascript:void(0)" class="OP_LOG_TITLE" click="gongzhong">关注我的公众号</a></div>
                            <div style="width: 150px;height: 100px;z-index: 10;position: absolute;right: 0;top: 50px;" v-if="tag">
                                <img src="/web/resources/4.jpg" style="width: 100px;height: 100px">
                            </div>
                        </div>
                        <div class="ibx-inner-content" id="ibx-xinwen">
                        <div id="xinwen-pernews" class="xinwen-pernews"><div class="xinwen-common-tab"><div class="xinwen-normal-top"><span class="xinwen-normal-top-title">推荐鸡汤</span><span class="xinwen-normal-top-line"></span></div>
                        <!-- <div class="ibx-card-pager"><span class="ibx-card-pager-prev"></span><span class="ibx-card-pager-item current" data-page="0"></span><span class="ibx-card-pager-next"></span></div> -->
                        </div>
                        <div id="xinwen-pernews-main" class="xinwen-pernews-main">
                        <ul class="xinwen-normal-list xinwen-pernews-list" style="width: 976px; left: 0px;" id="hot_article">
                            <li class="xinwen-pernews-item"  v-for="article in item">
                                <div class="xinwen-pernews-item-news"><a class="xinwen-pernews-item-link" target="_blank" href="http://tj.people.com.cn/n2/2018/0823/c375366-31968703.html"><img class="xinwen-pernews-item-img" :src="article.thumb" alt=""></a><div class="xinwen-pernews-item-detail detail-type-img"><a class="xinwen-pernews-item-title" target="_blank" href="http://tj.people.com.cn/n2/2018/0823/c375366-31968703.html" title="article.title">{{article.title}}</a>
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
                          <a data-click="{&quot;act&quot;: &quot;card_koubei_link&quot;}" target="_blank" href="http://koubei.baidu.com/" class="ibx-inner-title-ctx">醍醐灌顶</a>
                          <ul class="ibx-inner-title-tab">
                            <li data-click="{&quot;act&quot;: &quot;card_koubei_mine&quot;}" class="ibx-inner-title-tabitem ibx-koubei-mine OP_LOG_TITLE" v-bind:class="{'current':selected ==1}" click="gongzuo()">我的工作</li>
                            <li data-click="{&quot;act&quot;: &quot;card_koubei_turth&quot;}" class="ibx-inner-title-tabitem ibx-koubei-turth OP_LOG_TITLE" v-bind:class="{'current':selected ==2}" click="shenghuo()">我的生活</li>
                            <li data-click="{&quot;act&quot;: &quot;card_koubei_hot&quot;}" class="ibx-inner-title-tabitem ibx-koubei-hot OP_LOG_TITLE"  v-bind:class="{'current':selected ==3}" click="ganwu()">我的感悟</li>
                          </ul>
                            <div class="koubei-title-link-container OP_LOG_TITLE">
                            <!-- <a href="http://koubei.baidu.com/truth/wall?fr=ibaidu" class="OP_LOG_TITLE enter-koubei-link koubei-wall-link" data-click="{&quot;act&quot;: &quot;card_open_koubei_wall&quot;}" target="_blank" style="display: none;">进入真相墙 &gt;</a> -->
                           <!--  <a href="http://koubei.baidu.com/home?fr=ibaidu" class="OP_LOG_TITLE enter-koubei-link koubei-home-link" data-click="{&quot;act&quot;: &quot;card_open_koubei_home&quot;}" target="_blank" style="display: inline;">进入我的口碑 &gt;</a> -->
                            </div></div><div class="ibx-inner-content" id="ibx-koubei"><div id="koubei-mine-container" class="koubei-mine-container "><div class="koubei-mine-top"><div class="ibx-card-pager"><span class="ibx-card-pager-prev"></span><span class="ibx-card-pager-item current" data-page="0"></span><span class="ibx-card-pager-item" data-page="1"></span><span class="ibx-card-pager-item" data-page="2"></span><span class="ibx-card-pager-next"></span></div></div><div id="koubei-mine-list">
                            <ul class="koubei-mine-list"  >
                            <li class="koubei-mine-item" v-for="(value, key, index) in item"><div class="koubei-mine-item-container"><p class="koubei-mine-item-title"><a class="OP_LOG_TITLE" target="_blank" :title="value.title" :href="value.url" data-click="{&quot;act&quot;: &quot;card_koubei_item_message&quot;}" v-html="value.tag"></a></p><span class="koubei-mine-item-time">{{value.date}}</span></div></li>
                            </ul>
                            </div></div></div></div>
                    </div>
                </div>
                                                <div data-scroll-reveal="" class="col span_4_2 OP_LOG_LINK" data-click="{&quot;mod&quot;:&quot;card_mgr&quot;,&quot;act&quot;:&quot;msg_click&quot;}" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                    <a href="/index.php?app=web&act=index-add" style="display: block;" ><div class="ibx-even editCard" id="editCard">
                        <div class="ibx-inner editCard-inner">
                            <div class="editCard-inner-add"></div>
                            <div class="editCard-inner-tip"><i ></i><p>添加卡片{{selected}}</p></div>
                        </div>
                      
                        </div>
                       </a>
                    </div>
                </div>
            </div>
</template>
<script>
import { getsessionStorage } from '@/utils/sessionStorage'
export default {
  name: 'home',
  data () {
    return {
      name: ' ',
      tag: false,
      selected: 1,
      item: ''
    }
  },
  mounted () {
    const url = 'http://www.aisu10.com/index.php?app=web&act=index-initDATAT'
    // this.$store.commit('get_qqtj', {url: url, pid: 7})
    // this.item = this.$store.getters.homeitem
    this.$store.dispatch('get_qqtj', {url: url, pid: 7}).then(res => {
      this.item = JSON.parse(getsessionStorage('get_item'))
    })
  //   this.$axios.post(url, qs.stringify({
  //     pid: 7
  //   }),
  //   {
  //     emulateJSON: true
  //   })
  //     .then(res => {
  //       this.item = res.data.data
  //       this.selected = 3
  //     })
  }
}
</script>
<style>
    @import "main.css"
</style>
