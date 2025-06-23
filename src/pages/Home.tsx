import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const[lottoNumbers,setLottoNumbers]=useState<number[]>([]);
  const generateLottoNumbers=()=>{
    let numbers:number[]=[];
    for(let i=1;i<=45;i++){
      numbers.push(i)
    }
    for(let i=numbers.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [numbers[i],numbers[j]]=[numbers[j],numbers[i]]
    }
    setLottoNumbers(numbers)
  }

  return (
    <>
      <h2 className="min-h-screen bg-gray-100 flex items-center justify-center">
        홈 화면이에요!
      </h2>
      <p>리액트와 타입스크립트를 배워봐요 🎉</p>
      <Link to="/todo_list">
        <button
          className="px-6 py-3 bg-gradient-to-r
        from-green-500 to-indigo-500"
        >
          Todo List로 이동
        </button>
      </Link>
    </>
  );
};

export default Home;
