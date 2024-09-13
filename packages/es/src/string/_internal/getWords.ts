const CASE_SPLIT_PATTERN = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;

export function getWords(str: string): string[] {
  return Array.from(str.match(CASE_SPLIT_PATTERN) ?? []);
}