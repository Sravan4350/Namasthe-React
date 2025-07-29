import { createRoot } from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/BodyComponent";
import cards from "./utils/mockData";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body cards={cards} />
    </div>
  );
}; 

// Render the App
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);