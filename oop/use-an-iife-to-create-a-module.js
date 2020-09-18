const funModule = (function() {
  return {
    isCuteMixin: (obj) => obj.isCute = () => true,
    singMixin: (obj) => obj.sing = () => "Singing to an awesome tune",
  }
})();
