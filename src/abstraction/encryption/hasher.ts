interface Hasher {
  compare(plainText: string, hash: string): Promise<boolean>;
  hash(plainText: string): Promise<string>;
}

export type { Hasher };
