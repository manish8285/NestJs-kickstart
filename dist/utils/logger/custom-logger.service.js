"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const common_1 = require("@nestjs/common");
class CustomLogger extends common_1.ConsoleLogger {
    constructor(context) {
        super(context);
    }
    setContext(context) {
        this.context = context;
    }
    error(message, trace) {
        super.error(message, trace, this.context);
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=custom-logger.service.js.map