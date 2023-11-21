import logo from './logo.svg';
import './App.css';
import AppBar from './component/Appbar';
import Student from './component/Student';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Student />
      <Footer />
    </div>
  );
}

export default App;
