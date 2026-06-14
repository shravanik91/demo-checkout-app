import test from "node:test";
import assert from "node:assert/strict";
import { checkoutBanner } from "../src/ui/banner.js";

test("renders checkout banner copy", () => {
  assert.equal(checkoutBanner(), "Secure checkout with encrypted payments");
});
