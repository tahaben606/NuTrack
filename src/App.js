import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducer';
import Navbar from './components/navbar'; // Ensure the component name is PascalCase
import SliderList from './components/SliderList';
import HeroAbout from './components/hero-about'; // Ensure the component name is PascalCase

// Create Redux store
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar /> {/* Render Navbar at the top */}
        <SliderList /> {/* Render SliderList below Navbar */}
        <HeroAbout /> {/* Render HeroAbout below SliderList */}
      </div>
    </Provider>
  );
};

export default App;