let handler = m => m
handler.all = async function (m) {

    if (m.messageStubType == 9 && m.message) { // Check if it's a sticker message
        let stickerId = m.message.stickerMessage.fileSha256.toString('base64');
        let stickerUrl = `https://telegra.ph/file/9fc08aab50e09fc965122.jpg`;
        this.sendFile(m.chat, stickerUrl, 'sticker.png', '🤖', m);
        return true; // Return true to indicate message is handled
    }

    if (/^بيض$/i.test(m.text) ) {
      const vn ='/.media.علاوي.mp3'
      let av ='https://telegra.ph/file/76ed55228cd0c70426236.jpg'
      this.sendFile(m.chat, av, vn, null, m, true, { type: 'audioMessage', ptt: true })
      return true; // Return true to indicate message is handled
    }

    if (/^احبك$/i.test(m.text) ) {
       let av ='https://telegra.ph/file/ddc18e562ae274b998c74.jpg'
       this.sendFile(m.chat, av, '*لا*', null, m, true, { type: 'audioMessage', ptt: true })
       return true; // Return true to indicate message is handled
    }

    if (/^اسطوري$/i.test(m.text) ) {
        let av ='اسطوري,https://telegra.ph/file/da56597c69939a8d06d2b.jpg'
        this.sendFile(m.chat, av, 'لا', null, m, true, { type: 'audioMessage', ptt: true })
        return true; // Return true to indicate message is handled
    }
  
    return false; // Return false if message is not handled
}
 
export default handler;
