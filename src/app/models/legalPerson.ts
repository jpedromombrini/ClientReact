import { Person } from './person';

export interface LegalPerson extends Person {
    cnpj: string;
    companyName: string;
    subscription: string;
    fantasy: string;
}