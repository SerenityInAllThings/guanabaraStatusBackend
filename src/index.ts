import express, { json } from "express";
import cors from "cors";
import { getPort } from "./domain/environmentVariables";
import { getAuthUrl } from "./services/getGithubAuthUrlService";
import { getBearer } from "./services/getGithubBearerService";
import { isValidToken } from "./services/isValidGithubBearerService";
import BadVerificationCode from "./domain/errors/BadVerificationCodeError";

const app = express();
app.use(json());
app.use(cors());

app.get("/github/oauth-endpoint", (_, res) => {
  const url = getAuthUrl();
  res.send({ url });
});

app.post("/github/bearer", async ({ query: { code } }, res) => {
  try {
    if (!code || typeof code !== "string") {
      const message = `Missing or bad querystring 'code'. Received value: ${code}`;
      console.info(message);
      res.status(400).send({ message });
      return;
    }
    const { token } = await getBearer(code);
    res.send({ token });
  } catch (err) {
    if (err instanceof BadVerificationCode) {
      res.status(400).send({ message: err.message });
      return;
    }
    console.error(`Error creating bearer with code ${code}`, err);
    res.status(500).send({ message: "internal server error" });
  }
});

app.get("/github/bearer", async ({ query: { token } }, res) => {
  try {
    if (!token || typeof token !== "string") {
      const message = `Missing or bad querystring 'token'. Received value: ${token}`;
      console.info(message);
      res.status(400).send({ message });
      return;
    }

    const { isValid, details } = await isValidToken(token);
    res.send({ isValid, details });
  } catch (err) {
    console.error(`Error checking bearer '${token}'`, err);
    res.status(500).send({ message: "internal server error" });
  }
});

app.get("/ping", (_, res) => {
  res.send({ ping: 'pong' })
});

const port = getPort();

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
