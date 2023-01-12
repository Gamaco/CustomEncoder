document.getElementById('textArea-input').addEventListener('keydown', function (e){
    processInput(e.code);
}, false);

document.getElementById('encode-btn').addEventListener('mousedown', function (e){
    selectOption('encode');
}, false);

document.getElementById('decode-btn').addEventListener('mousedown', function (e){
    selectOption('decode');
}, false);

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var selected_opt;

function selectOption(option) {
    selected_opt = option;
    if (option == 'encode') {
        document.getElementById('encode-btn').style.borderBlockColor = 'rgba(123,255,126,1)';
        document.getElementById('encode-btn').style.boxShadow = "1px 1px 5px #00ff08";
        document.getElementById('decode-btn').style.borderBlockColor = 'rgb(255, 255, 255)';
        document.getElementById('decode-btn').style.boxShadow = "1px 1px 5px #ffffff";
    }
    else if (option == 'decode') {
        document.getElementById('decode-btn').style.borderBlockColor = 'rgba(123,255,126,1)';
        document.getElementById('decode-btn').style.boxShadow = "1px 1px 5px #00ff08";
        document.getElementById('encode-btn').style.boxShadow = "1px 1px 5px #ffffff";
        document.getElementById('encode-btn').style.borderBlockColor = 'rgb(255, 255, 255)';
    }
}

function processInput(k) {
    if (selected_opt == 'encode') {
        encodeLetter(k);
    } 
    else {
        decodeLetter(k);
    }
}

function onPageInit() {
    
    //Set textarea focus
    document.getElementById("textArea-input").focus();

    selectOption('encode');
}