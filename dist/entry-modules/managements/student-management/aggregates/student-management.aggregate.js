"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const events_1 = require("../events");
class StudentAggregate extends cqrs_1.AggregateRoot {
    constructor(_key, _firstName, _lastName, _email, _gender, _address, _dob, _classKey, _createdAt, _updatedAt) {
        super();
        this._key = _key;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._gender = _gender;
        this._address = _address;
        this._dob = _dob;
        this._classKey = _classKey;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
    }
    get key() {
        return this._key;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get email() {
        return this._email;
    }
    get gender() {
        return this._gender;
    }
    get address() {
        return this._address;
    }
    get dob() {
        return this._dob;
    }
    get classKey() {
        return this._classKey;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    static createAndConfigure(key, firstName, lastName, email, gender, address, dob, classKey, eventPublisher) {
        const studentAggregate = eventPublisher.mergeObjectContext(new StudentAggregate(key, firstName, lastName, email, gender, address, dob, classKey, new Date(), undefined));
        studentAggregate.apply(new events_1.StudentCreatedEvent(key, firstName, lastName, email, gender, address, dob, classKey));
        return studentAggregate;
    }
    static updateAndConfigure(currentKey, newKey, firstName, lastName, email, gender, address, dob, classKey, createAt, eventPublisher) {
        const studentAggregate = eventPublisher.mergeObjectContext(new StudentAggregate(newKey, firstName, lastName, email, gender, address, dob, classKey, createAt, new Date()));
        studentAggregate.apply(new events_1.StudentUpdatedEvent(currentKey, newKey, firstName, lastName, email, gender, address, dob, classKey));
        return studentAggregate;
    }
    static deleteAndConfigure(key, firstName, lastName, email, gender, address, dob, classKey, createdAt, updatedAt, eventPublisher) {
        const studentAggregate = eventPublisher.mergeObjectContext(new StudentAggregate(key, firstName, lastName, email, gender, address, dob, classKey, createdAt, updatedAt));
        return studentAggregate;
    }
}
exports.StudentAggregate = StudentAggregate;
//# sourceMappingURL=student-management.aggregate.js.map