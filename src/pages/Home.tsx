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
      <h2 className="">
        홈 화면이에요!
      </h2>
      <p>로또번호 🎉</p>
      <div>
        {lottoNumbers.map((num,index)=>(
          <span>{num}</span>
        ))}
      </div>
      <Link to="/todo_list">
        <button
          className=""
          onClick={generateLottoNumbers}
        >
          번호생성
        </button>
      </Link>
    </>
  );
};

export default Home;
