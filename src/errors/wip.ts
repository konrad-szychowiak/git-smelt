import { wrapErrorField } from './commons';

export class WIPError extends Error {
  constructor(resourceDescription: string, inType: object) {
    super(WIPError.createFullMessage(resourceDescription, inType));
  }

  static createFullMessage(resourceDescription: string, errorSource: object) {
    const resourceField = wrapErrorField(resourceDescription);
    const sourceField = wrapErrorField(typeof errorSource);
    return `${resourceField} isn't accessible from ${sourceField} yet!`;
  }
}
