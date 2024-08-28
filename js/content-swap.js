const onContinue = (origin = '', target= '') => {
    const originNode = document.getElementById(origin);
    const targetNode = document.getElementById(target);
    const swapContent = originNode.innerHTML;
    originNode.innerHTML = targetNode.innerHTML;
    targetNode.innerHTML = swapContent;
}