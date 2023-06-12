const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    return;
  }
  document.documentElement.classList.add("dark");
};
