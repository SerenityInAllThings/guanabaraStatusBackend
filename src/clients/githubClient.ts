import { OAuthApp } from "octokit";
import {
  getGithubClientId,
  getGithubClientSecret,
} from "../domain/environmentVariables";

const clientId = getGithubClientId();
const clientSecret = getGithubClientSecret();

export const app = new OAuthApp({ clientId, clientSecret });
