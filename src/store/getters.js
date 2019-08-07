const getters = {
  homeitem: state => state.home.item,
  contents: state => state.home.contents,
  categray: state => state.add.categray,
  imagelist: state => state.add.imageList,
  article: state => state.article.article,
  stylebook: state => state.stylebook.stylebook
}

export default getters
