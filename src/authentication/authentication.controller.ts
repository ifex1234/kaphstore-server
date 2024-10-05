// /* eslint-disable prettier/prettier */
// import {
//   Body,
//   Controller,
//   Header,
//   HttpCode,
//   HttpStatus,
//   Post,
//   Res,
// } from '@nestjs/common';
// import { AuthenticationService } from './authentication.service';
// import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
// import { LoginDto } from 'src/authentication/dto/login.dto';
// import { AuthEntity } from 'src/authentication/entity/auth.entity';
// import { UsersService } from 'src/users/users.service';
// import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { UsersEntity } from 'src/users/entities/user.entity';
// import { Response } from 'express';

// @Controller('auth')
// @ApiTags('auth')
// export class AuthenticationController {
//   constructor(
//     private userService: UsersService,
//     private authenticationService: AuthenticationService,
//   ) {}
//   @Post('signup')
//   @Header('Cache-Control', 'none')
//   @HttpCode(201)
//   @ApiCreatedResponse({ type: UsersEntity })
//   @ApiOkResponse({ type: AuthEntity })
//   @HttpCode(HttpStatus.OK)
//   signUp(
//     @Body() dto: CreateUserDto,
//     @Res({ passthrough: true }) res: Response,
//   ) {
//     try {
//       return this.userService.create(dto);
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       return res.status(HttpStatus.BAD_REQUEST).json({
//         statuscode: 400,
//         message: 'Error: User not created!',
//         error: 'Bad Request',
//       });
//     }
//   }

//   @Post('signin')
//   @ApiOkResponse({ type: AuthEntity })
//   @HttpCode(HttpStatus.OK)
//   async login(@Body() dto: LoginDto) {
//     return await this.authenticationService.login(dto);
//   }
// }
