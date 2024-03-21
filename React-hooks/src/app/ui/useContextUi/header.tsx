import { useContext } from "react";
import { LevelContext } from "@/app/hookslearn/useContext/levelContext";
import clsx from "clsx";
const Header = ({ children }: { children: string }) => {
  const level = useContext(LevelContext);
  return (
    <h1
      className={clsx({
        "text-sm": level == 1,
        "text-lg": level == 2,
        "text-xl": level == 3,
        "text-2xl": level == 4,
        "text-3xl": level == 5,
      })}
    >
      {children} {level}
    </h1>
  );
};
export default Header;
