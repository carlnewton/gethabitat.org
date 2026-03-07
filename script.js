function copy(id) {
  let copyText = document.getElementById(id);
  navigator.clipboard.writeText(copyText.textContent);
}

