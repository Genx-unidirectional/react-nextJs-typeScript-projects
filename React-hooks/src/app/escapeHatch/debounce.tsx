import { useRef } from "react";

type DebounceProps = {
  onClick: () => void;
  children: React.ReactNode;
};
function DebouncedButton({ onClick, children }: DebounceProps) {
  const timeoutID = useRef<NodeJS.Timeout>();
  return (
    <button
      className="bg-black text-white p-[1px] font-medium text-sm rounded-sm"
      onClick={() => {
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
          onClick();
        }, 2000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="flex w-5/6 sm:w-1/2 gap-1 rounded-sm p-2 bg-white">
        <DebouncedButton onClick={() => alert("Spaceship launched!")}>
          Launch the spaceship
        </DebouncedButton>
        <DebouncedButton onClick={() => alert("Soup boiled!")}>
          Boil the soup
        </DebouncedButton>
        <DebouncedButton onClick={() => alert("Lullaby sung!")}>
          Sing a lullaby
        </DebouncedButton>
      </div>
    </>
  );
}
