const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
}