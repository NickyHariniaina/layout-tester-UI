import { Navbar } from "../../Navbar/Navbar";
import qwerty from "../../../assets/qwerty.png";
import { ButtonTemplate } from "./ButtonTemplate";
import "./Documentation.css";

export const Documentation = () => {
  let list = 0;
  // FIXME: Add a forEach to render the list in the bodyContent property.
  // A lot to fix here.
  return (
    <div className="documentation">
      <header className="documentation__header d-flex flex-row justify-content-around align-items-center py-2">
        <h1 className="text-dark">RTFD</h1>
        <Navbar
          option1="Go back Home"
          link1="/"
          option2="Start testing"
          link2="/keyboard"
          option3="Settings"
          link3="/keyboard/settings"
          option4="About us"
          link4="/about_us"
        />
      </header>

      <nav className="my-4">
        <ul className="nav justify-content-around">
          <li className="nav-item">
            <ButtonTemplate
              title="View Keyboard List"
              header="List of all avalaible keyboard"
              bodyContent={list}
            />
          </li>
          <li className="nav-item">
            <ButtonTemplate
              title="View ranking"
              header="List of the best typer in the world"
              bodyContent={list}
            />
          </li>
          <li className="nav-item">
            <ButtonTemplate
              title="View Layout List"
              header="List of all avalaible layout"
              bodyContent={list}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
