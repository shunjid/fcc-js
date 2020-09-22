const telephoneCheck = function (str) {
    if (str.startsWith("-")) return false;

    const regex = /-|\s/g;
    let filtered = str.replace(regex, "");

    const [firstParentheses, secondParentheses] = [
        filtered.indexOf("("),
        filtered.indexOf(")"),
    ];
    const difference = secondParentheses - firstParentheses;

    if (firstParentheses !== -1 && difference === 4)
        filtered = filtered.replace(/[()]/g, "");

    if (filtered.length === 10) return true;

    if (filtered.length === 11 && filtered.startsWith("1")) return true;

    return false;
};

let result = telephoneCheck("-1 (757) 622-7382");
console.log(result);
