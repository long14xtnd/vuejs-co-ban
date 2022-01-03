var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods:{
        say : function (text) {
                return 'Hello' + text;
        }
    }
  })
  console.log(app)

 setTimeout(() => {
     app.message = 'Hải Long đẹp trai vcl'
 }, 3000);
 var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})