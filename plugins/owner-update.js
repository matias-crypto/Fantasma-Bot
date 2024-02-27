import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await m.reply(`馃殌 饾懠饾懛饾懌饾懆饾懟饾懍 | 饾懆饾應饾懟饾懠饾懆饾懗饾懓饾拋饾懆饾懝`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("https://github.com/Enzito-Vase/DiabloBot-MD- && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
