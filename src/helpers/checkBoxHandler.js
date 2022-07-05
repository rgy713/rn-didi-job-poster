export const CheckRecordFunc = (v, arr) => {
  const checkRecord = arr.find(x => x === v);
  return checkRecord;
};
export const addCheckFunction = (v, arr, setArr) => {
  const findValue = arr.find(x => x === v);
  const newArr = arr.filter(x => x != v);
  setArr(findValue ? newArr : [...arr, v]);
};
