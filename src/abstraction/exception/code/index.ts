type CodeDescription = {
  code: number;
  message: string;
};

class Code {
  public static SUCCESS: CodeDescription = {
    code: 200,
    message: 'Success.',
  };

  public static CREATED: CodeDescription = {
    code: 201,
    message: 'Created.',
  };

  public static BAD_REQUEST_ERROR: CodeDescription = {
    code: 400,
    message: 'Bad request.',
  };

  public static UNAUTHORIZED_ERROR: CodeDescription = {
    code: 401,
    message: 'Unauthorized error.',
  };

  public static WRONG_CREDENTIALS_ERROR: CodeDescription = {
    code: 402,
    message: 'Wrong Credentials.',
  };

  public static ACCESS_DENIED_ERROR: CodeDescription = {
    code: 403,
    message: 'Access denied.',
  };

  public static INTERNAL_ERROR: CodeDescription = {
    code: 500,
    message: 'Internal error.',
  };

  public static ENTITY_NOT_FOUND_ERROR: CodeDescription = {
    code: 1000,
    message: 'Entity not found.',
  };

  public static ENTITY_VALIDATION_ERROR: CodeDescription = {
    code: 1001,
    message: 'Entity validation error.',
  };

  public static INVALID_INPUT_ERROR: CodeDescription = {
    code: 1002,
    message: 'Invalid input data was provided.',
  };

  public static ENTITY_ALREADY_EXISTS_ERROR: CodeDescription = {
    code: 1003,
    message: 'Entity already exists.',
  };

  public static INTERACTOR_INPUT_VALIDATION_ERROR: CodeDescription = {
    code: 1004,
    message: 'Interactor input validation error.',
  };

  public static INVALID_ACTION_ERROR: CodeDescription = {
    code: 1005,
    message: 'Interactor invalid action error.',
  };
}

export { CodeDescription, Code };
