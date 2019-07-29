
function debounce(func, wait) {
  console.log("Debounce called.");

  var timeout = null;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(func, wait); // Scheduling
  };
}

/**
 * Throttle with no leading edge, but with trailing edge.
 * @param {*} func  The function to throttle.
 * @param {*} wait The number of milliseconds to throttle invocations to.
 */
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

/**
 * Throttle with leading edge, but no trailing edge.
 * @param {*} func  The function to throttle.
 * @param {*} wait The number of milliseconds to throttle invocations to.
 */
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
