import axios from 'axios'

export function getArticle () {
  axios.get('/articles')
    .then(res => {
      console.log(res)
    })
}
