// /* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { AuthenticationService } from './authentication.service';
// import { AuthenticationController } from './authentication.controller';
// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { PrismaModule } from 'src/prisma/prisma.module';
// import { UsersModule } from 'src/users/users.module';
// import { JwtStrategy } from './strategy/jwt.strategy';
// import { UsersService } from 'src/users/users.service';

// //export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
// @Module({
//   imports: [
//     PrismaModule,
//     PassportModule,
//     JwtModule.register({
//       global: true,
//       secret: process.env.jwtSecret,
//       signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
//     }),
//     UsersModule,
//   ],
//   controllers: [AuthenticationController],
//   providers: [AuthenticationService, JwtStrategy, UsersService, JwtService],
// })
// export class AuthenticationModule {}
