function debounce(fn, delay) {
  //code here

  let timer;

  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

const ret_fun = debounce((message) => {
  console.log(message);
}, 3000);
