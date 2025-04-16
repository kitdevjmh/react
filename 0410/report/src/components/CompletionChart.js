import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function CompletionChart({ rate }) {
  const data = [
    { name: "완료", value: rate },
    { name: "미완료", value: 100 - rate }
  ];

  const COLORS = ["#4CAF50", "#ddd"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", position: "relative" }}>
      <h3>오늘의 습관 달성률</h3>
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {/* 가운데 텍스트 표시 */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
          fontWeight: "bold"
        }}>
          {rate}%
        </div>
      </div>
    </div>
  );
}

export default CompletionChart;
