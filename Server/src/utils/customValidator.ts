import { registerDecorator, ValidationOptions } from 'class-validator';
import { ObjectId } from 'bson';

export default function IsMongoIdObject(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsMongoIdObject',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return ObjectId.isValid(value);
        },
      },
    });
  };
}
