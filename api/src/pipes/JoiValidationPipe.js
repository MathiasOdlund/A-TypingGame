
import {
  Injectable, BadRequestException
} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe {
  constructor(schema) {
    this.schema = schema;
  }

  transform(value, metadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.details.map(detail => detail.message));
    }
    return value;
  }
}