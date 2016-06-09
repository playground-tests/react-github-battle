var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
  return axios.get("https://api.github.com/users/" + username + "/repos")
}

function getTotalStars(repos){
  return repos.data.reduce(function(acc, curr){
    return acc + curr.stargazers_count;
  }, 0)
}
function getPlayerData(username){
  return getRepos(username.login)
  .then(getTotalStars).then(function(totalStars){
  return {
    followers: username.followers,
    stars: totalStars
  }
})
}
function calculateScores(players){
  return [
    players[0].followers*3 + players[0].stars,
    players[1].followers*3 + players[1].stars
  ]
}



var helpers = {


    getPlayersInfo: function(players){
      return axios.all(players.map(function(username){
        return getUserInfo(username)
      })).then(function(info){
        return info.map(function(user){
          return user.data
        })
      }).catch(function(){
        console.warn("5od warning")
      });
    },
    battle: function(playerInfo){
      var playerOneData = getPlayerData(playerInfo[0])
      var playerTwoData = getPlayerData(playerInfo[1])
    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function(err){
      console.log(err);
    })
  }
};

module.exports = helpers;
