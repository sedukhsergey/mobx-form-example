export class NotFoundError extends Error {
  /**
   *
   * @param {string} message
   * @param {object} metadata
   */
  constructor(message, metadata = {
  }) {
    super();
    this.message = message;
    this.metadata = metadata;
    // Object.setPrototypeOf(this, NotFoundError.prototype);
    this.name = this.constructor.name;
  }
}
