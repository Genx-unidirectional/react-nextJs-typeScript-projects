let guest = 0;

function PureJsx() {
  return (
    <div className="p-2 w-3/4 h-1/2 bg-white rounded-lg gap-8 flex flex-col items-center">
      <Cup />
      <Cup />
      <Cup />
      <Cup />
    </div>
  );
}
export default PureJsx;

function Cup() {
  guest = guest + 1;
  return <h2 className="text-2xl text-black">Guest number :{guest}</h2>;
}
