"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: `.env` });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const runtimeException_filter_1 = require("./utils/filters/runtimeException.filter");
const custom_logger_service_1 = require("./utils/logger/custom-logger.service");
const swagger_1 = require("@nestjs/swagger");
const bootstrap_service_1 = require("./bootstrap.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'debug', 'warn'],
    });
    app.useGlobalFilters(app.get(runtimeException_filter_1.RuntimeExceptionFilter));
    app.useLogger(app.get(custom_logger_service_1.CustomLogger));
    app.enableCors();
    app.setGlobalPrefix("api");
    const options = new swagger_1.DocumentBuilder()
        .setTitle('X SECURITY')
        .setDescription('The Boilerplate API description')
        .addBearerAuth({
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
    }, 'access-token')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/doc', app, document);
    let bootstrapService = app.get(bootstrap_service_1.BootstrapService);
    bootstrapService.createAdmin();
    const port = process.env.PORT || 6000;
    await app.listen(port, () => { console.log("app is running on port" + port); });
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map