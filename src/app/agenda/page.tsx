import EventTopics from "../home/components/eventTopics/EventTopics";

interface Sessao {
  sala: string;
  inicio: string;
  fim: string;
  topic: EventTopics;
}
export default function Agenda ()
{
  return (
    <div className="flex justify-center">
      <h1 className="">Agenda</h1>
    </div>
  );
}
