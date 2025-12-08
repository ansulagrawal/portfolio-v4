import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";

/**
 * Application root component that composes the main layout.
 *
 * Renders a <main> element containing the Navbar and Welcome components.
 * @returns {JSX.Element} The root JSX element for the application layout.
 */
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
    </main>
  );
}

export default App;