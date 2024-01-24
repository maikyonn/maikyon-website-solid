import "./app.css";

import { Centerpiece } from "./components/centerpiece";
import { Icons } from "./components/icons";
import { Projects } from "./components/projects";
import { Prompt } from "./components/prompt";
export default function App() {
  return (
    <div class="max-w-full min-w-full overflow-hidden">
      <Prompt />
      <Centerpiece class="centerpiece" />
      <Icons />
      <Projects />
    </div>
  );
}
