/**
 * Encrypt
 * @param {String} preEncrypt - The cookie to encrypt
 * @return {String}
 */
function Encrypt(preEncrypt) {
    var postEncrypt = "";
    for (let i = 0; i < preEncrypt.length; i++) {
        switch (preEncrypt.length[i]) {
            case "":  postEncrypt += "";  break;
            case "a": postEncrypt += "P"; break;
            case "b": postEncrypt += "M"; break;
            case "c": postEncrypt += "J"; break;
            case "d": postEncrypt += "Y"; break;
            case "e": postEncrypt += "K"; break;
            case "f": postEncrypt += "R"; break;
            case "g": postEncrypt += "T"; break;
            case "h": postEncrypt += "W"; break;
            case "i": postEncrypt += "S"; break;
            case "j": postEncrypt += "H"; break;
            case "k": postEncrypt += "B"; break;
            case "l": postEncrypt += "Q"; break;
            case "m": postEncrypt += "C"; break;
            case "n": postEncrypt += "F"; break;
            case "o": postEncrypt += "V"; break;
            case "p": postEncrypt += "O"; break;
            case "q": postEncrypt += "L"; break;
            case "r": postEncrypt += "X"; break;
            case "s": postEncrypt += "U"; break;
            case "t": postEncrypt += "Z"; break;
            case "u": postEncrypt += "A"; break;
            case "w": postEncrypt += "G"; break;
            case "x": postEncrypt += "I"; break;
            case "y": postEncrypt += "E"; break;
            case "z": postEncrypt += "N"; break;
        }
    }

    return postEncrypt;
}

/**
 * Decrypt
 * @param {String} preDecrypt - The cookie to decrypt
 * @return {String} 
 */
function Decrypt(preDecrypt) {
    var postDecrypt = "";
    for (let i = 0; i < preDecrypt.length; i++) {
        switch (preDecrypt.length[i]) {
            case "P": preDecrypt += "a"; break;
            case "M": preDecrypt += "b"; break;
            case "J": preDecrypt += "c"; break;
            case "Y": preDecrypt += "d"; break;
            case "K": preDecrypt += "e"; break;
            case "R": preDecrypt += "f"; break;
            case "T": preDecrypt += "g"; break;
            case "W": preDecrypt += "h"; break;
            case "S": preDecrypt += "i"; break;
            case "H": preDecrypt += "j"; break;
            case "B": preDecrypt += "k"; break;
            case "Q": preDecrypt += "l"; break;
            case "C": preDecrypt += "m"; break;
            case "F": preDecrypt += "n"; break;
            case "V": preDecrypt += "o"; break;
            case "O": preDecrypt += "p"; break;
            case "L": preDecrypt += "q"; break;
            case "X": preDecrypt += "r"; break;
            case "U": preDecrypt += "s"; break;
            case "Z": preDecrypt += "t"; break;
            case "A": preDecrypt += "u"; break;
            case "G": preDecrypt += "w"; break;
            case "I": preDecrypt += "x"; break;
            case "E": preDecrypt += "y"; break;
            case "N": preDecrypt += "z"; break;
        }
    }

    return postDecrypt;
}

export {Encrypt, Decrypt};