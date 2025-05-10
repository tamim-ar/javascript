document.onmousemove = e => {
  document.body.innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
};