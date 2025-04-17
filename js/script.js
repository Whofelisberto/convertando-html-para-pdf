// função para baixar o arquivo em pdf, manipulando seus parâmetros.

function downloadPdf() {
  const item = document.querySelector(".content");

  var opções = {
     margin:   1,
     filename: 'noticia-anime.pdf',
     html2canvas: {scale: 2},
     jsPDF: {unit: 'in' , format: 'a4', orientation: 'p' }
  };
  html2pdf().set(opções).from(item).save();
}
