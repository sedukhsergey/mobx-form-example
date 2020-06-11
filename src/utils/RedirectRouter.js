import { createBrowserHistory } from 'history';

class RedirectRouter {
  constructor() {
    this.history = createBrowserHistory();
  }

  goToSplash = () => {
    this.history.push('/');
  };

  goToLogin() {
    this.history.push('/login');
  }

  goToRegistration() {
    this.history.push('/registration');
  }

  goToDashboard() {
    this.history.push('/dashboard');
  }

  goToPage404() {
    this.history.push('/page404');
  }

  gotToSomeRouteWithParams({ campaignId, assessmentId }) {
    this.history.push(`/main/campaign/${campaignId}/assessment/${assessmentId}`);
  }

  getCurrentPath = () => {
    return this.history.location.pathname;
  };
}

export default new RedirectRouter();
