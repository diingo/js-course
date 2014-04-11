var Events = {
  on: function(event, func) {
    this.events = {};
    if (this.events[event]) {
      this.events[event].push(func);
    } else {
      this.events[event] = [func];
    }
  },
  trigger: function() {
  }
};