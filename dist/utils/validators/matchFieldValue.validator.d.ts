import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class MatchFieldValueConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function MatchFieldValue(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
