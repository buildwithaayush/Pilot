import CurrentDateTime from "./components/currentDateTime";
import Card from "./components/test";
import Todo from "./components/todo";


export default function Home() {
  return (
   <>
   <main>
    <h1 className="text-2xl font-bold">Dashboard</h1>
   <div className=" w-xl"><Todo/></div>
   
 
   </main>
   </>
  );
}
