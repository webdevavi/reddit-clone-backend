"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdootResolver = void 0;
const Updoot_1 = require("../entities/Updoot");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
let UpdootResolver = class UpdootResolver {
    user(updoot, { userLoader }) {
        return userLoader.load(updoot.userId);
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => User_1.User),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Updoot_1.Updoot, Object]),
    __metadata("design:returntype", void 0)
], UpdootResolver.prototype, "user", null);
UpdootResolver = __decorate([
    type_graphql_1.Resolver(Updoot_1.Updoot)
], UpdootResolver);
exports.UpdootResolver = UpdootResolver;
//# sourceMappingURL=updoot.js.map