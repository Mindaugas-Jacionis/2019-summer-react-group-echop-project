function toggleArrayItem(array, item) {
  if (typeof item === 'boolean' || !item) {
    return array;
  }

  if (array.includes(item)) {
    return array.filter(arrayItem => arrayItem !== item);
  }

  return [...array, item];
}

export default toggleArrayItem;
