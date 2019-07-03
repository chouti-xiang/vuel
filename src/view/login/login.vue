<template lang="html">
<div class="bg">
  <div class="main fade in modal" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="box"><i class="el-icon-edit"></i></div>
        </div>
        <div class="line l"></div>
        <div class="modal-body">
          <el-form ref="form" :model="form" >
            <el-form-item  >
            <el-input 
            v-model="form.name"
            placeholder="输入你的帐号"

            clearable>
            </el-input>
            </el-form-item>
            <el-form-item >
             <el-input 
            v-model="form.password"
            placeholder="输入你的密码"
            show-password
            clearable
            @keyup.enter.native="onSubmit">
            </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="b">提交</el-button>
                <div @click="defaultlogin" style="text-align:right;cursor: pointer;">游客登录</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style>
.bg{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
}
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    overflow: auto;
    overflow-y: hidden;
        margin: 0 auto;
        width: 328px;
}
 .fade.in {
    opacity: 1;
} 
.modal-dialog {
    position: relative;
    z-index: 1050;
    width: auto;
    padding: 10px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 40%;
    padding-bottom: 30px;
}
.modal-content {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #999999;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    outline: none;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
}
.login .modal-header {
    border: 0 none;
    padding: 15px 15px 15px;
    padding: 11px 15px;
}
.modal-body {
    position: relative;
    padding: 20px;
}
 .line {
    border-top: 1px solid #DFDFDF;
    
    width: 90%;
    margin:0 auto;
    margin-top: 10px;
}
.box{
  width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 0 auto;
    background-color: #F74933;
    text-align: center;
    line-height: 50px;  
        margin-top: 5px;
}
.b{width: 100%;}
</style>
<script>
import { getCookieStorage ,setCookieStorage} from '@/utils/cookieStorage'
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      sit: ''  
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
    },
    defaultlogin () {
      setCookieStorage('username', 'test')
      this.$router.push('/')
    }
  }
  
}
</script>
