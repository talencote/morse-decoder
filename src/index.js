const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let decodedMessage = "";
    let undecodedLetter = "";
    for (let i = 0; i < expr.length; i+=10) {
        undecodedLetter = expr.substr(i,10);
        if(undecodedLetter == '**********'){
            decodedMessage+=" ";
        }
       else {
           decodedMessage+=findLetter(undecodedLetter);
       }
    }
      return decodedMessage;
  }

function findLetter(undecodedLetter){
    let binarySymbol;
    let decodedLetter;
    let morseLetter="";
    for(let i = 0; i < 10; i+=2){
        binarySymbol=undecodedLetter.substr(i,2);
        if (binarySymbol == "10"){
            morseLetter+='.';
        }
        else if (binarySymbol == "11"){
            morseLetter+="-";
        }
    }
    decodedLetter = MORSE_TABLE[morseLetter];
    return decodedLetter;
}


module.exports = {
    decode
}