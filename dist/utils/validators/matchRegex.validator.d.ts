import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class MatchRegexConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function MatchRegex(property: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
