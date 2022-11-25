const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "affiche la latence",
    permissions: "Aucune",
    dm: false,
    

    async run(bot, message) {

    await message.reply(`Mon ping est de : \`${bot.ws.ping}\``)

    }
}