import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

/**
 * The ProgressBar component utilizes Recharts to display a 
 * progress bar as a horizontal bart chart. The data as well as the goal 
 * are passed in through props. The data is used for the bar and the goal
 * is used to change to domain of the x-axis. The graph changes as the user 
 * enters new data.
 * @param {*} props data for the bar chart and goal for the x-axis domain
 * @returns the proogress bar component
 */
function ProgressBar(props) {
  return (
    <div className="w-full h-[20vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={props.data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis type="number" domain={[0, props.goal]} stroke="white"/>
          <YAxis type="category" dataKey="name" stroke="white"/>
          <Tooltip/>
          <Bar dataKey="value" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressBar;
