let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Batman`.trim(), m)
};
handler.help = ["logoprog"];
handler.tags = ["internet"];
handler.command = /^(logoprog)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/130354f8c0d451b19856d.jpg",
  "https://telegra.ph/file/c3afd061b44d1bdb51131.jpg",
  "https://telegra.ph/file/ee92f90d85cb8a75f19fe.jpg",
  "https://telegra.ph/file/31e86bb5eb11a2a726f21.jpg",
  "https://telegra.ph/file/1a142b14bf1da75382093.jpg",
];

handler.limit = 3;
