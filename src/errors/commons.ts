const WRAPPING_CHARACTERS = ['[', ']'];

export function wrapErrorField(field: string): string {
  const [before, after] = WRAPPING_CHARACTERS;
  return before + field + after;
}
