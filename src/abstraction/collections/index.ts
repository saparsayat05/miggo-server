import { Nullable, Optional } from '@abstraction/type';

function contains<Type>(array: Array<Type>, target: Type): boolean {
  return array.some((element) => element === target);
}

function exists(value: Optional<Nullable<unknown>>): boolean {
  return value !== null && value !== undefined;
}

function empty<Type>(array: Optional<Nullable<Array<Type>>>): boolean {
  return !exists(array) || (Array.isArray(array) && array.length === 0);
}

export { contains, exists, empty };
