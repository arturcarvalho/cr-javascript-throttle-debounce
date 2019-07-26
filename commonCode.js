/**
 * Throttle with **no** leading edge and **no** trailing edge.
 */
function throttle(func, wait) {
  console.log("Throttle called only once.");
  var isWaiting = false;

  // This function is what is going to be invoked
  // every time the event is triggered:
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

/**
 * Throttle with **no** leading edge, but with trailing edge.
 * Leading edge: When the event starts invoking the function.
 * Trailing edge: After the event stops invoking the function.
 * Similar to:  _.throttle(func, wait, {leading: false})
 */
function throttle(func, wait) {
  console.log("Throttle called only once.");
  var timeout = null;

  // This function is what is going to be invoked
  // every time the event is triggered:
  return function() {
    if (!timeout) {
      // Schedule call.
      timeout = setTimeout(function() {
        func();
        timeout = null;
      }, wait);
    }
  };
}

function debounce() {
  console.log("Debounce called only once.");
}
