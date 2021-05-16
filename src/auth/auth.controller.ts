import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentailsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentailsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user) {
    console.log(user);
  }
}
