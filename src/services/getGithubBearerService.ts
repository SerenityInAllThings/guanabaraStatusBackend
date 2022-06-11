import { app } from "../clients/githubClient";
import BadVerificationCodeError from "../domain/errors/BadVerificationCodeError";

export const getBearer = async (code: string) => {
  try {
    const {
      authentication: { token },
    } = await app.createToken({ code });
    return { token };
  } catch (err) {
    if ((err as any)?.response?.data?.error === "bad_verification_code") {
      console.info(`Received bad verification code: ${code}`);
      throw new BadVerificationCodeError();
    }
    console.error(`Error creating bearer token with code ${code}`, err);
    throw err;
  }
};
