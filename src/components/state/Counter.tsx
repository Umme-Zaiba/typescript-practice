import React,{ useState } from 'react'

type CounterProps = {
  initialCount?: number
}

const Counter: React.FC<CounterProps> = ({initialCount=0}) => {
    const [count, setCount] = useState<number>(initialCount);
    
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
