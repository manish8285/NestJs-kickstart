"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = exports.RoleRepository = exports.RolePermissionRepository = exports.UserRoleRepository = exports.VerificationTokenRepository = exports.UserRepository = void 0;
const base_1 = require("./base");
Object.defineProperty(exports, "UserRepository", { enumerable: true, get: function () { return base_1.UserRepository; } });
Object.defineProperty(exports, "VerificationTokenRepository", { enumerable: true, get: function () { return base_1.VerificationTokenRepository; } });
Object.defineProperty(exports, "RoleRepository", { enumerable: true, get: function () { return base_1.RoleRepository; } });
Object.defineProperty(exports, "PermissionRepository", { enumerable: true, get: function () { return base_1.PermissionRepository; } });
const userRole_repository_1 = require("./userRole.repository");
Object.defineProperty(exports, "UserRoleRepository", { enumerable: true, get: function () { return userRole_repository_1.UserRoleRepository; } });
const rolePermission_repository_1 = require("./rolePermission.repository");
Object.defineProperty(exports, "RolePermissionRepository", { enumerable: true, get: function () { return rolePermission_repository_1.RolePermissionRepository; } });
//# sourceMappingURL=index.js.map