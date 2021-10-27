import './App.css';
import Footer from './components/Footer';
import FriendsBar from './components/FriendsBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container">
        <Header/>
        <Navbar/>
        <Profile/>
        <FriendsBar/>
        <Footer/>
    </div>
  );
}


export default App;
