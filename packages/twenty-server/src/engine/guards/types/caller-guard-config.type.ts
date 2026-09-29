export type UserSessionCallerOptions = {
  impersonation?: boolean;
  playground?: boolean;
  workspaceAgnostic?: boolean;
};

export type ApplicationCallerOptions = {
  requireUser: true;
};

// Every key is required so each endpoint writes down a decision per caller
// kind, and a kind added later does not compile until every endpoint has one.
export type CallerGuardConfig = {
  userSession: boolean | UserSessionCallerOptions;
  apiKey: boolean;
  oauthClient: boolean | ApplicationCallerOptions;
  application: boolean | ApplicationCallerOptions;
};
