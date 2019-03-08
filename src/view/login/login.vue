<template lang="html">
<div class="main">
    <h1>登录</h1>
<div class="login">
    <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="name">
  </el-input>
 
  用户名: <input type="text" name="name" v-model="name"/><br>
  密码: <input type="password" name="password" v-model="password" /><br>
  <input type="submit" value="提交" @click="submit"/>
</div>
</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: '',
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
    submit () {
      const url = this.sit + '/index.php?app=web&act=index-check'
      this.$store.dispatch('loginUser', {url: url, name: this.name, password: this.password}).then((res) => {
        this.$router.push('/')
      }).catch((error) => {

      })
    }
  }
  
}
</script>
