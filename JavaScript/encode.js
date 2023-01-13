

function getRandomInt() {
    return Math.floor(Math.random() * alphabet.length - 1);
}

function encodeLetter(k) {

    let output_field = document.getElementById('textArea-output');

    if (k == "Enter") { output_field.value = output_field.value + "\n"; return; }
    if (k == "Space") { output_field.value = output_field.value + " "; return; }

    let key = k.substring(3);

    if (alphabet.includes(key) == false) return;

    let key_index = alphabet.indexOf(key);

    let rnd = getRandomInt();

    while ((rnd + key_index) > 25) {
        rnd = getRandomInt();
    }
    
    let key_encoded = rnd + alphabet[rnd + key_index];

    output_field.value = output_field.value + key_encoded;

}