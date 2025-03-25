const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    if (member.bot) return;

    const chat = member.guild.channels.cache.get("1344437665013170310");
    const rolesToAdd = [
      "1115156261634326552",
      "1115156256852807740",
      "1115156249785417809",
      "1115156246551613461",
    ];

    const embed = new EmbedBuilder()
      .setTitle(`Welcome to __${member.guild.name}__, ${member.displayName}!`)
      .setDescription(
        `➜ Read our rules in ⁠<#1115156273239949322>
    ➜ Apply for staff in ⁠<#1115270614404575322>
    ➜ To know what has been happening lately, read ⁠<#1115163704728756274>`
      )
      .setColor("#B77BEB")
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter({
        text: `You are member #${member.guild.memberCount}`,
        iconURL: member.guild.iconURL(),
      });

    chat.send({
      content: `<@&1115156262783553576> **__Welcome our newest member!__** <@${member.id}>  🙌`,
      embeds: [embed],
    });

    rolesToAdd.forEach((roleId) => {
      const role = member.guild.roles.cache.get(roleId);
      if (role) {
        member.roles.add(role).catch(console.error);
      } else {
        console.error(`Role with ID ${roleId} not found.`);
      }
    });

    console.log(
      `Member ${member.user.tag} joined the server ${member.guild.name}`
    );
  },
};
