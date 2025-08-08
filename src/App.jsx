import Logo from "./component/Logo";
import Form from "./component/Form";
import Stats from "./component/Stats";
// import Item from "./component/Item";
import PackingList from "./component/PackingList";

export function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
