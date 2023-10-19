let fs = require("node:fs");

let dacookie = null;

let setup = async (bot, robloxcookie) => {
  let files = fs.readdirSync("./functions");

  dacookie = robloxcookie;
  
  for (const file of files) {
    let thefunc = require("./functions"+file);

    bot.functionManager.createFunction(
      thefunc
    );
  };

  console.log("Aoi.roblox working on v1.")
};

module.exports = {
 setup: setup
};