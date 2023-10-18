let setup = async (bot) => {
// that thing that should work when you do robloxaoi.setup() at your bot index.js file
};

module.exports = {
 setup: setup
};

console.log("roblox.aoi installed Working on v1");

const fs = require("node:fs");
for (const file of fs.readdirSync("./functions")) {
  const theFunction = require("./functions/" + file);

  bot.functionManager.createFunction(theFunction);
}
