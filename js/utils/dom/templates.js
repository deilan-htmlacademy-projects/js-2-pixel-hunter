export function getTemplates(ids) {
  verifyIds(ids);
  return ids.map((id) => document.getElementById(id));
}
function verifyIds(ids) {
  if (!Array.isArray(ids)) {
    throw new Error(`ids is not an array`);
  }
}
