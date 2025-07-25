import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Clock, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  Timer,
  Target
} from "lucide-react";

interface EnhancedTask {
  id: string;
  label: string;
  completed?: boolean;
  priority: "high" | "medium" | "low";
  estimatedHours: number;
  dueDate?: string;
  assignee?: string;
  dependencies?: string[];
  tags?: string[];
  status: "todo" | "in-progress" | "blocked" | "completed";
}

interface EnhancedProgressTrackerProps {
  tasks: EnhancedTask[];
  color: "yoolax" | "galactic" | "ghm";
  title: string;
}

export function EnhancedProgressTracker({ tasks: initialTasks, color, title }: EnhancedProgressTrackerProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<"all" | "pending" | "overdue" | "completed">("all");

  const toggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id 
          ? { 
              ...task, 
              completed: !task.completed,
              status: !task.completed ? "completed" : "todo"
            } 
          : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;
  const totalHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
  const completedHours = tasks.filter(task => task.completed).reduce((sum, task) => sum + task.estimatedHours, 0);

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600";
      case "in-progress": return "text-blue-600";
      case "blocked": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const isOverdue = (dueDate?: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case "pending": return !task.completed;
      case "overdue": return !task.completed && isOverdue(task.dueDate);
      case "completed": return task.completed;
      default: return true;
    }
  });

  return (
    <Card className={cn("p-6", colorClasses[color])}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-xl flex items-center">
          <Target className="h-5 w-5 mr-2" />
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-xs">
            {completedCount}/{tasks.length}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {completedHours}h/{totalHours}h
          </Badge>
        </div>
      </div>
      
      {/* Progress Overview */}
      <div className="mb-6 p-4 bg-background/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm font-bold">{Math.round(progressPercentage)}%</span>
        </div>
        <Progress value={progressPercentage} className="h-3 mb-3" />
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-green-600">{completedCount}</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-orange-600">
              {tasks.filter(t => !t.completed && isOverdue(t.dueDate)).length}
            </div>
            <div className="text-xs text-muted-foreground">Overdue</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-600">{totalHours}</div>
            <div className="text-xs text-muted-foreground">Total Hours</div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["all", "pending", "overdue", "completed"].map((filterType) => (
          <Button
            key={filterType}
            size="sm"
            variant={filter === filterType ? "default" : "outline"}
            onClick={() => setFilter(filterType as any)}
            className="text-xs capitalize"
          >
            {filterType}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredTasks.map((task) => (
          <div 
            key={task.id} 
            className={cn(
              "border rounded-lg p-4 transition-all duration-200",
              task.completed && "bg-muted/50",
              isOverdue(task.dueDate) && !task.completed && "border-red-200 bg-red-50/50"
            )}
          >
            <div className="flex items-start space-x-3">
              <Checkbox 
                id={task.id}
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="mt-1"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <label 
                    htmlFor={task.id}
                    className={cn(
                      "font-medium cursor-pointer transition-all duration-300",
                      task.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {task.label}
                  </label>
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                  {isOverdue(task.dueDate) && !task.completed && (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Timer className="h-3 w-3 mr-1" />
                    {task.estimatedHours}h
                  </div>
                  
                  {task.dueDate && (
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  )}
                  
                  {task.assignee && (
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {task.assignee}
                    </div>
                  )}

                  <Badge 
                    variant="outline" 
                    className={cn("text-xs", getStatusColor(task.status))}
                  >
                    {task.status.replace('-', ' ')}
                  </Badge>
                </div>

                {task.tags && task.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {task.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {task.dependencies && task.dependencies.length > 0 && (
                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                    <ArrowRight className="h-3 w-3 mr-1" />
                    Depends on: {task.dependencies.join(", ")}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <CheckCircle2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No tasks match the current filter</p>
        </div>
      )}
    </Card>
  );
}