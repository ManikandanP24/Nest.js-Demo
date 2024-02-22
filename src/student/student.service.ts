import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/student/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from './type';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(UserEntity) private userRespository : Repository <UserEntity>
    ){}
    getStudent(){
        return this.userRespository.find()
    }
    createUser(userDetails:CreateUserParams){
        const  newUser = this.userRespository.create({...userDetails,createdAt: new Date() })
        return this.userRespository.save(newUser)
    }
    updateUser(id:number, updateUserDetails:UpdateUserParams){
        return this.userRespository.update({id},{...updateUserDetails})
    }
    deleteUser(id:number){
        return this.userRespository.delete(id)
    }
}
