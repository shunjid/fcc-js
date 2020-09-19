const urlSlug = function(title) {
  const normalized = title.trim().toLowerCase().split(/\s+/);
  return normalized.join('-');
}