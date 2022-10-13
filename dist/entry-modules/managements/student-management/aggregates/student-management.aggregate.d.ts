import { AggregateRoot, EventPublisher } from '@nestjs/cqrs';
import { GenderType } from '../enums';
import { StudentManagement } from '../models';
export declare class StudentAggregate extends AggregateRoot implements StudentManagement {
    private readonly _key;
    private readonly _firstName;
    private readonly _lastName;
    private readonly _email;
    private readonly _gender;
    private readonly _address;
    private readonly _dob;
    private readonly _classKey;
    private readonly _createdAt;
    private readonly _updatedAt;
    get key(): string;
    get firstName(): string;
    get lastName(): string | undefined;
    get email(): string;
    get gender(): GenderType;
    get address(): string;
    get dob(): string;
    get classKey(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    private constructor();
    static createAndConfigure(key: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string, eventPublisher: EventPublisher): StudentAggregate;
    static updateAndConfigure(currentKey: string, newKey: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string, createAt: Date, eventPublisher: EventPublisher): StudentAggregate;
    static deleteAndConfigure(key: string, firstName: string, lastName: string | undefined, email: string, gender: GenderType, address: string, dob: string, classKey: string | undefined, createdAt: Date, updatedAt: Date | undefined, eventPublisher: EventPublisher): StudentAggregate;
}
