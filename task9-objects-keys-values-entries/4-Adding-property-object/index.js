/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData1, userId1) {
  userData1.id = userId1;
  return userData1;
}
function addPropertyV2(userData2, userId2) {
  const id = { id: userId2 };
  Object.assign(userData2, id);
  return userData2;
}
function addPropertyV3(userData3, userId3) {
  const newObj3 = {};
  Object.assign(newObj3, userData3);
  newObj3.id = userId3;
  return newObj3;
}
function addPropertyV4(userData4, userId4) {
  const newObj4 = { ...userData4 };
  newObj4.id = userId4;
  return newObj4;
}
// examples
const user = {
  name: "Sam",
};
addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }
