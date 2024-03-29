// we can make the component which can notify the parent which top level component in order to update the state of it
import { Dispatch, SetStateAction } from "react";
type Props = {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
};
export default function Notifier({ isOn, setIsOn }: Props) {
  return (
    <div>
      {isOn ? <h1>On</h1> : <h1>Off</h1>}
      <button onClick={() => setIsOn(!isOn)}>Toggle switch</button>
    </div>
  );
}
