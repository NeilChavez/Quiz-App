export function Loader() {
  const $loader = document.createElement("img");
  $loader.classList.add("loader");
  $loader.alt = "Loading...";
  $loader.src = "./App/assets/spiral-loader.svg";
  return $loader;
}
