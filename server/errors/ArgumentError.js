export default class ArgumentError extends Error {

  constructor(message, metadata = undefined) {
    super();
    this.message = message;
    this.metadata = metadata;
    Object.setPrototypeOf(this, ArgumentError.prototype);
    this.name = this.constructor.name;
  }
}
