var Vue = require('vue')
var VueResource = require('vue-resource');
var TLRandomWord = require('./tlrandom-word.vue')

Vue.use(VueResource);

var vm = new Vue({
  el: 'body',
  components: {
    'random-word': TLRandomWord
  }
});
