import { Card } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
  color?: string;
}

interface InteractiveChartProps {
  type: "line" | "bar" | "pie";
  data: ChartData[];
  color: "yoolax" | "galactic" | "ghm";
  title: string;
}

export function InteractiveChart({ type, data, color, title }: InteractiveChartProps) {
  const colors = {
    yoolax: "#3B82F6",
    galactic: "#EF4444",
    ghm: "#22C55E"
  };

  const currentColor = colors[color];

  const colorClasses = {
    yoolax: "border-yoolax/20",
    galactic: "border-galactic/20",
    ghm: "border-ghm/20"
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label || payload[0]?.name}</p>
          <p className="text-sm" style={{ color: currentColor }}>
            {type === "pie" ? `${payload[0]?.value}%` : `Effort: ${payload[0]?.value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={currentColor} 
                strokeWidth={3}
                dot={{ fill: currentColor, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: currentColor, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill={currentColor} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={currentColor}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color || currentColor} 
                    fillOpacity={0.8 + (index * 0.05)}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-4", colorClasses[color])}>
      <h3 className="font-semibold text-lg mb-4 text-center">{title}</h3>
      {renderChart()}
    </Card>
  );
}