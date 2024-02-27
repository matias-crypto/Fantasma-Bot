var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }

  if (command == "cursos") {
    var play = `*[ CURSOS ]*\n\n*Mini cursos de programación*\n
*${usedPrefix}En el numero +1 (720) 263-5863*\n*Entra al perfil y veras los cursos que hay*\n\naparte si tienes dudas mande msj ahi\n\n*Disfruta de los mini cursos 👋🏼*`.trim();
    m.reply(play);
  }
};
handler.command = ["y", "cursos", "", ""];
handler.tags = ["internet"];
export default handler
