function hideSelf() {
  const btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', function () {
    btn.setAttribute("hidden", "hidden");
  })
}
