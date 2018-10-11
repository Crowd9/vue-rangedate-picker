VueRangedatePicker.default.install(Vue)

var app = new Vue({
  el: '#app',
  data () {
    return {
      selectedDate: {
        start: new Date(),
        end: new Date()
      }
    }
  },
  methods: {
    onDateSelected: function (daterange) {
      this.selectedDate = daterange
    }
  }
})
