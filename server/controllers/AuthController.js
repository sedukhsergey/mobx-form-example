import ArgumentError from '../errors/ArgumentError';
import Response from '../utils/Response';
export default class AuthController {
  constructor(container) {
    this.accountsService = container.modelsService.Accounts;
    this.authenticationService = container.authenticationService;
  }
  async registerAccount(req, res) {
    if (!req.body.email || !req.body.password) {
      throw new ArgumentError('email or password are missing');
    }
    try {
      const account = await this.accountsService.findByEmail(req.body.email);
      if (account) {
        return res
          .status(Response.STATUS_FORBIDDEN)
          .json({ message: 'User with the same email is already exist.' });
      }
      const newAccount = await this.accountsService.create({
        email: req.body.email,
        password: req.body.password,
      });

      const longTermToken = await this.authenticationService
        .getShortTermToken({ accId: newAccount.id });
      res.cookie('accessToken', longTermToken);
      return res.send(newAccount);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}
