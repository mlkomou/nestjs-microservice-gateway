// app.controller.ts (Gateway)
import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { CreateUserRequest } from "./createUserRequest";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService
              ) {}

  @Get()
 async getHello(): Promise<string> {
    // const resultA = await this.clientA.emit("getHello", "").toPromise();
    // const resultB = await this.clientB.emit('getHello', '').toPromise();
    return this.appService.getHello();
  }

  @Post('service_a/create-user')
  createUser(@Body() createUserRequest: CreateUserRequest) {
   return this.appService.createUser(createUserRequest);
  }

  @Get('service_b/get-users')
  getUsers() {
   return this.appService.getUsers();
  }
}
