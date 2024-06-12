import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MealList from './components/Meal/MealList';
import CartContextProvider from './contexts/CartContextProvider';

function App() {
  return (
   <CartContextProvider>
   <Cart />
   <Header />
   <Hero />
   <MealList />
   </CartContextProvider>
  );
}

export default App;
