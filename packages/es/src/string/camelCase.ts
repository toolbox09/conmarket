import { getWords } from './_internal';
import { capitalize } from './capitalize';

/**
 * camelCase
 * @param str 
 * @returns 
 * @example
 * const convertedStr1 = camelCase('camelCase') // returns 'camelCase'
 * const convertedStr2 = camelCase('some whitespace') // returns 'someWhitespace'
 * const convertedStr3 = camelCase('hyphen-text') // returns 'hyphenText'
 * const convertedStr4 = camelCase('HTTPRequest') // returns 'httpRequest'
 */
export function camelCase(str: string): string {
    const words = getWords(str);
  
    if (words.length === 0) {
      return "";
    }
  
    const [ first, ...rest ] = words;
  
    return `${first!.toLowerCase()}${rest.map((word) => capitalize(word)).join("")}`;
}