String.prototype.reverse_string = function () {
    let s = "";
    let i = this.length;
    while (i > 0) {
        s += this.substring(i - 1, i);
        i--;
    }
    return s;
}

const palindrome = function (str) {
    const FILTER_REGEX = /\s|\||[-():_,./]/g;
    str = str.toLowerCase().replace(FILTER_REGEX, '');

    const half = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, half);
    const lastHalf = str.slice(-half).reverse_string();

    return firstHalf === lastHalf;
}

console.log(palindrome("never odd or even"));