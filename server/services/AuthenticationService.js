import jwt from 'jsonwebtoken';

export default class AuthenticationService {
  constructor(configService) {
    this.tokenSecret = configService.JWT_SECRET;
    this.shortTermTokenExpiresIn = configService.JWT_SHORT_TERM_TOKEN_EXP;
    this.longTermTokenExpiresIn = configService.JWT_LONG_TERM_TOKEN_EXP;
  }

  async _getToken(data, expiresIn) {
    const secret = this.tokenSecret;
    return new Promise((resolve, reject) => {
      jwt.sign(data, secret, { expiresIn }, (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      });
    });
  }

  async getShortTermToken(data) {
    return this._getToken(data, this.shortTermTokenExpiresIn);
  }

  async getLongTermToken(data) {
    return this._getToken(data, this.longTermTokenExpiresIn);
  }

  async verifyToken(token) {
    const secret = this.tokenSecret;
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
          return reject(err);
        }
        resolve(decodedToken);
      });
    });
  }

  decodeToken(token) {
    return jwt.decode(token);
  }

}
