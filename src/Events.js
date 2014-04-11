var Events = {
  eventsArr: [],
  on: function(event, func) {
    this.events = {};
    if (this.eventsArr.length >= 1) {
      this.eventsArr.push(func);
      this.events[event] = this.eventsArr;
    } else {
      this.eventsArr = [func];
      this.events[event] = [func];

    }
  },
  trigger: function() {
  }
};


// var Events = {
//   on: function(event, func) {
//     this.events = {};
//     if (this.events[event]) {
//       this.events[event].push(func);
//     } else {
//       this.events[event] = [func];
//     }
//   },
//   trigger: function() {
//   }
// };