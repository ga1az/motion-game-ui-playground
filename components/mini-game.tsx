import { useState } from 'react';
import { Button } from './ui/button';
import useMoney from '@/lib/money.hook';

export default function MiniGame() {
  const [score, setScore] = useState(0);
  const { addMoney } = useMoney();

  const handleClick = () => {
    setScore(score + 1);
    if (score + 1 === 10) {
      addMoney(50);
      setScore(0);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-mono text-white">Score: {score}</p>
      <Button
        className="mt-2 border-4 border-black bg-gray-300 text-black font-bold py-2 px-4 w-full cursor-pointer font-mono select-none"
        onClick={handleClick}
      >
        Play Mini-Game
      </Button>
    </div>
  );
}
