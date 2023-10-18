let setup = async (bot) => {
// that thing that should work when you do aoiroblox.setup() at your bot index.js file
};

module.exports = {
 setup: setup
};
console.log("roblox.aoi installed Working on v1")

for (const file of require("node:fs").readFileSync("./functions")) {
var thefunction = require("./functions/"+file);

<bot>.functionManager.createFunction(
thefunction
);
};
