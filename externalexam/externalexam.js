function checkCharacter() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        result.innerHTML = ch + " is a Vowel.";
    } 
    else if (ch >= "a" && ch <= "z") {
        result.innerHTML = ch + " is a Consonant.";
    } 
    else {
        result.innerHTML = "Please enter a valid alphabet.";
    }
}