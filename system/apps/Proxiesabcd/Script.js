function changeIframeSrc() {
    const selector = document.getElementById('websiteSelector');
    const iframe = document.getElementById('contentFrame');
    const descriptionBox = document.getElementById('descriptionText');
    const selectedOption = selector.options[selector.selectedIndex];
    
    const selectedValue = selectedOption.value;
    const description = selectedOption.getAttribute('data-description');
    
    iframe.src = selectedValue;
    descriptionBox.textContent = description;
}
