export function squaredNumbers() {
  const getNumber = document.querySelectorAll(".number");

  Array.from(getNumber).map((liItem) => {
    return (liItem.dataset.squaredNumber = liItem.dataset.number ** 2);
  });
}
