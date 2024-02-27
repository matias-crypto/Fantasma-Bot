import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*Ingresé el nombre de la aplicación que desea descargar/instalar*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `🍁 *descargando su aplicación*\n\n🍁 *nombre*:  ${data5.name}\n🍁 *package*: ${data5.package}\n🍁 *última actualización*: ${data5.lastup}\n🍁 *peso*: ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '❌ *archivo demasiado pesado no se enviara*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*no se encontraron resultados a su búsqueda*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
