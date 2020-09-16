function StopWatch() {
  let duration = 0;
  let running = false;
  let startTime, endTime;

  this.start = function () {
    if (running) {
      console.log("Watch is running");
      return;
    }

    running = true;
    startTime = Date.now();
  };

  this.stop = function () {
    if (!running) {
      console.log("Watch is already stop!!");
      return;
    }

    running = false;
    endTime = Date.now();

    duration = (endTime - startTime) / 1000;
  };

  this.reset = function () {
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  };

  this.getDuration = function () {
    return duration;
  };
}

let sw = new StopWatch();
console.log(sw.getDuration());
console.log(sw.start);

