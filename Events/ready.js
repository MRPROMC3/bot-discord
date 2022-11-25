const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadCommands")

module.exports = async bot => {

    await loadSlashCommands(bot)


console.log(`${bot.user.tag} est bien en ligne !`)

}