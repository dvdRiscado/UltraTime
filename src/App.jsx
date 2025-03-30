import { useEffect, useState } from "react";
import CompTimer from "./components/CompTimer";

function App() {
  const [tabatas, setTabatas] = useState([
    {
      id: 1,
      title: "UltraTime",
      actived: true,
      activities: [
        {
          activityId: 1,
          activityTitle: "Preparar...",
          activityTimer: 5,
        },
        {
          activityId: 2,
          activityTitle: "Polichinelo!",
          activityTimer: 30,
        },
      ],
    },
  ]);

  const [selected, setSelected] = useState({});

  useEffect(() => {
    const activeTabata = tabatas.find((tabata) => tabata.actived === true);
    if (activeTabata) {
      setSelected(activeTabata);
    }
  }, [tabatas]);

  return (
    <div className="h-screen w-screen bg-stone-700">
      <header className="bg-stone-800 flex justify-center relative p-6">
        <button className="absolute left-0 top-0 bottom-0 ml-6">Menu</button>
        <h1 className="text-white">{selected?.title || "Carregando..."}</h1>
      </header>
      <CompTimer tabatas={selected} />
    </div>
  );
}

export default App;
