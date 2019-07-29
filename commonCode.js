function debounce(func, wait) {
  console.log("Debounce called.");

  var timeout = null;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(func, wait); // Scheduling
  };
}

function throttle1(func, wait) {
  console.log("Throttle1 called.");
  var timeout = null;

  return function() {
    if (!timeout) {
      // Schedule invoking the function.
      timeout = setTimeout(function() {
        func();
        timeout = null;
      }, wait);
    }
  };
}

function throttle2(func, wait) {
  console.log("throttle2 called.");
  var isWaiting = false;

  return function() {
    if (!isWaiting) {
      func();
      isWaiting = true;

      setTimeout(function() {
        isWaiting = false;
      }, wait);
    }
  };
}
