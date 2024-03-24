import { useState, useRef, useEffect } from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "I'm fine, thanks!" },
    { id: 4, text: "What about you?" },
    { id: 5, text: "I'm doing well too!" },
  ]);

  // Ref for scrolling to the bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to add a new message
  const addMessage = () => {
    const newMessage = { id: messages.length + 1, text: "New message" };
    setMessages([...messages, newMessage]);
  };

  // Scroll to the end of the messages list whenever it updates
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to scroll to the bottom of the messages list
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-500 h-500 bg-white text-black  border rounded-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto">
          <ul className="p-4">
            {messages.map((message) => (
              <li key={message.id}>{message.text}</li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        <button className="bg-blue-500 text-white p-2" onClick={addMessage}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
