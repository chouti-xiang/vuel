<template lang="html">

<div id="img-content">
                <h2 class="rich_media_title" id="activity-name">{{content.title}}</h2>
                <div id="meta_content" class="rich_media_meta_list">
                    <span class="rich_media_meta rich_media_meta_text">
                                                {{content.author}}
                          </span>
                                        
                                        <span class="rich_media_meta rich_media_meta_nickname" id="profileBt">
                      <router-link to="/">抽屉箱</router-link>
                                              
                    </span>

                    <em id="publish_time" class="rich_media_meta rich_media_meta_text">2018-12-01</em>

                </div>
                
                <div class="rich_media_content " id="js_content" v-html="content.content"> 
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
#img-content{max-width: 750px;margin:0 auto;}
#js_content{white-space: pre-wrap;}
</style>
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
