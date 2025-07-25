import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Calendar,
  Users,
  BarChart3
} from "lucide-react";

interface ProjectOverview {
  name: string;
  color: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  dueToday: number;
  estimatedDays: number;
  priority: "high" | "medium" | "low";
}

const projectData: ProjectOverview[] = [
  {
    name: "Yoolax Order Form",
    color: "yoolax",
    progress: 25,
    totalTasks: 6,
    completedTasks: 1,
    overdueTasks: 1,
    dueToday: 2,
    estimatedDays: 12,
    priority: "high"
  },
  {
    name: "Galactic Tiles Website",
    color: "galactic",
    progress: 35,
    totalTasks: 6,
    completedTasks: 1,
    overdueTasks: 1,
    dueToday: 1,
    estimatedDays: 18,
    priority: "medium"
  },
  {
    name: "GHM Tile Development",
    color: "ghm",
    progress: 15,
    totalTasks: 7,
    completedTasks: 1,
    overdueTasks: 1,
    dueToday: 0,
    estimatedDays: 25,
    priority: "high"
  }
];

export function GlobalProgressOverview() {
  const totalTasks = projectData.reduce((sum, project) => sum + project.totalTasks, 0);
  const totalCompleted = projectData.reduce((sum, project) => sum + project.completedTasks, 0);
  const totalOverdue = projectData.reduce((sum, project) => sum + project.overdueTasks, 0);
  const totalDueToday = projectData.reduce((sum, project) => sum + project.dueToday, 0);
  const overallProgress = Math.round((totalCompleted / totalTasks) * 100);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case "yoolax": return "bg-yoolax";
      case "galactic": return "bg-galactic";
      case "ghm": return "bg-ghm";
      default: return "bg-primary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <BarChart3 className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold">{overallProgress}%</span>
          </div>
          <p className="text-sm text-muted-foreground">Overall Progress</p>
          <Progress value={overallProgress} className="mt-2" />
        </Card>

        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle2 className="h-8 w-8 text-green-500 mr-2" />
            <span className="text-2xl font-bold">{totalCompleted}</span>
          </div>
          <p className="text-sm text-muted-foreground">Tasks Completed</p>
          <p className="text-xs text-muted-foreground mt-1">of {totalTasks} total</p>
        </Card>

        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold">{totalOverdue}</span>
          </div>
          <p className="text-sm text-muted-foreground">Overdue Tasks</p>
          <Badge variant="destructive" className="mt-1 text-xs">Action Required</Badge>
        </Card>

        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-8 w-8 text-orange-500 mr-2" />
            <span className="text-2xl font-bold">{totalDueToday}</span>
          </div>
          <p className="text-sm text-muted-foreground">Due Today</p>
          <Badge variant="secondary" className="mt-1 text-xs">Focus Areas</Badge>
        </Card>
      </div>

      {/* Project Breakdown */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Project Breakdown
        </h3>
        
        <div className="space-y-6">
          {projectData.map((project) => (
            <div key={project.name} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${getProgressColor(project.color)} mr-3`} />
                  <h4 className="font-semibold">{project.name}</h4>
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(project.priority)} ml-2`} />
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {project.completedTasks}/{project.totalTasks} tasks
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.estimatedDays} days
                  </Badge>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-green-600">{project.completedTasks}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-600">{project.overdueTasks}</div>
                  <div className="text-xs text-muted-foreground">Overdue</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-orange-600">{project.dueToday}</div>
                  <div className="text-xs text-muted-foreground">Due Today</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}