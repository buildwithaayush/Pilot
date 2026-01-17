import CurrentDateTime from "./components/currentDateTime";
import Quotes from "./components/quotes";

export default function Home() {
  return (
   <>
   <main>
    <h1 className="text-2xl font-bold">Dashboard</h1>
   
      <Quotes/>
   </main>
   </>
  );
}
