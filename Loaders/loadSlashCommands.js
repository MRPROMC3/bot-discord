const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js")

module.export = async bot => {
    console.log("Test load commands #1");
    let commands = [];

    bot.commands.array.forEach(async command => {
        console.log("Test load commands #2");
        let slashcommands = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .description(command.description)
        .setDMPermission(command.dm)
        .setDefautMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if(command.options?.lengh >= 1) {
        
            for( let i = 0; i < command.options.lengh; i++) {
            slashcommands[` add${command.options[i].type.slice(0, 1).toLowerCase() + command.options[i].type.slice(1, command.options[i].type.lengh)}Option`](option => option.setName(command.options[i].name).setDescrition(command.option[i].description).setRequired(command.options[i].required))
            }
            
            const rest = new REST ({version: 10}).setToken(bot.token)

            await rest.put(Routes.applicationCommands(bot.user.id), {body: commands })
            console.log("Les slashs commandes sont crées avec succès")
        }

        await commands.push(slashcommands)
    })
    const REST = new REST({version: "10"}).setToken(bot.token)

    await rest.put(Routes.applicationCommands(bot.user.id), {body: commands})
    console.log("Les slashs commandes sont activés avec succès !")
}