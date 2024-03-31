import {
  useEffect,
  experimental_useEffectEvent as useEventEffect,
} from "react";
import { analytics as logAnalytics } from "../ui/concepts/analytics";
type Props = {
  roomId: number;
  theme: string;
};

export default function EscapeEffectDependency({ roomId, theme }: Props) {
  // let's say you want to make the connection the room using the roomId and there is also the theme there because you want to send the analytics to the server about the page visits by the user so you can put this in the effect also how much user use the dark and light theme
  //SO BASICALLY BELOW CODE DOES THE THING WHICH IS RUN THE USE EFFECT ONLY BASED ON THE ROOM ID BUT NOT BASED ON THE BOTH THEME AND ROOM ID
  const sendInfo = useEventEffect((roomId: number) => {
    logAnalytics(roomId, theme);
  });
  useEffect(() => {
    sendInfo(roomId);
  }, [roomId]);

  //   useEffect(() => {
  //     logAnalytics(roomId, theme);
  //   }, [roomId, theme]); //let's say we don't want to trigger the effect because of the theme changes so what we gonna do is we going to use useEventEffect
  return <div></div>;
}
