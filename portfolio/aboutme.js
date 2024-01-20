function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function downloadPDF() {
  const pdfUrl = "https://in.docworkspace.com/d/sIBfIxf3qAYjjrq0G";

  const link = document.createElement("a");
  link.href = pdfUrl;

  link.download = "downloaded-file.pdf";

  document.body.appendChild(link);

  // Triggering a click on the link to initiate the download
  link.click();

  // Removing the link from the DOM
  document.body.removeChild(link);
}
