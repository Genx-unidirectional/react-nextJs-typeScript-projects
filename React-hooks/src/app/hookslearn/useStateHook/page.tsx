import MoreOnUseState from "./usingdevtools";
import BasicUseState from "./basicUseState";

export default function Page() {
  const componentArr = [<BasicUseState />, <MoreOnUseState />];
  return (
    <>
      {componentArr.map((component) => {
        return (
          <div className="flex w-full h-screen justify-center items-center">
            {component}
          </div>
        );
      })}
    </>
  );
}
