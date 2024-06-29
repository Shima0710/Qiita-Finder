const app = Vue.createApp({
    data: () => ({
      items: null,
      keyword: '',
      message: '',
      sortMethod: 'newest' // デフォルトのソート方法
    }),
    computed: {
      sortedItems: function() {
        if (!this.items) return []
        if (this.sortMethod === 'newest') {
          return this.items.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        } else if (this.sortMethod === 'relevance') {
          return this.items.slice().sort((a, b) => {
            // タイトルにキーワードが含まれる回数でソート
            const aRelevance = (a.title.match(new RegExp(this.keyword, "gi")) || []).length
            const bRelevance = (b.title.match(new RegExp(this.keyword, "gi")) || []).length
            return bRelevance - aRelevance
          })
        } else if (this.sortMethod === 'likes') {
          return this.items.slice().sort((a, b) => b.likes_count - a.likes_count)
        }
      }
    },
    watch: {
      keyword: function(newKeyword, oldKeyword) {
        console.log(newKeyword)
        this.message = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      },
      sortMethod: function() {
        this.sortedItems
      }
    },
    mounted: function() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
      getAnswer: function() {
        if(this.keyword === '') {
          console.log('karamoji')
          this.items = null
          return
        }
  
        this.message = 'Loading...'
        const vm = this
        const params = { page: 1, per_page: 20, query: this.keyword }
        axios.get('https://qiita.com/api/v2/items', { params })
             .then(function(response){
               vm.items = response.data
             })
             .catch(function(error){
               vm.message = 'Error!' + error
             })
             .finally(function() {
               vm.message = ''
             })
      }
    }
  })
  app.mount('#app')
  