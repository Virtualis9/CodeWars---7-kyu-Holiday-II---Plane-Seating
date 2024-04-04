// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

function planeSeat(seatPos){
    let seatNumber = parseFloat(seatPos);
    let seatLetter = seatPos.charAt(seatPos.length - 1).toUpperCase();

    let seatPosResult1;
    let seatPosResult2;

    if(seatLetter === 'A' || seatLetter === 'B' || seatLetter === 'C'){   
        seatPosResult2 = 'Left';
    } else if (seatLetter === 'D' || seatLetter === 'E' || seatLetter === 'F'){
        seatPosResult2 = 'Middle';
    } else if (seatLetter === 'G' || seatLetter === 'H' || seatLetter === 'K'){
        seatPosResult2 = 'Right';
    }


    if (seatNumber <= 20) {
        seatPosResult1 = 'Front';
    } else if (seatNumber > 20 && seatNumber <= 40) {
        seatPosResult1 = 'Middle';
    } else if (seatNumber > 40 && seatNumber <= 60 ) {  
        seatPosResult1 = 'Back';
    } 


    if (seatNumber > 60 || seatLetter === 'I' || seatLetter === 'J'){
        return 'No Seat!!'
    }

    return `${seatPosResult1}-${seatPosResult2}`;
}

  
 
