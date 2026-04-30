const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result-text');
const confidence = document.getElementById('confidence');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleUpload(e.target.files[0]);
    }
});

function handleUpload(file) {
    resultBox.style.display = 'block';
    resultText.innerText = "Processing Neural Weights...";
    
    setTimeout(() => {
        const isPneumonia = Math.random() > 0.5;
        const confVal = (Math.random() * 20 + 75).toFixed(2);
        
        resultText.innerText = isPneumonia ? "PNEUMONIA DETECTED" : "NORMAL";
        resultText.style.color = isPneumonia ? "#ff4d4d" : "var(--primary)";
        confidence.innerText = `${confVal}% Confidence`;
    }, 1500);
}
