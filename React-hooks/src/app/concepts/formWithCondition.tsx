import { FormEventHandler, useState } from "react";

export default function FormOrThanks() {
  const [message, setMessage] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="w-3/4 h-3/5 bg-green-400 rounded-lg p-2 flex justify-center items-center">
      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="flex  gap-2 flex-col items-center h-1/2 w-full"
          action=""
        >
          <input
            type="text"
            className="bg-white  text-black h-1/2 text-xl p-1 rounded-lg"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            disabled={message === ""}
            className="w-1/2 py-1 font-bold text-2xl rounded-lg bg-green-600 text-white"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-2 h-1/2 w-full">
          <h1 className="text-3xl text-black font-bold text-center">
            Thank you for sending the message{" "}
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="w-4/5 py-1 font-bold text-2xl rounded-lg bg-green-600 text-white text-nowrap"
          >
            Go back to chat
          </button>
        </div>
      )}
    </div>
  );
}
