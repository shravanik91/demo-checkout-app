export function isSessionExpired(session, now = Date.now()) {
  if (!session || typeof session.expiresAt !== "number") {
    return true;
  }

  return now >= session.expiresAt;
}

export function shouldRefreshSession(session, now = Date.now()) {
  if (isSessionExpired(session, now)) {
    return false;
  }

  const fiveMinutes = 5 * 60 * 1000;
  return session.expiresAt - now <= fiveMinutes;
}
