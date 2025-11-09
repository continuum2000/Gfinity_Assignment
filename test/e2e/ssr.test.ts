import { createPage, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";

describe("list page", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("ensures the navigation bar has rendered and that there are 20 data entries", async () => {
    const page = await createPage("/");
    expect(await page.getByTestId("burger").isVisible()).toBe(true);
    expect(await page.getByTestId("dataRow").count()).toBe(20);
  });
});
