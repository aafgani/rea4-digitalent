import axios from "axios";

const personalAccessToken = "your_personal_access_token_here";

const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${personalAccessToken}`,
    Accept: "application/vnd.github+json",
  },
});

export default instance;
