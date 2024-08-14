"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = exports.RoleRepository = exports.VerificationTokenRepository = exports.UserRepository = void 0;
const User_repository_1 = require("./User.repository");
Object.defineProperty(exports, "UserRepository", { enumerable: true, get: function () { return User_repository_1.UserRepository; } });
const verificationToken_repository_1 = require("./verificationToken.repository");
Object.defineProperty(exports, "VerificationTokenRepository", { enumerable: true, get: function () { return verificationToken_repository_1.VerificationTokenRepository; } });
const role_repository_1 = require("./role.repository");
Object.defineProperty(exports, "RoleRepository", { enumerable: true, get: function () { return role_repository_1.RoleRepository; } });
const permission_repository_1 = require("./permission.repository");
Object.defineProperty(exports, "PermissionRepository", { enumerable: true, get: function () { return permission_repository_1.PermissionRepository; } });
//# sourceMappingURL=index.js.map