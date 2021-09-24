import Vue from 'vue'

export default () => {
  Vue.filter('truncate', function (string, value) {
    return string.substring(0, value) + '…';
  })
}
