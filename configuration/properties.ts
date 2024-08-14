const config = {
    "development": {
        "redis": {
            "name": 'test',
            "readOnly": true,
            "host": "localhost",
            "port": 6379,
            "client_name": "demo"
        },
        "ormConfig": {
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "postgres",
            "database": "boilerplate",
            "synchronize": true,
            "logging": true,
            "entities": [
                "dist/**/*.entity{.ts,.js}"
            ],
            "migrations": [
                "dist/migration/**/*{.ts,.js}"
            ],
            "subscribers": [
                "dist/subscriber/**/*{.ts,.js}"
            ]
        },
        "emailConfig": {
            "transport": {
                "host": "smtp.ethereal.email",
                "port": 587,
                "secure": false,
                "auth": {
                    // "user": "ola.conroy@ethereal.email",
                    // "pass": "a3PFUSrpMxJhuhrRmT"
                    user: 'jaime.quigley@ethereal.email',
                    pass: 'Pmd2vYcmCAZ5GW1E8J'
                }
            }
        },
        "accountVerificationEmail": {
            "subject": "Account Verification Email",
            "fromEmail": "noreply@nestjs.com",
            "emailBody": "To verify your account click on the $url"
        },
        "server": {
            "host": "localhost",
            "port": 3001
        },
        "client": {
            "host": "localhost",
            "port": 3000
        },
    },
    "production": {
        "redis": {
            "name": 'test',
            "readOnly": true,
            "host": "localhost",
            "port": 6379,
            "client_name": "demo"
        },
        "ormConfig": {
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "postgres",
            "database": "boilerplate",
            "synchronize": true,
            "logging": true,
            "entities": [
                "dist/**/*.entity{.ts,.js}"
            ],
            "migrations": [
                "dist/migration/**/*{.ts,.js}"
            ],
            "subscribers": [
                "dist/subscriber/**/*{.ts,.js}"
            ]
        },
        "emailConfig": {
            "transport": {
                "host": "smtp.ethereal.email",
                "port": 587,
                "secure": false,
                "auth": {
                    // "user": "ola.conroy@ethereal.email",
                    // "pass": "a3PFUSrpMxJhuhrRmT"
                    user: 'jaime.quigley@ethereal.email',
                    pass: 'Pmd2vYcmCAZ5GW1E8J'
                }
            }
        },
        "accountVerificationEmail": {
            "subject": "Account Verification Email",
            "fromEmail": "noreply@nestjs.com",
            "emailBody": "To verify your account click on the $url"
        },
        "server": {
            "host": "localhost",
            "port": 3001
        },
        "client": {
            "host": "localhost",
            "port": 3000
        },
    },
}

export default config;
