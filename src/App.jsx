import "./app.css";

import { Centerpiece } from "./components/centerpiece";
import { Icons } from "./components/icons";
import { Projects } from "./components/projects";
import { Prompt } from "./components/prompt";
export default function App() {
  return (
    <div>
      <Prompt />
      <Centerpiece class="centerpiece" />
      <Icons />
      <Projects />
    </div>
  );
}
