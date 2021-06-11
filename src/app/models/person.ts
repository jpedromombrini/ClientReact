import { Address } from './address';
import { PersonType } from './enums/personType';

export interface Person {
    id: string;
    email: string;
    inclusionDate: Date;
    phone: string;
    personType: PersonType;
    observation: string;
    address: Address;
}