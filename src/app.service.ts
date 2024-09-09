import { Inject, Injectable } from "@nestjs/common";
import { CreateUserRequest } from "./createUserRequest";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  users: any[] = [];
  constructor( @Inject("SERVICE_A") private readonly clientA: ClientProxy,
               @Inject("SERVICE_B") private readonly clientB: ClientProxy) {
  }
  getHello(): string {
    return `Hello world`;
  }

  createUser(createUserRequest: CreateUserRequest) {
    console.log(createUserRequest);
    this.users.push(createUserRequest);
    this.clientA.emit('user_created', createUserRequest);
  }

  getUsers() {
    console.log('users', this.users);
    this.clientB.emit('get_users', this.users);
  }
}
