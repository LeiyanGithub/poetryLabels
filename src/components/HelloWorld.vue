<template>
  <div id='app'>
    <p>{{ message }}</p>
    <input v-model="message">
    <button v-on:click="show">点击</button>
  </div>
</template>
 
<script>
export default {
  name: 'hello',
  data: {
    name : 'Google',
    url : 'http://www.google.com'
  },
  methods :{
    show : function() {
      this.message =  this.message + " test"
    }
  },
  computed: {
    site: {
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.names = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
}
</script>