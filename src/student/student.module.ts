import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/student/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
