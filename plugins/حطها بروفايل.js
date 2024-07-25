import fs from 'fs'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const jimp_1 = require('jimp')

let handler = async (m, { conn, command, usedPrefix }) => {
 let q = m.quoted ? m.quoted : m
 let mime = (q.msg ? q.msg : q).mimetype ? q.mimetype : q.mediaType || ''
 if (/image/g.test(mime) && !/webp/g.test(mime)) {
  try {
   let media = await q.download()
   let botNumber = await conn.user.jid
   let { img } = await pepe(media)
   await conn.query({
    tag: 'iq',
    attrs: {
     to: botNumber,
     type:'set',
     xmlns: 'w:profile:picture'
    },
    content: [
     {
      tag: 'picture',
      attrs: { type: 'image' },
      content: img
     }
    ]
   })
   m.reply('*تم ي مطوري 🫡*')
  } catch (e) {
   console.log(e)
   m.reply('حدث خطأ، حاول مرة أخرى لاحقًا')
  }
 } else {
  m.reply(`ابعت الصورة مع التسمية التوضيحية${usedPrefix + command} \nأو أشِّر على الصورة اللي عايزها تبقى بروفايل البوت ي مطوري 🫡♥"`)
 }
}

handler.help = ['حطها_بروفايل']
handler.tags = ['owner']
handler.command = /^(حطها_بروفايل)$/i

handler.rowner = true

export default handler

async function pepe(media) {
    const jimp = require('jimp');
    const image = await jimp.read(media)
    const min = image.getWidth()
    const max = image.getHeight()
    const cropped = image.crop(0, 0, min, max)
    return {
     img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
     preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    }
   }
   
