import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

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
