import { useEffect } from "react";

type Props = {
  id: number;
};
function AbortControl(props: Props) {
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const result = await fetch(`${props.id}`, {
          signal: abortController.signal,
        });
        const newData = await result.json();
      } catch (e) {
        // if (e.name === "AbortError") {
        // }
      }
    };
    return () => {
      abortController.abort();
    };
  }, [props.id]);
  return <div>AbortControl</div>;
}
export default AbortControl;
