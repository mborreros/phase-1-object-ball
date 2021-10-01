function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },

            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// DONE Build a function, `numPointsScored` that takes in an argument of a player's
//   name and returns the number of points scored for that player.
function numPointsScored(playerInput) {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players

    const players = Object.assign({}, homePlayers, awayPlayers)

    for (const playerName in players)
        if (playerName === playerInput)
            return players[playerName].points

}

// DONE Build a function, `shoeSize`, that takes in an argument of a player's name and
//   returns the shoe size for that player.
function shoeSize(playerInput) {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players

    const players = Object.assign({}, homePlayers, awayPlayers)

    for (const playerName in players)
        if (playerName === playerInput)
            return players[playerName].shoe
}

// DONE Build a function, `teamColors`, that takes in an argument of the team name and
//   returns an array of that teams colors.
function teamColors(name) {
    const game = gameObject()

    for (const key in game) {
        if (game[key].teamName === name)
            return game[key].colors
    }
}

// DONE Build a function, `teamNames`, that operates on the game object to return an
//   array of the team names.

function teamNames() {
    const game = gameObject()
    const teamNameArray = [game.home.teamName, game.away.teamName]
    return teamNameArray
}

// Build a function, `playerNumbers`, that takes in an argument of a team name
//  and returns an array of the jersey number's for that team.
// function playerNumber(teamInput) {
//     const game = gameObject()
//     const teamNumbersArray = []

//     for (const teamName in game)
//         if (teamName === teamInput)
//             teamNumbersArray = []
//     return teamNumbersArray
// }

const playerNumbers = name => {
    const data = gameObject()
    const team = Object.keys(data).find(t => data[t].teamName === name)
    const players = Object.keys(data[team].players)
    return players.map(player => data[team].players[player].number)
}
// Build a function, `playerStats`, that takes in an argument of a player's name
//   and returns a object of that player's stats. 
// function playerStats(playerInput) {
//     const game = gameObject()
//     const homePlayers = game.home.players
//     const awayPlayers = game.away.players

//     const players = Object.assign({}, homePlayers, awayPlayers)

//     for (const playerName in players)
//         if (playerName === playerInput)
//             return players.playerInput

// }}
function findPlayer(name, data = gameObject()) {
    const { home, away } = data 
    return home.players[name] ? home.players[name] : away.players[name];
}

const playerStats = name => findPlayer(name)

function bigShoeRebounds() {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
            let playerObj = teamObj.players
            let largestShoe = 0
            let numberReboundsLargestShoe = 0
            for (let playerKey in playerObj) { // iterate through player names
                if (playerObj[playerKey].shoe > largestShoe) { // check to see if player's shoe size is the largest so far
                    largestShoe = playerObj[playerKey].shoe // if it is, update the largest shoe size
                    numberReboundsLargestShoe = playerObj[playerKey].rebounds // and updeat the number of rebounds
                }
            }
            return numberReboundsLargestShoe // return the number of rebounds for the player with the largest shoe size
        }
    }
}
