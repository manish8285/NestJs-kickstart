"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRegexConstraint = void 0;
exports.MatchRegex = MatchRegex;
const class_validator_1 = require("class-validator");
let MatchRegexConstraint = class MatchRegexConstraint {
    validate(value, args) {
        let strongRegex = new RegExp(args.constraints[0]);
        return typeof value === 'string' && strongRegex.test(value);
    }
    defaultMessage(args) {
        return `${args.property} must be Alphanumeric and have minimum length of 8 charaters. It contain atleast 1 capital letter, 1 small letter , atleast one special character !@#$%^&*'`;
    }
};
exports.MatchRegexConstraint = MatchRegexConstraint;
exports.MatchRegexConstraint = MatchRegexConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'MatchRegex' })
], MatchRegexConstraint);
function MatchRegex(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'MatchRegex',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: MatchRegexConstraint
        });
    };
}
//# sourceMappingURL=matchRegex.validator.js.map