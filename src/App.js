import Color from "./components/Color";
import { Routes, Route, Link } from "react-router-dom";
import BackgroundColor from "./components/BackgroundColor";
import Borders from "./components/Borders";
import Margin from "./components/Margin";
import Text from "./components/Text";
import Links from "./components/Links";

import List from "./components/List";
import Table from "./components/Table";
import Positioning from "./components/Positioning";
import Flex from "./components/Flex";

function App() {
  return (
    <div className="p-8">
      <nav>
        <ol>
          <li>
            <Link to="/" className="text-blue-700">
              {" "}
              Color
            </Link>
          </li>
          <li>
            <Link to="/bgcolor" className="text-blue-700">
              {" "}
              Background-Color
            </Link>
          </li>
          <li>
            <Link to="/border" className="text-blue-700">
              {" "}
              Border
            </Link>
          </li>
          <li>
            <Link to="/margin" className="text-blue-700">
              {" "}
              Margin
            </Link>
          </li>
          <li>
            <Link to="/text" className="text-blue-700">
              {" "}
              Text
            </Link>
          </li>
          <li>
            <Link to="/link" className="text-blue-700">
              {" "}
              Links
            </Link>
          </li>
          <li>
            <Link to="/list" className="text-blue-700">
              {" "}
              List
            </Link>
          </li>
          <li>
            <Link to="/table" className="text-blue-700">
              {" "}
              Table
            </Link>
          </li>
          <li>
            <Link to="/Positioning" className="text-blue-700">
              {" "}
              Positioning
            </Link>
          </li>
          <li>
            <Link to="/flex" className="text-blue-700">
              {" "}
              Flex
            </Link>
          </li>
          <hr />
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Color />} />
        <Route path="/bgcolor" element={<BackgroundColor />} />
        <Route path="/border" element={<Borders />} />
        <Route path="/margin" element={<Margin />} />
        <Route path="/text" element={<Text />} />
        <Route path="/link" element={<Links />} />
        <Route path="/list" element={<List />} />
        <Route path="/table" element={<Table />} />
        <Route path="/positioning" element={<Positioning />} />
        <Route path="/flex" element={<Flex />} />
      </Routes>
    </div>
  );
}

export default App;
