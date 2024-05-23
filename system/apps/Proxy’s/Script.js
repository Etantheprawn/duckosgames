function changeIframeSrc() {
    const selector = document.getElementById('websiteSelector');
    const iframe = document.getElementById('contentFrame');
    const selectedValue = selector.value;
    
    iframe.src = selectedValue;
}
