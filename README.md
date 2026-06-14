# Demo Checkout App

This repository is intentionally small and built for demoing AI Release Risk Analyzer.

It has three useful branches after setup:

- `main`: safe baseline checkout app
- `demo/low-risk-ui-copy`: low-risk UI copy change
- `demo/high-risk-auth-payment`: risky auth and payment behavior change with missing tests

## Run Tests

```bash
node --test tests/*.test.js
```

## Suggested Demo Flow

1. Push this repo to GitHub.
2. Open a PR from `demo/low-risk-ui-copy` into `main`.
3. Open a PR from `demo/high-risk-auth-payment` into `main`.
4. Paste each PR URL into AI Release Risk Analyzer.

The high-risk branch changes:

- `src/session/expiry.js`
- `src/payments/retry.js`

It intentionally does not add tests for:

- session expiry
- invalid token
- refund
- webhook retry
- idempotency

That makes it a strong demo for a `Do not merge` recommendation.
