# Rarity Adventures

A simple frontend for [Andre Cronje](https://twitter.com/andrecronje)'s [Rarity NFT game](https://andrecronje.medium.com/loot-rarity-d341faa4485c)

### Current Feature

Integrated with Rarity Address (Mint, adventure, adventure all)
Rarity Gold
Rarity Attribute
Added retry to completion function to improve the RPC calling failure
### The Early Version of The Game Mechanics
As our goal to make an Idle version of Rarity to conquer the Goddess Tower, we plan on settle down the simple version of the game mechanics with the basic rules as:

The game will be built on top of Rarity's summoner. The current attribute system & Summoner's level will play a crucial role in the Idle version as primary stats and multiplier, respectively.
The only level in the Idle game is from the Summoner's level; However, it will be further integrated with the Athena Systems. The summoners could level up Athena Systems by clearing the tower. The Athena System will give a range of buff to the summoners like magical findings, higher multiplier, ailment effects, etc.
For the simplified version, we're going to cover only the secondary stats and skip the special effects like (poisons, burn, physical/magical penetration, etc..) for now. The secondary stats are calculated based on the summoner's primary stats, level (multiplier), and the class as well. The secondary stats will only cover Magical/Physical Atk, Def, Magic Rest, Physical Rest, Accuracy, & Dodge for this early version.
Items under the legendary tier only provide secondary stats that make the Summoner's Level & Primary Stats the most important thing in the game.
Each floor of the tower will have a list of enemies & bosses to be randomized. The Goddess's gonna roll her dice on the adventurer.
The raid result will be based on the total combat power of the summoners (3 frontline and 1 sideline summoners from a team) and the tower's demon defenders.
The buff/debuff skills come with a range effects (only some special classes like Monk with their inner balance or Bard have fixed effects).
The total combat power will have resulted from the buff/debuff from both teams and again the Goddess needs to roll her dice to enjoy the show here. On our worst day, we could get minimal buff effects while the tower enemies get a bunch of high-level demons with strong buff/debuff skills that greatly affect our overall combat power.
The game will be set in manual & automatic modes with a cooldown of 1hour/raid. The cooldown time will be reduced by the Staking System of the game currency (up to you to select the main currency, which could be FTM or gold).
It's gonna take the game currency as some fees to raid the Goddess Tower. Every successful raid could get back 55-70% of the total fee. The adventurer needs to dump their unused items looted from the tower to get more gold. As for the early version and without the Items database, we could run an x2 reward so the adventurer could get enough to continue their raid for good.
### Team
We have a team of 3 part-time developers for now.

1 full-stack web developer
1 software engineering
1 game developer
Roadmap & Milestones
Continue integrating new contracts from the community
Deploy the contract for the early version of Idle game
Build up gear system & special effects
With the support fund, we could request Evan Todd-McCoy to further design the game animation as well as gear designs, and for sure get more devs onboard
PvP & weekly tournaments will come soon
Full version unlocked with all special effect skills, unique legendary affixes, goddess's blessing, and so on
Any donation is greatly appreciated.

Wallet Address: 0x8951555e012D4A0BfCf7eFd3F9908D97a55E7F91
Website: https://rarity-hawk.netlify.app/

**************************************************************************************
This project was bootstrapped with [Create Eth App](https://github.com/paulrberg/create-eth-app).

### Development

#### `yarn react-app:start`

Runs the React app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

#### `yarn react-app:test`

Runs the React test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing React.](https://facebook.github.io/create-react-app/docs/running-tests)

#### `yarn react-app:build`

Builds the React app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the React documentation on [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn react-app:eject`

**Note: this is a one-way operation. Once you `react-app:eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` the React app at any time. This command will
remove the single build dependency from your React package.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right
into the `react-app` package so you have full control over them. All of the commands except `react-app:eject` will still work,
but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `react-app:eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.