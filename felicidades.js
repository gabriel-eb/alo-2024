const onContinue = () => {
    const firstPage = document.getElementById('intro');
    const felicidades = document.getElementById('felicitaciones');
    const swapContent = firstPage.innerHTML;
    firstPage.innerHTML = felicidades.innerHTML;
    felicidades.innerHTML = swapContent;
}