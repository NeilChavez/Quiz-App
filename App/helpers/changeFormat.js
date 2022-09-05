export function changeFormat(str) {
  let res = str.toLowerCase().replaceAll(" ", "_");
  return res;
}
