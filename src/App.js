// import drumsound1 from '/sound/tom-1.mp3';

function App() {
  const playAudio1 = () => {
    new Audio('/sound/tom-1.mp3').play();
  }
  const playAudio2 = () => {
    new Audio('/sound/tom-2.mp3').play();
  }
  const playAudio3 = () => {
    new Audio('/sound/tom-3.mp3').play();
  }
  const playAudio4 = () => {
    new Audio('/sound/tom-4.mp3').play();
  }
  const playAudio5 = () => {
    new Audio('/sound/tom-1.mp3').play();
  }
  const playAudio6 = () => {
    new Audio('/sound/kick-bass.mp3').play();
  }
  const playAudio7 = () => {
    new Audio('/sound/crash.mp3').play();
  }
  const playAudio8 = () => {
    new Audio('/sound/snare.mp3').play();
  }

  return (
    <div className="App">
      <div className="container" >
        <h1 className="flicker neon">DISCO</h1>
        <img src="/images/drum2.jpg" alt="drum1" />
        <div className="box1" onClick={playAudio1}></div>
        <div className="box2" onClick={playAudio2}></div>
        <div className="box3" onClick={playAudio3}></div>
        <div className="box4" onClick={playAudio4}></div>
        <div className="box5" onClick={playAudio5} ></div>
        <div className="box6" onClick={playAudio6}></div>
        <div className="box7" onClick={playAudio7}></div>
        <div className="box8" onClick={playAudio8}></div>
      </div>
    </div>
  );
}

export default App;
