import { StatusBar } from "expo-status-bar";

// Necessário, pois o Expo tem o Input dentro do node_modules e o .gitignore volta para a configuração inicial
import Initial from "./src/App";

export default function App() {
  return <Initial />;
}
