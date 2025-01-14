import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export function CandlestickChart({ data }) {
  return (
    <ComposedChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={['auto', 'auto']} />
      <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className="bg-white z-0 p-2 border border-gray-300 shadow-md rounded">
                <p>Date: {data.date}</p>
                <p>Open: {data.open}</p>
                <p>Close: {data.close}</p>
                <p>High: {data.high}</p>
                <p>Low: {data.low}</p>
              </div>
            );
          }
          return null;
        }}
      />
      {data.map((entry, index) => (
        <Bar
          key={`candle-${index}`}
          dataKey="high"
          fill={entry.open > entry.close ? "#EF4444" : "#10B981"}
          stroke={entry.open > entry.close ? "#EF4444" : "#10B981"}
          strokeWidth={1}
          yAxisId={0}
        >
          <Bar
            dataKey="low"
            fill="none"
            yAxisId={0}
          />
        </Bar>
      ))}
      {data.map((entry, index) => (
        <Bar
          key={`body-${index}`}
          dataKey="close"
          fill={entry.open > entry.close ? "#EF4444" : "#10B981"}
          stroke={entry.open > entry.close ? "#EF4444" : "#10B981"}
          strokeWidth={1}
          yAxisId={0}
        >
          <Bar
            dataKey="open"
            fill="none"
            yAxisId={0}
          />
        </Bar>
      ))}
    </ComposedChart>
  )
}

