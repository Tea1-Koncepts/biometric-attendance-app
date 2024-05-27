import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    const user = req.user;
    // Implement your logic here
    const message = `Welcome ${user.username}! You have accessed a protected route.`;

    return { message: 'You have accessed a protected route!' };
  }
}
