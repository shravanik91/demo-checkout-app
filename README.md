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

## Push To GitHub

Create an empty GitHub repository named `demo-checkout-app`, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/demo-checkout-app.git
git push -u origin main
git push -u origin demo/low-risk-ui-copy
git push -u origin demo/high-risk-auth-payment
```

Then open these PRs on GitHub:

- `demo/low-risk-ui-copy` into `main`
- `demo/high-risk-auth-payment` into `main`

Use the high-risk PR URL in AI Release Risk Analyzer with this test output:

```text
FAIL tests/payments.test.js
Payment retry policy tests failed.
Session tests passed, but no trusted-device grace-period test was added.
No refund, webhook retry, or idempotency tests were run.
```
