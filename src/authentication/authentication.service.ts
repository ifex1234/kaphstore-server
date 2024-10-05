// /* eslint-disable prettier/prettier */
// import {
//   Injectable,
//   NotFoundException,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { UsersService } from 'src/users/users.service';
// import { LoginDto } from './dto/login.dto';

// @Injectable()
// export class AuthenticationService {
//   constructor(
//     private jwtService: JwtService,
//     private userService: UsersService,
//   ) {}
//   async login(dto: LoginDto) {
//     const user = await this.validateUser(dto);
//     const payload = {
//       username: user.email,
//       sub: {
//         name: user.firstName,
//       },
//     };

//     return {
//       user,
//       backendToken: {
//         accessToken: await this.jwtService.signAsync(payload, {
//           expiresIn: '20m',
//           secret: process.env.jwtSecret,
//         }),
//         refreshToken: await this.jwtService.signAsync(payload, {
//           expiresIn: '7d',
//           secret: process.env.jwtRefreshSecret,
//         }),
//       },
//     };
//   }
//   async validateUser(dto: LoginDto) {
//     const user = await this.userService.findByEmail(dto.email);
//     if (!user) {
//       throw new NotFoundException(`No user found for email: ${dto.email}`);
//     }
//     const isPasswordValid = await bcrypt.compare(dto.password, user.password);
//     if (!isPasswordValid) {
//       throw new UnauthorizedException('Invalid password');
//     }

//     if (user && isPasswordValid) {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { password, ...result } = user;
//       return result;
//     }
//   }
//   async refreshToken(user: any) {
//     const expireTime = 20 * 1000;
//     const payload = {
//       username: user.username,
//       sub: user.sub,
//     };
//     return {
//       accessToken: await this.jwtService.signAsync(payload, {
//         expiresIn: '20m',
//         secret: process.env.jwtSecret,
//       }),
//       refreshToken: await this.jwtService.signAsync(payload, {
//         expiresIn: '7d',
//         secret: process.env.jwtRefreshSecret,
//       }),
//       expiresIn: new Date().setTime(new Date().getTime() + expireTime),
//     };
//   }
// }
