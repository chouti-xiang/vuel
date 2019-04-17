<template lang="html">
<div class="rss">
  <div id="main-toolbar" page-name="历史记录" clear-label="清除搜索字词" search-prompt="搜索历史记录" menu-label="主菜单" menu-promo="您可以使用此菜单清除浏览数据" close-menu-promo="关闭">
    <span class="toolbar-title">所有文章</span>
    </div>
    <div class="rss-content">
      <div>
        <div class="rss-content-head">{{date1}}</div>
        <el-checkbox-group  v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="(city,index) in cities" :label="city">
             <span class="rss-content-time">{{city.publishTime | formatd}}</span><span style="float:left;margin-right:50px;" v-html="$options.filters.cat(city.columnId)"></span> <div class="rss-content-title"><router-link :to="{ name: 'article', params: { id: city.id }}" target="_blank">{{city.title}}</router-link></div>
             <i class="el-icon-delete" @click="det($event)" :data-key="city.id" :data-index="index"></i> 
            </el-checkbox>
      </el-checkbox-group>
      </div>
    </div>
</div>

</template>
<style>
.rss{
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  overflow-y: auto;
  background-color:#ccc;
}
.rss a{
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
}
.rss .el-checkbox-group{padding:5px 10px}
.rss .el-checkbox__inner{border: 2px solid #757575}
#main-toolbar{
     height: 56px;
    align-items: center;
    color: #fff;
    display: flex;
    background-color:  rgb(51, 103, 214);
    top:0;
    left:0;
    position: fixed;
    width: 100%;
    opacity: 1;
    z-index: 99;
}
.toolbar-title{margin-left:20px;}
.rss-content{
  width:960px;
  margin:0 auto;
  background-color:white; 
  height:100%;
      margin-top: 76px;
}
.el-checkbox{
  display: block;
  padding:5px 10px;
}
.rss-content-time{
  min-width: 96px;
  float: left;
  margin-left:20px;
  margin-right:50px;
}
.rss-content-title{
    align-items: center;
    display: flex;
    flex: 1;
    height: 18px;
    overflow: hidden;
    min-width: 480px;
    float: left;
    font-size:13px;
}
.rss-content-head{
      align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.14);;
    border-radius: 2px 2px 0 0;
    display: flex;
    font-size: 108%;
    font-weight: 500;
    height: 48px;
    line-height: 48px;
    overflow: hidden;
    padding: 0 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:14px;
}
.rss a{
   /* color：inherit; */
   color: inherit;
}
</style>

<script>
import { getCookieStorage } from '@/utils/cookieStorage'
import { formatDate } from '@/utils/common'
import moment from 'moment'
import 'moment/locale/zh-cn'
// let moment = require('moment')

let username = getCookieStorage('username')
export default {
  name: 'login',
  data () {
    return {
      checkAll: false,
      checkedCities: [],
      cities: '',
      isIndeterminate: true,
      url: '',
      num: 0,
      date1: ''
    }
  },
  filters: {
    formatDate (time) {
      let date 
      date = new Date(time * 1000)
      return formatDate(date, 'yyyy/MM/dd')
    },
    cat (num) {
      let tag = {'1': '<i class="el-icon-picture"></i>', '2': '<i class="el-icon-star-on"></i>', '3': '<i class="el-icon-edit"></i>'}
      if (num < 7) return tag[1]
      if (num < 9) return tag[2]
      if (num < 12) return tag[3]
    },
    formatd (time) {
      time = time * 1000
      let now = moment(time).format('YYYY-MM-DD,hh-mm-ss a')
      return moment(now, 'YYYY-MM-DD,hh-mm-ss a').fromNow()
    }
  },
  beforeCreate: function () {
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
    if (process.env.BASE_API === 'undefined') {
      this.sit = ''
    } else {
      this.sit = process.env.BASE_API
    }
    this.url = this.sit + '/index.php?app=web&act=index-getList'
    this.$store.dispatch('get_qqtj', {url: this.url, username: username}).then(res => {
      this.cities = this.$store.getters.homeitem  
    })
    this.time1()
  },
  methods: {
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    det (e) {
      let _self = e.target
      let _index = _self.getAttribute('data-key')
      let _i = _self.getAttribute('data-index')
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let url = this.sit + '/index.php?app=web&act=index-del'
        this.$store.dispatch('det_list', {url: url, id: _index, username: username}).then(res => {
          this.cities.splice(_i, 1)
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })          
      })
    },
    time () {
      this.date1 = moment().format('MMMM Do YYYY, h:mm:ss a') 
    },
    time1 () {
      setInterval(this.time, 1000)
    }

  }
}
</script>
