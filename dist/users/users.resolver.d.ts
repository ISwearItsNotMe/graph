import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersArgs } from './dto/users.args';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findAll(usersArgs: UsersArgs): Promise<User[]>;
    findOne(id: number): string;
    updateUser(updateUserInput: UpdateUserInput): string;
    removeRecipe(id: number): string;
}
