declare const config: {
    development: {
        redis: {
            name: string;
            readOnly: boolean;
            host: string;
            port: number;
            client_name: string;
        };
        ormConfig: {
            type: string;
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
            synchronize: boolean;
            logging: boolean;
            entities: string[];
            migrations: string[];
            subscribers: string[];
        };
        emailConfig: {
            transport: {
                host: string;
                port: number;
                secure: boolean;
                auth: {
                    user: string;
                    pass: string;
                };
            };
        };
        accountVerificationEmail: {
            subject: string;
            fromEmail: string;
            emailBody: string;
        };
        server: {
            host: string;
            port: number;
        };
        client: {
            host: string;
            port: number;
        };
    };
    production: {
        redis: {
            name: string;
            readOnly: boolean;
            host: string;
            port: number;
            client_name: string;
        };
        ormConfig: {
            type: string;
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
            synchronize: boolean;
            logging: boolean;
            entities: string[];
            migrations: string[];
            subscribers: string[];
        };
        emailConfig: {
            transport: {
                host: string;
                port: number;
                secure: boolean;
                auth: {
                    user: string;
                    pass: string;
                };
            };
        };
        accountVerificationEmail: {
            subject: string;
            fromEmail: string;
            emailBody: string;
        };
        server: {
            host: string;
            port: number;
        };
        client: {
            host: string;
            port: number;
        };
    };
};
export default config;
