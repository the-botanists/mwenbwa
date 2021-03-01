# BTC-Games - Battle Tree


A web-based game of conquests… and trees ...
Based on data from https://data.gov.be/en/node/48556), we create a WebApp consisting of a REST-like API (back-end) and a React SPA (front-end). This WebApp will consist be an online [IDLE Game](https://en.wikipedia.org/wiki/Incremental_game), based in Liège.


## Live Demo

hosted on [VPS](https://battletree.neant.be/)

hosted on [heroku](https://btc-liege.herokuapp.com/)

## Technology used and specification

- NPM
- NodeJS
- MongoDB
- Docker
- Leaflet
- OpenStreetMap
___

## Mwenbwa - game rules

In a map of Liège, there will be trees. Each tree as a _value_ (which is the product of his _diameter_ by his _height_, *rounded to top*). 

When a player enter the game, he needs to create an account, will receive a random color (can be changed in profile), and will receive three random, *free* trees (and some bonus leaves, following the formula: `[total leaves of players] / [amount of players]`).  
Every fifteen minutes **in real life**, each player will receive an amount of leaves equals to the total of each of his trees.  
Every hour **in real life**, each player loose half his leaves.

Whenever he wants, a player can _buy_ a tree. 

- If the tree is *free*, the _value_ of the tree is its price. When a player buy a *free tree*, a [random name](https://www.npmjs.com/package/fantasy-name-generator) is affected to that tree.


> SOON
> - If the tree belongs to another player, the price is computed with the following formula: `[value of the targetted tree] + ([value of all the targetted  player's trees in 100m radius] × ([amount of trees in 100m radius] / [amount of tree of targetted player in 100m radius])) + [value of all the other players trees in 100m radius] - [value of all your tree in 100m radius]`.

API done but not implemented /api/trees/geo100/<tree_id>&<username_of_buyer>


> SOON
> Whenever he wants, a player can *lock* a tree by paying the following formula: `[value of the tree] × 10 + ([value of all the trees in 100m radius] × [amount of players in 100m radius]) - ([value of all player's trees in 100m radius] / [amount of players in 100m radius])`. A *locked tree* can't be buy by another player.
>

At anytime, a player can check the *leaderboard*, to see each player score, amount of trees, etc.  

At anytime, a player can consult the *gamelog*, which record all actions in the game.

When clicking on a tree, a player can see its value, name, owner, (SOON history of buys), and a link to the relative wikipedia article for this tree's species (if applicable). (SOON: Any player can also leave a comment on a tree).


## Screen Shot

![alt text](doc/screenshot/sshome.png?raw=true "Homepage - Login" )

![alt text](doc/screenshot/ssgameboard.png?raw=true "Gameboard - Map" )

![alt text](doc/screenshot/ssprofile.png?raw=true "Profile Edit" )

![alt text](doc/screenshot/ssscrore.png?raw=true "Score Board" )


___
## Installation/Deployment

```

git clone git@github.com:the-botanists/mwenbwa.git

cd mwenbwa

npm install

npm run build

docker-compose build

docker-compose up

open http://localhost/

```

___
## Contributor

![alt text](doc/team-4p.jpg?raw=true "Team Pictures" )

* Emilie PIERONT    [@EmiliePieront](https://github.com/EmiliePieront/)
* Cedric DEBROUX    [@macmowl](https://github.com/Cedricdebroux/)
* Kevin CASSART     [@KevKsar](https://github.com/KevKsar/)
* Cedric AUDRIT     [@freecey](https://github.com/freecey/)

___

## License
Please see [LICENSE](https://github.com/the-botanists/mwenbwa/raw/main/LICENSE) file for more details.
