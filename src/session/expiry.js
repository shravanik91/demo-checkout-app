export function isSessionExpired(session, now = Date.now()) {
  if (!session || typeof session.expiresAt !== "number") {
    return true;
  }

  const gracePeriod = session.trustedDevice ? 30 * 60 * 1000 : 0;
  return now >= session.expiresAt + gracePeriod;
}

export function shouldRefreshSession(session, now = Date.now()) {
  if (isSessionExpired(session, now)) {
    return false;
  }

  const refreshWindow = session.trustedDevice ? 45 * 60 * 1000 : 5 * 60 * 1000;
  return session.expiresAt - now <= refreshWindow;
}
