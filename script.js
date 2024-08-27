function encryptText() {
    let textElement = document.getElementsByClassName("input_text")[0];
    
    if (textElement) {
        let text = textElement.value.trim();

        if (text === "") {
            window.location.href = "index.html";
            return; 
        }

        let encryptedText = text.toLowerCase()
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

        localStorage.setItem("resultText", encryptedText);
        window.location.href = "textresult.html";
    }
}

function decryptText() {
    let textElement = document.getElementsByClassName("input_text")[0];
    
    if (textElement) {
        let text = textElement.value.trim(); 

        if (text === "") {
            window.location.href = "index.html";
            return; 
        }

        let decryptedText = text.toLowerCase()  
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

        localStorage.setItem("resultText", decryptedText);
        window.location.href = "textresult.html";
    }
}
