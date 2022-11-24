import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    create(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): string;
    update(id: number, updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
