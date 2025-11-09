import { test, assert } from "vitest";
import type { PaginatedDocs } from "payload";
const auth = "Bearer " + process.env.API_KEY;
const CMS_URL = process.env.CMS_URL;
const response = await fetch(CMS_URL + "/api/fifaCards", {
  method: "GET",
  headers: {
    Authorization: auth,
  },
});
const fifaCards = ((await response.json()) as PaginatedDocs).docs;
test("assert document return", () => {
  assert.exists(fifaCards, "assert that documents are returned from the endpoint ");
});
