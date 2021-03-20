import './App.css';
import Sprite from './components/Sprite';
import cat from './assets/cat_sprite.png';

function App() {
  const sprite = new Image();
  sprite.src = cat;

  return (
    <div className="App">
      <Sprite
        img={sprite}
        width={520}
        height={220}
        scale={0.5}
        cycle={11}
        frameLimit={4}
      />
    </div>
  );
}

export default App;
