<template lang="html">
<div>{{content}}</div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      sit: '',
      content: '' 
    }
  },
  mounted () {
    let id = (this.$route.params.id === 'undefined' ? this.$route.params.id : this.$route.query.id)
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
