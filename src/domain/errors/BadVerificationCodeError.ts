export default class BadVerificationCodeError extends Error {
  constructor() {
    super("Bad verification code. Might be expired or invalid.");
  }
}
