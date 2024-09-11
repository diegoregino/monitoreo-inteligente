import { Button, PopupsProvider, usePopup } from 'package';
import './App.scss';

function App() {
  const {deleteAll} = usePopup();
  return (
    <main>
      <section className="button-section">
        <Button variant="primary" onClick={deleteAll}>
          Cerrar todos
        </Button>
      </section>
      <section className="popup-section">
        <PopupsProvider />
      </section>
    </main>
  );
}

export default App;
