const team = Object.freeze({
  getTeamStatsAndScoreAverage() {
    const games = this.games;
    const totalGames = games.length;
    const totalScore = games.reduce((sum, game) => sum + game.teamPoints, 0);
    const averageScore = totalGames > 0 ? (totalScore / totalGames).toFixed(2) : 0;
    return { totalGames, averageScore: Number(averageScore) };
  },
  _players: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jeff", lastName: "Smith", age: 32 },
    { firstName: "Donny", lastName: "Bundi", age: 55 },
  ],
  _games: [
    { opponent: "Vikings", teamPoints: 3, opponentPoints: 2 },
    { opponent: "Giants", teamPoints: 2, opponentPoints: 3 },
    { opponent: "Red Socks", teamPoints: 5, opponentPoints: 8 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
  if (typeof newFirstName !== 'string' || typeof newLastName !== 'string' || typeof newAge !== 'number') {
    console.error('Invalid input types');
    return;
  }
  const player = { firstName: newFirstName, lastName: newLastName, age: newAge };
  this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    if (typeof newOpponent !== 'string' || typeof newTeamPoints !== 'number' || typeof newOpponentPoints !== 'number') {
      console.error('Invalid input types');
      return;
    }
    const game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints };
    this._games.push(game);
  }
});

// Adds player and game first
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

//calculates the stats
const stats = team.getTeamStatsAndScoreAverage();

console.log(team._players);
console.log(team._games);

console.log(`Total games played: ${stats.totalGames} and the average team score: ${stats.averageScore}`);
