
import { Doughnut} from "react-chartjs-2";

const LimitChart = (props) => {
  
    const data = {
  datasets: [
    {
      backgroundColor: ["#4c1d95",'rgb(255,255,255)',],
      borderColor:"rgb(113, 33, 194)",
      data: [props.limit,1000],
    },
  ],
};
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <Doughnut data={data} />
    </div>
  );
};
export default LimitChart;