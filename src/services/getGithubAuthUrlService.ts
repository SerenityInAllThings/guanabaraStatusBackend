import { app } from "../clients/githubClient";
import { getDomain } from "../domain/environmentVariables";

const domain = getDomain();

export const getAuthUrl = () => {
  const redirectUrl = `${domain}/github-token`;
  const { url } = app.getWebFlowAuthorizationUrl({ redirectUrl });
  return url;
};
