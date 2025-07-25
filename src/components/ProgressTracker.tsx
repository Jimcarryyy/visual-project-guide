import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Task {
  id: string;
  label: string;
  completed?: boolean;
}

interface ProgressTrackerProps {
  tasks: Task[];
  color: "yoolax" | "galactic" | "ghm";
}

export function ProgressTracker({ tasks: initialTasks, color }: ProgressTrackerProps) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  const colorClasses = {
    yoolax: "border-yoolax/20",
    galactic: "border-galactic/20",
    ghm: "border-ghm/20"
  };

  const progressColors = {
    yoolax: "bg-yoolax",
    galactic: "bg-galactic", 
    ghm: "bg-ghm"
  };

  return (
    <Card className={cn("p-4", colorClasses[color])}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Progress Tracker</h3>
        <span className="text-sm text-muted-foreground">
          {completedCount}/{tasks.length} Complete
        </span>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-3 mb-4">
        <div 
          className={cn("h-3 rounded-full transition-all duration-500", progressColors[color])}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-background/50 transition-colors"
          >
            <Checkbox 
              id={task.id}
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="data-[state=checked]:border-current"
            />
            <label 
              htmlFor={task.id}
              className={cn(
                "text-sm cursor-pointer transition-all duration-300",
                task.completed && "line-through text-muted-foreground"
              )}
            >
              {task.label}
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
}