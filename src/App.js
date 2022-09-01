import React, {useState} from "react"
import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom"
import All from './All';
import Breakfast from './Breakfast';
import Shakes from './Shakes';

const initialState = [
  {
      id : 1,
      name : "Buttermilk Pancakes",
      img : "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18172535/051102039-01-buttermilk-pancakes-recipe-main.jpg",
      desc : "Buttermilk Pancakes have a light and spongy texture and their flavor only hints of the richness and tanginess that buttermilk offersk",
      price : "$15.99",
      type : "breakfast"
  },
  {
      id : 2,
      name : "Country Delight",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj0oIZ7M0-kuFAqv8kl68EkZLhmmyk1-VJcNMq0c6Lybo4ld0aRGKi7am6SQgT0kbb9o&usqp=CAU",
      desc : "Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with",
      price : "$20.99",
      type : "breakfast"
  },
  {
      id : 3,
      name : "Bacon Overflow",
      img : "https://makewithmara.com/wp-content/uploads/2022/06/IMG_8688.jpg",
      desc : "Bacon-wrapped foods are foods that are prepared by being covered in bacon. They may be baked, fried, or grilled",
      price : "$8.99",
      type : "breakfast"
  },
  {
      id : 4,
      name : "Godzilla Milkshake",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGtvThihIm6_ybLhKw5ist91qX1Lig3vFwA&usqp=CAU",
      desc : "“Milo Godzilla” is topped with whipped cream and/or vanilla ice cream. These heaps of chocolate malt powder are added to give extra crunch to the drinks.",
      price : "$6.99",
      type : "shakes"
  },
  {
      id : 5,
      name : "Oreo Dream",
      img : "https://saltandbaker.com/wp-content/uploads/2020/12/New-Oreo-Milkshake-3.jpg",
      desc : "This deliciously creamy Oreo milkshake is made in minutes by blending milk, ice cream, and Oreo cookies together for a kid-pleasing chilled drink.",
      price : "$18.99",
      type : "shakes"
  },
  {
      id : 6,
      name : "Quarantine Buddy",
      img : "https://pbs.twimg.com/media/EVhDJHHWoAAEbkB.jpg:large",
      desc : "Chocolate milkshake recipe with step by step photos easy and quick recipe to prepare delicious chocolate shake made with cocoa powder.",
      price : "$16.99",
      type : "shakes"
  }
]

export const allContext = React.createContext();

function App() {
  const [data, setData] = useState(initialState);


  return (
    <allContext.Provider value={data}>
      <div className="App">
        <h1>Our Menu</h1>
        <hr/>
        <Navbar/>

        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/breakfast' element={<Breakfast/>}/>
          <Route path='/shakes' element={<Shakes/>}/>
        </Routes>
      </div>
    </allContext.Provider>
  );
}

export default App;
