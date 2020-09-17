function titleCase(str) {
  return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
}

console.log(titleCase("I'm a little tea pot"));
