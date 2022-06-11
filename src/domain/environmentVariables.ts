const getEnvironmentVariableOrThrow = (name: string): string => {
  const environmentValue = process.env[name];
  if (environmentValue) return environmentValue;
  else throw new Error(`Missing '${name}' environment variable`);
};

const getNumericEnvironemntVariableOrThrow = (name: string): number => {
  const stringValue = getEnvironmentVariableOrThrow(name);
  if (isNaN(Number(stringValue)))
    throw new Error(`Variable '${name}' is not numeric`);
  return Number(stringValue);
};

const getGithubClientId = () =>
  getEnvironmentVariableOrThrow("REACT_APP_GITHUB_CLIENT_ID");

const getGithubClientSecret = () =>
  getEnvironmentVariableOrThrow("REACT_APP_GITHUB_CLIENT_SECRET");

const getDomain = () => getEnvironmentVariableOrThrow("REACT_APP_DOMAIN");

const getPort = () => getNumericEnvironemntVariableOrThrow("REACT_APP_PORT");

export { getPort, getDomain, getGithubClientId, getGithubClientSecret };
