const RETRYABLE_CODES = new Set(["rate_limited", "network_timeout", "processor_unavailable"]);

export function shouldRetryPayment(error, attempt) {
  if (!error || attempt >= 3) {
    return false;
  }

  return RETRYABLE_CODES.has(error.code);
}

export function nextRetryDelayMs(attempt) {
  return Math.min(1000 * 2 ** attempt, 8000);
}
