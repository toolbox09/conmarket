

export function phoneNumber(value : string) {
  let cleaned = ('' + value).replace(/\D/g, '').slice(0,11);
  let number = '';
  const size = cleaned.length;
  const middle = cleaned.length === 11 ? 7 : 6;
  for(let index = 0; index < size; index++ ) {
    if(index === 3 || index === middle ) {
      number += '-';
    }
    number += cleaned[index];
  }
  return number;
};