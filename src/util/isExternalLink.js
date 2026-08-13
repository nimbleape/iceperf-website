export function isExternalLink(to = '') {
  return /^(https?:|mailto:|tel:|#)/.test(to);
}
