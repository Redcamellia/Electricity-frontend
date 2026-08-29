import axios from "axios";
import { getItem } from "./utils";

export async function getConnectionInstance() {
  const instance = axios.create({
    baseURL: process.env.BASEURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: getItem("token"),
    },
  });
}
