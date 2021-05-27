import { useState } from 'react';
import './App.css';
import Sicaklik from './Sicaklik';
import KaynamaKarar from './KaynamaKarar';

function App() {
  const [sicaklikC, setSicaklikC] = useState(0);

  return (
    <div>
      <h1>Sıcaklık Dönüşüm Uygulaması</h1>
      <Sicaklik celcius={sicaklikC} birim="c" sicaklikDegisti={setSicaklikC} />
      <Sicaklik celcius={sicaklikC} birim="f" sicaklikDegisti={setSicaklikC} />
      <KaynamaKarar celcius={sicaklikC} />
    </div>
  );
}

export default App;
