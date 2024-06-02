import MonthTracker from './components/MonthTracker/MonthTracker'
import YearTracker from './components/YearTracker/YearTracker'
import Card from './components/UI/Card';


function App() {


  return (

      <Card className='h-[40rem] w-[70rem] max-w-[80%] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] rounded-3xl shadow-sm overflow-hidden'>
          <div className='h-[100%] flex'>
          <YearTracker/>
          <MonthTracker/>
          </div>
      </Card>
    
  );
}

export default App;
