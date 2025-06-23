import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  // 랜덤 정수 하나 만들기.
  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //number 로 이루어진 list 섞기
  function shuffleNumList(numbers: number[], shuffleRepeats: number) {
    for (let a = 0; a < shuffleRepeats; a++) {
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
      }
    }
    return numbers
  }
  // 로또번호 만들기
  const generateLottoNumbers = () => {
    let numbers: number[] = [];
    for (let i = 1; i <= 45; i++) {
      numbers.push(i)
    }
    numbers = shuffleNumList(numbers, getRandomInt(5, 99))
    numbers = numbers.slice(0, 6)
    setLottoNumbers(numbers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-white text-center p-8 rounded-lg shadow-xl bg-opacity-70">
        <h1 className="text-4xl font-bold mb-6">로또 번호 추천</h1>
        <button
          onClick={generateLottoNumbers}
          className="px-6 py-2 bg-yellow-500 text-black rounded-lg text-lg hover:bg-yellow-600 transition-all"
        >
          로또 번호 생성
        </button>
        <div className="mt-8">
          {lottoNumbers.length > 0 && (
            <div className="text-2xl font-semibold">
              <p>추천 번호:</p>
              <div className="mt-2 text-3xl font-bold flex justify-center gap-4">
                {lottoNumbers.map((number, index) => (
                  <span
                    key={index}
                    className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full"
                  >
                    {number}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
