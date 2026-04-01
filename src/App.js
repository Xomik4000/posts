import logo from './logo.svg';
import './App.css';

  /**
    * Главная - / - тут меню и мб виджет с 3 последними постами
    * /posts - тут все посты с погинацией, сортировкой и фильтрацией
    * /posts/id - страничка конкретного поста
    * /posts/id/edit - страничка редактирования поста
    * /posts/add - страничка добавления поста(под админом)
    * /auth - страничка авторизации
    * /register - страничка регистрации
   */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
