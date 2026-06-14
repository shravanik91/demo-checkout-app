import test from "node:test";
import assert from "node:assert/strict";
import { isSessionExpired, shouldRefreshSession } from "../src/session/expiry.js";
import { isValidToken } from "../src/session/token.js";

test("detects expired sessions", () => {
  assert.equal(isSessionExpired({ expiresAt: 1000 }, 1000), true);
  assert.equal(isSessionExpired({ expiresAt: 2000 }, 1000), false);
});

test("refreshes sessions close to expiry", () => {
  assert.equal(shouldRefreshSession({ expiresAt: 1000 }, 900), true);
});

test("validates token prefix", () => {
  assert.equal(isValidToken("tok_123456789"), true);
  assert.equal(isValidToken("bad_123456789"), false);
});
