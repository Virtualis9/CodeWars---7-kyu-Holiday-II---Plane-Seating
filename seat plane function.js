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
    } else if (seatNumber > 20 && seatNumber < 40) {
        seatPosResult1 = 'Middle';
    } else if (seatNumber < 60) {  
        seatPosResult1 = 'Back';
    } 


    if (seatNumber > 60 || seatLetter === 'I' || seatLetter === 'J'){
        return 'No Seat!!'
    }

    return `${seatPosResult1}-${seatPosResult2}`;
}

console.log(planeSeat('57A'))
console.log(planeSeat('45J'))
console.log(planeSeat('57A'))
console.log(planeSeat('54J'))
console.log(planeSeat('50C'))
  
 
//     50C
//     8H
//     1H
//     26C
//     33I
//     68F
//     58D
//     34J
//     23K
//     50E
//     49C
//     11C
//     11A
//     50G
//     8I
//     25B
//     61D
//     3K
//     57B
//     25C
//     70B
//     23B
//     66C
//     36D
//     44H
//     28G
//     27H
//     29C
//     60H