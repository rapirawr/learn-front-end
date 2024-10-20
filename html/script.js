document.addEventListener('DOMContentLoaded', () => {
    const examples = document.querySelectorAll('.example');

    examples.forEach(example => {
        const container = document.createElement('div');
        container.classList.add('copy-icon-container');

        const copyIcon = document.createElement('i');
        copyIcon.classList.add('fa-regular', 'fa-clipboard', 'copy-icon');
        copyIcon.onclick = () => copyToClipboard(example.querySelector('pre'), copiedText);

        const copiedText = document.createElement('span');
        copiedText.classList.add('copied-text');
        copiedText.textContent = 'Tersalin!';

        container.appendChild(copyIcon);
        container.appendChild(copiedText);
        example.appendChild(container);
    });
});

function copyToClipboard(preElement, copiedText) {
    const textToCopy = preElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        copiedText.style.display = 'block';
        copiedText.style.opacity = '1';

        setTimeout(() => {
            copiedText.style.opacity = '0';
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

