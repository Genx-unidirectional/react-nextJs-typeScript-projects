import { useState } from "react";
type PanelProps = {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onShow: () => void;
};
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col items-start bg-white overflow-hidden overflow-y-scroll text-black w-full h-1/2 rounded-lg p-2">
      <h2 className="text-2xl mb-4 font-bold">Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <section className="panel">
      <h3 className="text-xl font-bold">{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="bg-black p-1 text-white rounded-lg" onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
