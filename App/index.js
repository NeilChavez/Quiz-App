import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", (e) => {
  const {hash} = location;

  if (!hash || hash.includes("#home")) App();
  if (e.oldURL.includes("#question")) return false;
  App();
});
