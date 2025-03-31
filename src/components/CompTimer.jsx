import { useEffect, useState } from "react";

function CompTimer(props) {
  console.log(props);

  const [activities, setActivities] = useState([]); // Armazenará as atividades da tabata

  /*
    const [time, setTime] = useState(0); // Em segundos
    const [paused, setPaused] = useState(false); // O temporizador está parado ou não
  */

  const [phase] = useState(1); // Fase atual da tabata

  useEffect(() => {
    const currentActivity = props.tabata.activities;
    if (currentActivity) {
      setActivities(currentActivity);
      console.log(props.tabata.activities);
    }
  }, [props]);

  return (
    <section>
      {activities.length > 0 ? (
        activities.find((activity) => activity.activityId === phase) ? (
          <div className="w-screen flex flex-col justify-center h-min-200 bg-amber-300 p-3">
            <p className="text-center text-xl font-bold">
              {
                activities.find((activity) => activity.activityId === phase)
                  .activityTitle
              }
            </p>
            <p className="text-center text-9xl font-bold'">
              {
                activities.find((activity) => activity.activityId === phase)
                  .activityTimer
              }
            </p>
          </div>
        ) : (
          <p>Atividade não encontrada</p>
        )
      ) : (
        <p>Nenhuma tabata foi selecionada!</p>
      )}
    </section>
  );
}

export default CompTimer;
