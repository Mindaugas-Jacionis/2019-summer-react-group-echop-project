import toggleArrayItem from './toggleArrayItem';

describe('toggleArrayItem', () => {
  it('adds item at the end of array when item is not present in array', () => {
    const result = toggleArrayItem(['a', 'b', 'c'], 'd');
    expect(result).toEqual(['a', 'b', 'c', 'd']);
    expect(toggleArrayItem(['a', 'b', 'c'], 2)).toEqual(['a', 'b', 'c', 2]);
  });

  it('removes item from array when item is present in array', () => {
    const result = toggleArrayItem(['a', 'b', 'c'], 'b');
    expect(result).toEqual(['a', 'c']);
  });

  it('returns the same array when invalid input value provided', () => {
    const result = toggleArrayItem(['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', 'c']);
    expect(toggleArrayItem(['a', 'b', 'c'], null)).toEqual(['a', 'b', 'c']);
    expect(toggleArrayItem(['a', 'b', 'c'], '')).toEqual(['a', 'b', 'c']);
    expect(toggleArrayItem(['a', 'b', 'c'], false)).toEqual(['a', 'b', 'c']);
    expect(toggleArrayItem(['a', 'b', 'c'], true)).toEqual(['a', 'b', 'c']);
  });
});
