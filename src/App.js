import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './charts/BarChart';

function App() {
  const arr1 = [10, 15, 20, 35,40,45]
  const arr2 = [51, 48, 34, 25, 15, 33]
  const [data, setData] = useState(arr1);


  const handlechange = (e) => {
    const { value } = e.target;
    if(value == 1){
      setData(arr1);

    }
    else{
      setData(arr2);
    }
  }


  return (
      <div  class="grid jsutify-items-center justify-center py-6 ">
          <h2 class="text-center">Graphis with React and D3JS</h2>
          <h3 class="text-center ">Pleas select data from witch array do you want to see</h3>
          <select class="border-2" onChange={handlechange}>
          <option selected value='1'>Arr1</option>
          <option value='2'>Arr2</option>
          </select>
          <BarChart width={600} height={400} data={data} />
      </div>
  );
}

export default App;