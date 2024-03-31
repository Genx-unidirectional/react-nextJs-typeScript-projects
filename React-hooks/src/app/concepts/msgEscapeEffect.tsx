// Think about that the component is a chat app which connects to the chat room let's say we have the message and those messages are going to update the component UI

import { useEffect, useState } from "react";

export function ChatRoom({ roomId }: { roomId: number }) {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    // let's say in this effect we are making the connection to connect to the chatRoom based on the roomId
    // const connection = createConnection(roomId);
  });
}
