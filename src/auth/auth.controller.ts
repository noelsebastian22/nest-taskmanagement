import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

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
}
