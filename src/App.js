import "./App.css";
import Header from "./MyComponents/header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job don2",
    },
    {
      sno: 3,
      title: "Go to the garden",
      desc: "You need to go to the market to get this job done3",
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
