# Amazon Chime

Send Amazon Chime messages using webhooks.

- [Amazon Chime](https://aws.amazon.com/chime)
- [Webhooks for Amazon Chime](https://docs.aws.amazon.com/chime/latest/dg/webhooks.html)
- [Adding Webhooks to Chat Rooms](https://docs.aws.amazon.com/chime/latest/ug/webhooks.html)

```javascript
const Chime = require('chime');

(async () => {
  try {
    await Chime.sendMessage('hello world', '<WEBHOOK_URL>');
  } catch (err) {
    // do something with err
  }
})();
```

## Class: Chime

<sup>Added in: v1.0.0</sup>

### new Chime(url[, options])

<sup>Added in: v1.0.0</sup>

- `url` `<string>` - Webhook URL
- `options` `<object>` Overridden by `room.sendMessage()` options.
  - `markdown` `<boolean>` - Send message using markdown syntax. **Default:** `true`
- Returns: `<Chime>`

```javascript
const room = new Chime('<WEBHOOK_URL>');
```

### Chime.sendMessage(message, url[, options])

<sup>Added in: v1.0.0</sup>

- `message` `<string>`
- `url` `<string>` - Webhook URL
- `options` `<object>`
  - `markdown` `<boolean>` - Send message using markdown syntax. **Default:** `true`
- Returns: `<Promise<object>>`
  - `messageId` `<string>`
  - `roomId` `<string>`

Sends message.

```javascript
const result = await Chime.sendMessage('hello world', '<WEBHOOK_URL>');

console.log(result);
// Prints something like:
// {
//   messageId: '1d048345-443a-4ad7-8247-69cf95bc5b73',
//   roomId: '3a5be182-197c-4b48-8efe-0c6d3a0f24b1'
// }
```

### room.sendMessage(message[, options])

<sup>Added in: v1.0.0</sup>

- `message` `<string>`
- `options` `<object>`
  - `markdown` `<boolean>` - Send message using markdown syntax.
- Returns: `<Promise<object>>`
  - `messageId` `<string>`
  - `roomId` `<string>`

Sends message.

```javascript
const result = await room.sendMessage('hello world');

console.log(result);
// Prints something like:
// {
//   messageId: '1d048345-443a-4ad7-8247-69cf95bc5b73',
//   roomId: '3a5be182-197c-4b48-8efe-0c6d3a0f24b1'
// }
```

## Contributions

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [Apache-2.0 License](LICENSE).
