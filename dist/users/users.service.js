"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 'user-1',
                login: 'u1',
                email: 'u1@gmail.com',
                firstName: 'u1',
                lastName: 'uuuuu',
                creationDate: new Date(),
            },
            {
                id: 'user-2',
                login: 'u2',
                email: 'u2@gmail.com',
                firstName: 'u2',
                lastName: 'uuuuu',
                creationDate: new Date(),
            },
        ];
    }
    async create(createUserInput) {
        var _a, _b;
        const user = {
            id: `user-${this.users.length}`,
            login: createUserInput.login,
            email: createUserInput.email,
            firstName: (_a = createUserInput.firstName) !== null && _a !== void 0 ? _a : 'No first name',
            lastName: (_b = createUserInput.lastName) !== null && _b !== void 0 ? _b : 'No last name',
            creationDate: new Date(),
        };
        this.users.push(user);
        return user;
    }
    async findAll() {
        return this.users;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserInput) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map