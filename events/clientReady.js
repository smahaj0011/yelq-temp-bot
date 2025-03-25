const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      `Logged in as ${client.user.tag} in ${client.guilds.cache.size} servers!`
    );
    client.user.setActivity("Yelq 😎", { type: ActivityType.Watching });
  },
};
