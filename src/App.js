import BaseButton from "./components/button.js"
import Navbar from "./components/navbar.js"
import DayliMenu from "./components/dailymenu.js"

function App() {
  return (
    <div>
      <Navbar />
      <DayliMenu diaDaSemana = "Segunda" />
    </div>
  );
}

export default App;
