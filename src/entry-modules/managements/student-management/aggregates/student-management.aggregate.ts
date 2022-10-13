/* eslint-disable @typescript-eslint/naming-convention */
import { AggregateRoot, EventPublisher } from '@nestjs/cqrs';

import { GenderType } from '../enums';
import { StudentCreatedEvent, StudentDeletedEvent, StudentUpdatedEvent } from '../events';
import { StudentManagement } from '../models';

export class StudentAggregate
    extends AggregateRoot
    implements StudentManagement
{
    public get key(): string {
        return this._key;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string | undefined {
        return this._lastName;
    }

    public get email(): string {
        return this._email;
    }

    public get gender(): GenderType {
        return this._gender;
    }

    public get address(): string {
        return this._address;
    }

    public get dob(): string {
        return this._dob;
    }

    public get classKey(): string {
        return this._classKey;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    private constructor(
        private readonly _key: string,
        private readonly _firstName: string,
        private readonly _lastName: string | undefined,
        private readonly _email: string,
        private readonly _gender: GenderType,
        private readonly _address: string,
        private readonly _dob: string,
        private readonly _classKey: string | undefined,
        private readonly _createdAt: Date | undefined,
        private readonly _updatedAt: Date | undefined,
    ) {
        super();
    }

    public static createAndConfigure(
        key: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string,
        eventPublisher: EventPublisher,
    ): StudentAggregate {
        const studentAggregate = eventPublisher.mergeObjectContext(
            new StudentAggregate(
                key,
                firstName,
                lastName,
                email,
                gender,
                address,
                dob,
                classKey,
                new Date(),
                undefined,
            ),
        );

        studentAggregate.apply(
            new StudentCreatedEvent(
                key,
                firstName,
                lastName,
                email,
                gender,
                address,
                dob,
                classKey,
            ),
        );

        return studentAggregate;
    }

    public static updateAndConfigure(
        currentKey: string,
        newKey: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string,
        createAt: Date,
        eventPublisher: EventPublisher,
    ): StudentAggregate {
        const studentAggregate = eventPublisher.mergeObjectContext(
            new StudentAggregate(
                newKey,
                firstName,
                lastName,
                email,
                gender,
                address,
                dob,
                classKey,
                createAt,
                new Date(),
            ),
        );

        studentAggregate.apply(
            new StudentUpdatedEvent(
                currentKey,
                newKey,
                firstName,
                lastName,
                email,
                gender,
                address,
                dob,
                classKey,
            ),
        );

        return studentAggregate;
    }

    public static deleteAndConfigure(
        key: string,
        firstName: string,
        lastName: string | undefined,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string | undefined,
        createdAt: Date,
        updatedAt: Date | undefined,
        eventPublisher: EventPublisher,
    ): StudentAggregate {
        const studentAggregate = eventPublisher.mergeObjectContext(
            new StudentAggregate(
                key,
                firstName,
                lastName,
                email,
                gender,
                address,
                dob,
                classKey,
                createdAt,
                updatedAt,
            ),
        );

        studentAggregate.apply(new StudentDeletedEvent(key));

        return studentAggregate;
    }
}
