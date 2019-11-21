import { Department } from './department.model';
import { Role } from './role.model';

export class User {
    _id: String;
    username: String = '';  
    password: String = ''; 
    cpf: String = ''; 
    name: String = ''; 
    isActive: boolean = true; 
    fisrtAccess: boolean = true;
    department: String = '';
    role: String = ''; 
    phone: String = ''; 
    privilege: String = 'user'; 
    born: Date;
    sex: number = 0; 
    // picture: String = ''; 
}