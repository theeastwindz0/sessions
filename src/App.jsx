import { useState } from "react"
import LandingPage from "./pages/LandingPage";

const App = () => {
  const student={
    name:'ABC',
    class:"12",
    school:'LORA INTERNATIONAL'
  }

  const {name,school}=student;
  console.log(school)


  const inputValue=useState('himanshu');

  const onSubmitHandler=()=>{
    console.log(inputValue[0]);

  }


  return (
    <div>
      {/* <h2 className="text-xl text-center text-red-500">{inputValue}</h2>
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-gray-200 flex flex-col p-8 rounded-2xl w-[600px] m-4 gap-4">
        <label htmlFor="task">TASK</label>
        <input className="p-2" type='text'></input>
        <button onClick={onSubmitHandler} className="bg-black p-2 text-white">SUBMIT</button>
      </div>
    </div> */}
    <LandingPage/>
    </div>
  )
}

export default App