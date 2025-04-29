import { Hasher } from '@abstraction/encryption/hasher';
import { compare, genSalt, hash } from 'bcryptjs';

export class BCryptHasher implements Hasher {
  private readonly SALT_ROUNDS = 10;

  async compare(plainText: string, hash: string): Promise<boolean> {
    return await compare(plainText, hash);
  }

  async hash(plainText: string): Promise<string> {
    const salt = await genSalt(this.SALT_ROUNDS);

    return hash(plainText, salt);
  }
}
