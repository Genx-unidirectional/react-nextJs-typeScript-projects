import { useEffect, useState } from "react";

function Dialog() {
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(`${window.scrollX} and ${window.scrollY}`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    let ignore = false;
    async function fetchTodo(userId: number) {
      const result = await fetch("");
      //   const data = JSON.parse(result);
      if (!ignore) {
        //   setTodo(data as string);
      }
    }
    fetchTodo(userId);
    return () => {
      ignore = true;
    };
  }, [userId]);
  return (
    <div>
      <dialog></dialog>
    </div>
  );
}
export default Dialog;
