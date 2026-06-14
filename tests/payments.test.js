import test from "node:test";
import assert from "node:assert/strict";
import { shouldRetryPayment, nextRetryDelayMs } from "../src/payments/retry.js";
import { createCheckoutResult } from "../src/payments/checkout.js";

test("retries transient payment errors", () => {
  assert.equal(shouldRetryPayment({ code: "network_timeout" }, 1), true);
  assert.equal(shouldRetryPayment({ code: "card_declined" }, 1), false);
});

test("limits payment retries", () => {
  assert.equal(shouldRetryPayment({ code: "network_timeout" }, 3), false);
});

test("calculates retry delay", () => {
  assert.equal(nextRetryDelayMs(0), 1000);
  assert.equal(nextRetryDelayMs(3), 8000);
});

test("creates checkout result", () => {
  assert.deepEqual(createCheckoutResult({ status: "paid" }), { status: "success", retry: false });
});
