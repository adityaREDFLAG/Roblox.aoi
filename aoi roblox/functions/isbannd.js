module.exports = {
name: "$RBXisBanned",
type: "aoi.js",
code: `
$getObjectProperty[isBanned;isBanned]
$createObject[isBanned;$jsonRequest[https://users.roblox.com/v1/users/]
`
}
