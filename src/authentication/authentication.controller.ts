/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { LoginDto } from 'src/authentication/dto/login.dto';
import { AuthEntity } from 'src/authentication/entity/auth.entity';

@Controller('api/auth')
@ApiTags('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: LoginDto) {
    return this.authenticationService.login(email, password);
  }
}
