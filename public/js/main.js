document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.querySelector('.copy-btn');
    const codeBlock = document.querySelector('.code-editor');

    if(copyBtn && codeBlock) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = codeBlock.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
                setTimeout(() => {
                    copyBtn.innerHTML = originalHtml;
                }, 2000);
            });
        });
    }
});
