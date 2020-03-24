interface Options {
  markdown?: boolean;
}

interface Response {
  messageId: string;
  roomId: string;
}

declare class Chime {
  constructor(url: string, options?: Options);

  static sendMessage(
    message: string,
    url: string,
    options?: Options
  ): Promise<Response>;

  sendMessage(message: string, options?: Options): Promise<Response>;
}

declare module 'chime' {
  export = Chime;
}
