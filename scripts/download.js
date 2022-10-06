export const download = () => {
  const anchor = document.createElement("a");
  anchor.href = "../styles/assets/cv.pdf";
  anchor.download = "cv.pdf";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
