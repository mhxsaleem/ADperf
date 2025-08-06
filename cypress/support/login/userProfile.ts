import { loginUser } from './loginUser';

export const userProfile = (userProfile: string) => {
  switch (userProfile) {
    case 'Email Agent':
      loginUser(Cypress.env('agentUsername'), Cypress.env('password'));
      break;
    case 'WIB Agent Profile':
      loginUser(Cypress.env('agentUsername'), Cypress.env('password'));
      break;
  }
};
