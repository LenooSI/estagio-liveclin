const database = require("./game-list");

const allNames = database.games.map((game) => game.title);
//console.log(allNames);

const lowestPrice = database.games
  .filter((price) => price.priceUsd < 20)
  .map((lowestPrice) => lowestPrice.title);
//console.log(lowestPrice);

const totalRevenue = database.games
  .map((game) => {
    return game.priceUsd * game.salesMillions * 1000000;
  })
  .reduce((all, value) => all + value);
//console.log(totalRevenue);

const gamesCount = database.games.length;
const timePlayed = database.games.reduce(
  (all, game) => all + game.playtimeHours,
  0,
);
//console.log(timePlayed / gamesCount);

const highScore = database.games
  .filter((game) => {
    const IGNScore = game.reviews.find((review) => review.source === "IGN");
    if (!IGNScore) {
      return false;
    }

    const isIGNHighScore = IGNScore.score > 9;

    return isIGNHighScore;
  })
  .map((game) => {
    const IGNScore = game.reviews.find((review) => review.source === "IGN");
    return `Game: ${game.title} - Score da IGN: ${IGNScore.score}`;
  });
//console.log(highScore)

function gamesByPlatform(games, platform) {
    return games
      .filter((game) => {
        const hasDesiredPlatform = game.platforms.find((p) => p === platform)
        return hasDesiredPlatform;
      })
      .map((game) =>({
      games: game.title,
      platform: game.platforms.filter((p) => p !== platform)
    }));
} 
const existingGames = gamesByPlatform(database.games, "PC");
//console.log(existingGames)

function searchParameter(gender, tags){
  //buscar jogos pela tag e genero (ou pelo menos um desses)
}