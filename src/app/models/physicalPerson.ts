import { Person } from './person';

export interface PhysicalPerson extends Person{
    cpf: string;
    name: string;
}