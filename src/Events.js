var Events = {
  on: function(event, func) {
    if (!this.events) {
      this.events = {};
    }

    if (this.events[event]) {
      this.events[event].push(func);
    } else {
      this.events[event] = [func];
    }
  },
  trigger: function(event) {
    for(var i=0; i < this.events[event].length; i++ ) {
      this.events[event][i]();
    }
  }
};