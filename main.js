// const teams = [
//     {
//         name: 'Home',
//         points: 0
//     },
//     {
//         name: 'Away',
//         points: 0
//     }

// ]

let homeScore = 0
// let awayScore = ""

function reset() {
    homeScore = 0
    // awayScore = ""

    updateDom()
}

function homeOne() {
    console.log('home scores!')
    homeScore += 1

    updateDom()
}
// function awayOne() {
//     console.log('away scores!')
//     awayScore += '🦭'

//     // updateDom()
// }






// function homeThree() {
//     console.log('Point added')
//     homeScore += '🦖🦖🦖'

// }
// function awayThree() {
//     console.log('3 points added')
//     awayScore += '🦭🦭🦭'
// }

function updateDom() {
    let hScore = document.getElementById('home-score')
    hScore.innerText = homeScore

    // let aScore = document.getElementById('away-score')
    // aScore.innerText = awayScore
}