import FA_DICTIONARY from './dictionary/fa'
export const translate = (key: string = '') => {
  const result = FA_DICTIONARY[key];
  if (!result) return key;
  return result;
}