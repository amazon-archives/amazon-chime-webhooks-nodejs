'use strict';

const https = require('https');

const wm = new WeakMap();

const sendMessage = (message, url, { markdown = true }) =>
  new Promise((resolve, reject) => {
    https
      .request(url, { method: 'POST' }, (res) => {
        let buf = '';

        res
          .on('data', (chunk) => (buf += chunk))
          .on('end', () => {
            buf = JSON.parse(buf);

            if (res.statusCode !== 200) {
              return reject(new Error(buf.Message || buf.message));
            }

            resolve({ messageId: buf.MessageId, roomId: buf.RoomId });
          });
      })
      .on('error', reject)
      .end(JSON.stringify({ Content: (markdown ? '/md ' : '') + message }));
  });

class Chime {
  constructor(url, options = {}) {
    wm.set(this, { ...options, url });
  }

  static sendMessage(message, url, options = {}) {
    return sendMessage(message, url, options);
  }

  sendMessage(message, options = {}) {
    const { url, markdown } = wm.get(this);

    return sendMessage(message, url, { markdown, ...options });
  }
}

module.exports = Chime;
