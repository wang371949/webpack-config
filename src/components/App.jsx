import "../styles/index.scss";
import Recipes from "./Recipes"
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
          <img src = {sword} alt= "sword" width="250"></img>
          <img src = {swordSvg} alt= "sword" width="250"></img>
        </section>
      </main>

      <Recipes />
    </>
  );
}

export default App;
