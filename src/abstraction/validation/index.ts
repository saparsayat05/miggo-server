import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidationOptions,
} from 'class-validator';

function IsId(validationOptions?: ValidationOptions) {
  return function (target: object, propertyKey: string) {
    IsNumber({}, validationOptions)(target, propertyKey);
  };
}

function IsNullable(validationOptions?: ValidationOptions) {
  return ValidateIf((_object, value) => value !== null, validationOptions);
}

function IsOptionalAndNullable(validationOptions?: ValidationOptions) {
  return function (target: any, propertyKey: string) {
    IsOptional()(target, propertyKey);
    IsNullable(validationOptions)(target, propertyKey);
  };
}

function IsOptionalAndNotNull(validationOptions?: ValidationOptions) {
  return function (target: object, propertyKey: string) {
    IsOptional()(target, propertyKey);
    IsNullable(validationOptions)(target, propertyKey);
  };
}

function IsNotEmptyString(validationOptions?: ValidationOptions) {
  return function (target: any, propertyKey: string) {
    IsString(validationOptions)(target, propertyKey);
    IsNotEmpty(validationOptions)(target, propertyKey);
  };
}

export {
  IsId,
  IsNullable,
  IsOptionalAndNullable,
  IsOptionalAndNotNull,
  IsNotEmptyString,
};
