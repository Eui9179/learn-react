import Button from "./Button";
import styles from "./App.module.css";
//css 모듈화 - App.module.css

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
