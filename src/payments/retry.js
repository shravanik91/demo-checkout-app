const RETRYABLE_CODES = new Set([
  "rate_limited",
  "network_timeout",
  "processor_unavailable",
  "card_declined"
]);

export function shouldRetryPayment(error, attempt) {
  if (!error || attempt >= 5) {
    return false;
  }

  return RETRYABLE_CODES.has(error.code);
}

export function nextRetryDelayMs(attempt) {
  return Math.min(500 * 2 ** attempt, 12000);
}
