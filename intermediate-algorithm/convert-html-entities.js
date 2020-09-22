function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.replace(/[&<>"']/g, function(c) {
    return entities[c];
  });
}

console.log(convertHTML("Dolce & Gabbana"));
