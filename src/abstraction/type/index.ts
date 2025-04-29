type Nullable<T> = T | null;

type Optional<T> = T | undefined;

type Id = number;
type Ids = Array<Id>;

type Uri = string;

interface Pagination {
  readonly limit?: Optional<Nullable<number>>;
  readonly offset?: Optional<Nullable<number>>;
}

export type { Nullable, Optional, Id, Ids, Uri, Pagination };
