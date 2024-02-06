import { useCallback, useEffect, useState } from "react"
import { IAvailabilityCalendar } from "./availability-calendar/types";

const App = () => {

  const [result, setResult] = useState<string>('')
  const [availabilityCalendar, setAvailabilityCalendar] = useState<IAvailabilityCalendar>();

  const loadAvailabilityCalendar = useCallback(async () => {
    const { create } = (await import('http://localhost:8080/sdk/availability-calendar/entryPoint.js')).default;
    setAvailabilityCalendar(create());
  }, []);

  useEffect(() => {
    console.log('useEffect');
    loadAvailabilityCalendar();
  }, [loadAvailabilityCalendar]);

  const handleClick = async () => {
    if (!availabilityCalendar) return;
    const day = await availabilityCalendar.getDay({date:'2024-06-08'});
    console.log(day);
    setResult(JSON.stringify(day, null, 2));
  }

  return (
    <div>
      <h1>Client App</h1>
      <button onClick={handleClick}>Click here</button>
      <p>Result:</p>
      <pre>{result}</pre>
    </div>
  )
}

export default App
