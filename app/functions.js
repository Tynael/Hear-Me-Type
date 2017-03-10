// var sounds = {
//    65: "A",
//    66: "B"
// };
//
// document.onkeydown = function(e) {
//     var soundId = sounds[e.keyCode];
//     if (soundId) document.getElementById('soundsA').play();
//     else console.log("key not mapped : code is", e.keyCode);
// }

// if (sounds[65]) {
//   document.onkeydown = function(e) {
//       var soundId = sounds[e.keyCode];
//       if (soundId) document.getElementById('soundsA').play();
//       else console.log("key not mapped : code is", e.keyCode);
//   }
// }

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 65:
            document.getElementById('A').play();
            break;
        case 66:
            document.getElementById('B').play();
            break;
        case 67:
            document.getElementById('C').play();
            break;
        case 68:
            document.getElementById('D').play();
            break;
        case 69:
            document.getElementById('E').play();
            break;
        case 70:
            document.getElementById('F').play();
            break;
        case 71:
            document.getElementById('G').play();
            break;
        case 72:
            document.getElementById('H').play();
            break;
        case 73:
            document.getElementById('I').play();
            break;
        case 74:
            document.getElementById('J').play();
            break;
        case 75:
            document.getElementById('K').play();
            break;
        case 76:
            document.getElementById('L').play();
            break;
        case 77:
            document.getElementById('M').play();
            break;
        case 78:
            document.getElementById('N').play();
            break;
        case 79:
            document.getElementById('O').play();
            break;
        case 80:
            document.getElementById('P').play();
            break;
        case 81:
            document.getElementById('Q').play();
            break;
        case 82:
            document.getElementById('R').play();
            break;
        case 83:
            document.getElementById('S').play();
            break;
        case 84:
            document.getElementById('T').play();
            break;
        case 85:
            document.getElementById('U').play();
            break;
        case 86:
            document.getElementById('V').play();
            break;
        case 87:
            document.getElementById('W').play();
            break;
        case 88:
            document.getElementById('X').play();
            break;
        case 89:
            document.getElementById('Y').play();
            break;
        case 90:
            document.getElementById('Z').play();
            break;
    }
};
