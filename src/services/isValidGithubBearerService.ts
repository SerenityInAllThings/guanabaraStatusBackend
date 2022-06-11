import { app } from "../clients/githubClient";

interface Response {
  isValid: boolean;
  details?: {
    createdAt: string;
    expiresAt: string | null;
  };
}

export const isValidToken = async (token: string): Promise<Response> => {
  try {
    const {
      data: { created_at: createdAt, expires_at: expiresAt },
    } = await app.checkToken({ token });
    const details = { createdAt, expiresAt };
    return { isValid: true, details };
  } catch (err) {
    console.info(`error checking token ${token}`, err);
    return { isValid: false };
  }
};
