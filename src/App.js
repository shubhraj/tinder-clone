
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    //BEM Class Naming convention..
    <div className="app">
        {/* Header */}    
        <Header/>
   
        {/* Tinder Card */}
        <TinderCards/>
        {/* Swipe Buttons */}
        <SwipeButtons/>


     </div>
  );
}

export default App;
