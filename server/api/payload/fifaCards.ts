import { PaginatedDocs, Where } from "payload";
import { stringify } from "qs-esm";

const auth = "Bearer " + process.env.API_KEY;
const CMS_URL = process.env.CMS_URL;
export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event);

  if (slug) {
    const query: Where = {
      slug: { equals: slug },
    };

    const stringifiedQuery = stringify({ where: query, pagination: false }, { addQueryPrefix: true });

    const response = await fetch(CMS_URL + "/api/fifaCards" + stringifiedQuery, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });
    const typedResponse = (await response.json()) as PaginatedDocs;
    return typedResponse.docs[0];
  } else {
    const query: Where = {
      "statistics.pace": { exists: true },
    };

    const stringifiedQuery = stringify({ limit: 20, pagination: false }, { addQueryPrefix: true });

    const response = await fetch(CMS_URL + "/api/fifaCards" + stringifiedQuery, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });
    const typedResponse = (await response.json()) as PaginatedDocs;
    return typedResponse.docs;
  }
});
