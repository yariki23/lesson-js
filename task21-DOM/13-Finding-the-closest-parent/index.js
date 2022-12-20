export function getSection(num) {
  const findSpan = document.querySelector(`span[data-number="${num}"`);
  return findSpan.parentNode.dataset.section;
}
