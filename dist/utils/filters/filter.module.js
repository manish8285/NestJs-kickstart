"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterModule = void 0;
const common_1 = require("@nestjs/common");
const logger_module_1 = require("../logger/logger.module");
const runtimeException_filter_1 = require("./runtimeException.filter");
let FilterModule = class FilterModule {
};
exports.FilterModule = FilterModule;
exports.FilterModule = FilterModule = __decorate([
    (0, common_1.Module)({
        imports: [logger_module_1.LoggerModule],
        providers: [runtimeException_filter_1.RuntimeExceptionFilter],
        exports: [runtimeException_filter_1.RuntimeExceptionFilter],
    })
], FilterModule);
//# sourceMappingURL=filter.module.js.map