import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UserEntity } from 'src/student/entities/user.entity';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    async getStudent(): Promise<UserEntity[]> {
        return await this.studentService.getStudent();
    }

    @Post()
    async createUser(@Body() createStudentDto: CreateStudentDto) {
        return await this.studentService.createUser(createStudentDto);
    }

    @Put(':id')
    async updateUser(@Param('id',ParseIntPipe) id: number,@Body() UpdateStudentDto: UpdateStudentDto){
        await this.studentService.updateUser(id, UpdateStudentDto)
        await this.studentService.getStudent();
    }

    @Delete(':id')
    async deleteUser(@Param('id',ParseIntPipe) id:number){
        await this.studentService.deleteUser(id)
        await this.studentService.getStudent();
    }
}
