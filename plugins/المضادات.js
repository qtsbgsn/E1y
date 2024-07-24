import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 

let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let listSections = []    
listSections.push({ title: '『 وظيفة للإدمن 』',
rows: [{ header: `🎉 الترحيب ${m.isGroup ? chat.welcome ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} welcome`, description: `رسالة ترحيب للأعضاء الجدد في الجروبات\n` }, 
{ header: `🔗 منع الروابط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antilink`, description: `مسح الناس اللي يبعتوا روابط جروبات الواتساب\n` },
{ header: `🔗 منع الروابط 2 ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antilink2`, description: `مسح الناس اللي يبعتوا روابط فيها https\n` }, 
{ header: `🔗 منع التراها ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitraba`, description: `البوت بيكشف النصوص الطويلة اللي ممكن تكون فيروسات وتسبب تهنيج في الشات ويمسح المستخدم.\n` }, 
{ header: `🔗 منع تيك توك ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitiktok`, description: `مسح الناس اللي يبعتوا روابط تيك توك\n` }, 
{ header: `🔗 منع يوتيوب ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antiyoutube`, description: `مسح الناس اللي يبعتوا روابط يوتيوب\n` }, 
{ header: `🔗 منع تليجرام ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitelegram`, description: `مسح الناس اللي يبعتوا روابط تليجرام\n` }, 
{ header: `🔗 منع فيسبوك ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antifacebook`, description: `مسح الناس اللي يبعتوا روابط فيسبوك\n` }, 
{ header: `🔗 منع انستجرام ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antiinstagram`, description: `مسح الناس اللي يبعتوا روابط انستجرام\n` }, 
{ header: `🔗 منع تويتر ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitwitter`, description: `مسح الناس اللي يبعتوا روابط تويتر\n` }, 
{ header: `🔗 منع ديسكورد ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antidiscord`, description: `مسح الناس اللي يبعتوا روابط ديسكورد\n` }, 
{ header: `🔗 منع ثريدس ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antithreads`, description: `مسح الناس اللي يبعتوا روابط ثريدس\n` },
{ header: `🟢 منع الفيك ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antifake`, description: `دخول رقم فيك (افتراضي)، هيتم طرده تلقائي من الجروب...\n` }, 
{ header: `🔔 التنبيهات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} detect`, description: `تنبيهات من الأنشطة داخل الجروب\n` }, 
{ header: `🪄 الملصقات التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autosticker`, description: `الفيديوهات، الجيف، الصور، الروابط jpg أو jpeg; هيتحولوا لملصقات تلقائي\n` }, 
{ header: `🗑️ منع الحذف ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antidelete`, description: `أي رسالة محذوفة هتتبعت تاني للشات أو الجروب\n` }, 
{ header: `🔞 الوضع الساخن ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} modohorny`, description: `عرض محتوى للكبار فقط في الشات\n` }, 
{ header: `🔊 الصوتيات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} audios`, description: `تفعيل الإرسال التلقائي للصوتيات للجميع\n` }, 
{ header: `🆙 الترقية التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autolevelup`, description: `ترقية الجميع تلقائيًا؛ (يشمل مكافآت عند الترقية)\n` }, 
{ header: `🙃 الدردشة الآلية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} chatbot`, description: `البوت هيبدأ يتكلم مع الجميع في الجروب.\n` }, 
{ header: `🛂 وضع الأدمن ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `.${usedPrefix + command} modoadmin`, description: `فقط الأدمنز هيقدروا يستخدموا البوت في الجروبات\n` }, 
{ header: `『 وظيفة للمالك فقط 』\n`, title: `🔰 منع الخاص ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, id: `${usedPrefix + command} antiprivado`, description: `حظر الشخص اللي يستخدم البوت في الخاص\n` }, 
{ header: `🚫 منع المكالمات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} anticall`, description: `حظر الأشخاص اللي يعملوا مكالمات\n` }, 
{ header: `⛔ تقييد ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} restrict`, description: `تفعيل وظيفة لإضافة أو إزالة الأشخاص في الجروبات\n` }, 
{ header: `⚜️ خاص فقط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} pconly`, description: `السماح باستخدامه في الدردشات الخاصة فقط\n` }, 
{ header: `⚜️ جروبات فقط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} gconly`, description: `السماح باستخدامه في الدردشات الجماعية فقط\n` }, 
{ header: `✅ القراءة التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autoread`, description: `ترك الرسائل أو الشات كمقروءة.\n` },
{ header: `⏰ الكتابة التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autotyping`, description: `البوت سيظهر كأنه يكتب في الدردشة.\n` }, 
{ header: `🖼️ تحويل الصور ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} imagetosticker`, description: `تحويل الصور المرسلة إلى ملصقات تلقائيًا.\n` },
{ header: `👥 الدردشة العشوائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} randomchat`, description: `بدء دردشة عشوائية مع مستخدمين آخرين.\n` },
{ header: `📌 التثبيت التلقائي ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autopin`, description: `تثبيت الرسائل المهمة تلقائيًا في الدردشة.\n` },
{ header: `🎭 تغيير الوضع ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} modchange`, description: `تغيير وضع البوت بين الوضع العادي والحدود الأعلى.\n` },
{ header: `🔑 التحقق التلقائي ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autoverify`, description: `التحقق من المستخدمين الجدد تلقائيًا.\n` },
{ header: `🛡️ الحماية المتقدمة ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} advsecurity`, description: `تفعيل ميزات الحماية المتقدمة للجروب.\n` },
{ header: `🌐 حظر المواقع ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} blockweb`, description: `حظر الروابط والمواقع الغير مرغوب فيها.\n` }
]})

await conn.sendMessage(m.chat, { text: 'قائمة المضادات', sections: listSections, buttonText: 'اختر المضادات' }, { quoted: m })
}
handler.help = ['menu', 'مضادات']
handler.tags = ['main']
handler.command = /^(منع|المضادات)$/i
handler.register = false
export default handler
