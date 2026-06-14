import { shouldRetryPayment } from "./retry.js";

export function createCheckoutResult(paymentResponse, attempt = 0) {
  if (paymentResponse.status === "paid") {
    return { status: "success", retry: false };
  }

  return {
    status: "failed",
    retry: shouldRetryPayment(paymentResponse.error, attempt)
  };
}
