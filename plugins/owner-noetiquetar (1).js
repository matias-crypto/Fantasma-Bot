let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `[ 👀 ️] 𝑵𝑶 𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑬𝑺 𝑨 𝑴𝑰 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 ` ,m, { contextInfo:{ externalAdReply: {title: 'FANTASMA BOT', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'https://wa.me/5493458437331'}}})
}
handler.customPrefix = /@5493458437331/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
