import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Clock, 
  Bell, 
  Filter, 
  Download, 
  Share2, 
  Settings,
  Calendar,
  Target,
  BarChart3,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export function QuickActionsPanel() {
  const quickStats = [
    { label: "Active Projects", value: "3", icon: Target, color: "text-blue-600" },
    { label: "Tasks Due Today", value: "5", icon: Clock, color: "text-orange-600" },
    { label: "Overdue Items", value: "3", icon: AlertTriangle, color: "text-red-600" },
    { label: "Completed This Week", value: "12", icon: CheckCircle2, color: "text-green-600" },
  ];

  const quickActions = [
    { label: "Add New Task", icon: Plus, variant: "default" as const, action: "add-task" },
    { label: "Set Reminder", icon: Bell, variant: "outline" as const, action: "reminder" },
    { label: "Filter Tasks", icon: Filter, variant: "outline" as const, action: "filter" },
    { label: "Schedule Meeting", icon: Calendar, variant: "outline" as const, action: "meeting" },
    { label: "Export Report", icon: Download, variant: "outline" as const, action: "export" },
    { label: "Share Progress", icon: Share2, variant: "outline" as const, action: "share" },
  ];

  const handleAction = (action: string) => {
    switch (action) {
      case "add-task":
        // Would open task creation modal
        console.log("Opening task creation form...");
        break;
      case "reminder":
        // Would open reminder dialog
        console.log("Setting up reminder...");
        break;
      case "filter":
        // Would activate filter panel
        console.log("Opening filter options...");
        break;
      case "meeting":
        // Would open calendar integration
        console.log("Scheduling meeting...");
        break;
      case "export":
        // Would export current data
        console.log("Exporting progress report...");
        break;
      case "share":
        // Would open sharing options
        console.log("Sharing progress...");
        break;
      default:
        console.log(`Action: ${action}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <BarChart3 className="h-5 w-5 mr-2" />
          Quick Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-3 rounded-lg border">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              onClick={() => handleAction(action.action)}
              className="flex items-center justify-start h-12 p-3"
            >
              <action.icon className="h-4 w-4 mr-2" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-3" />
              <span className="text-sm">Set up development environment</span>
            </div>
            <Badge variant="secondary" className="text-xs">2h ago</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-orange-500 mr-3" />
              <span className="text-sm">Plan form features overdue</span>
            </div>
            <Badge variant="destructive" className="text-xs">Overdue</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center">
              <Plus className="h-4 w-4 text-blue-500 mr-3" />
              <span className="text-sm">Created new task for GHM project</span>
            </div>
            <Badge variant="outline" className="text-xs">1d ago</Badge>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Share2 className="h-4 w-4 text-purple-500 mr-3" />
              <span className="text-sm">Shared Galactic progress report</span>
            </div>
            <Badge variant="outline" className="text-xs">2d ago</Badge>
          </div>
        </div>
      </Card>

      {/* Upcoming Deadlines */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Upcoming Deadlines
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
            <div>
              <div className="font-medium text-sm">Plan form features</div>
              <div className="text-xs text-muted-foreground">Yoolax Project</div>
            </div>
            <Badge variant="destructive" className="text-xs">Today</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 border border-orange-200">
            <div>
              <div className="font-medium text-sm">Create About Us page</div>
              <div className="text-xs text-muted-foreground">Galactic Project</div>
            </div>
            <Badge variant="secondary" className="text-xs">Tomorrow</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
            <div>
              <div className="font-medium text-sm">Set up site infrastructure</div>
              <div className="text-xs text-muted-foreground">GHM Project</div>
            </div>
            <Badge variant="outline" className="text-xs">3 days</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}