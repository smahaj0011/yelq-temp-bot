const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),

  async execute(interaction) {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();
    const ping = reply.createdTimestamp - interaction.createdTimestamp;
    const embed = new EmbedBuilder()
      .setDescription(
        `Client Latency: ${ping}ms\nAPI Latency: ${interaction.client.ws.ping}ms`
      )
      .setColor(0x0099ff);

    await interaction.editReply({ content: ``, embeds: [embed] });
  },
};
