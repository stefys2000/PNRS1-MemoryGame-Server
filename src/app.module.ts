import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [AuthModule, ScoreModule],
})
export class AppModule {}
