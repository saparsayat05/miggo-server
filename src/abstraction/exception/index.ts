import { Optional } from '@abstraction/type';
import { CodeDescription } from './code';

type CreateExceptionPayload<TData> = {
  code: CodeDescription;
  overrideMessage?: string;
  data?: TData;
};

class CoreException<TData> extends Error {
  public readonly code: number;
  public readonly data: Optional<TData>;

  private constructor(
    codeDescription: CodeDescription,
    overrideMessage?: string,
    data?: TData,
  ) {
    super();
    this.name = this.constructor.name;
    this.code = codeDescription.code;
    this.data = data;
    this.message = overrideMessage || codeDescription.message;
    Error.captureStackTrace(this, this.constructor);
  }

  public static new<TData>(
    payload: CreateExceptionPayload<TData>,
  ): CoreException<TData> {
    return new CoreException(
      payload.code,
      payload.overrideMessage,
      payload.data,
    );
  }
}

export { CreateExceptionPayload, CoreException };
