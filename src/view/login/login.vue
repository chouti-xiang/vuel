<template lang="html">
<div class="main" style="width:460px">
    <h1>登录</h1>
<el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="用户名">
  <el-input 
  v-model="form.name"
  placeholder="输入你的帐号"
  clearable>
  </el-input>
  </el-form-item>
  <el-form-item label="密码">
   <el-input 
  v-model="form.password"
  placeholder="输入你的密码"
  show-password
  clearable
  @keyup.enter.native="onSubmit">
  </el-input>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
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
        this.$router.push('/')
      }).catch((error) => {

      })
    }
  }
  
}
</script>
