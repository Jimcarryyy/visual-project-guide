import { ProjectCard } from "@/components/ProjectCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { EnhancedProgressTracker } from "@/components/EnhancedProgressTracker";
import { InteractiveChart } from "@/components/InteractiveChart";
import { ProjectImage } from "@/components/ProjectImage";
import { GlobalProgressOverview } from "@/components/GlobalProgressOverview";
import { QuickActionsPanel } from "@/components/QuickActionsPanel";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowRight, Target, Zap, CheckCircle } from "lucide-react";

// Import project images
import yoolaxFlowchart from "@/assets/yoolax-flowchart.jpg";
import galacticGantt from "@/assets/galactic-gantt.jpg";
import ghmInfographic from "@/assets/ghm-infographic.jpg";

const Index = () => {
  // Project data
  const yoolaxData = [
    { name: "Planning", value: 20 },
    { name: "Setup", value: 15 },
    { name: "Form Creation", value: 40 },
    { name: "Testing", value: 15 },
    { name: "Deployment", value: 10 }
  ];

  const galacticData = [
    { name: "Site Optimization", value: 85 },
    { name: "New Pages", value: 60 },
    { name: "SEO Setup", value: 75 },
    { name: "Blog Posts", value: 45 },
    { name: "Social Media", value: 30 }
  ];

  const ghmData = [
    { name: "Setup", value: 15, color: "#16a34a" },
    { name: "Form & Measurement", value: 25, color: "#22c55e" },
    { name: "Sample Cart", value: 20, color: "#4ade80" },
    { name: "Bulk Upload", value: 15, color: "#65f25c" },
    { name: "Domain Transfer", value: 10, color: "#84ff68" },
    { name: "Testing & Launch", value: 15, color: "#a3ff74" }
  ];

  const yoolaxTasks = [
    { 
      id: "y1", 
      label: "Plan form features and requirements", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 8,
      dueDate: "2024-07-26",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["planning", "requirements"]
    },
    { 
      id: "y2", 
      label: "Set up development environment", 
      completed: true,
      priority: "medium" as const,
      estimatedHours: 4,
      assignee: "Developer",
      status: "completed" as const,
      tags: ["setup", "environment"]
    },
    { 
      id: "y3", 
      label: "Install and configure WPForms", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 6,
      dueDate: "2024-07-28",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["wordpress", "forms"],
      dependencies: ["y1"]
    },
    { 
      id: "y4", 
      label: "Design multi-step form layout", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 12,
      dueDate: "2024-07-30",
      assignee: "Designer",
      status: "todo" as const,
      tags: ["design", "ux"],
      dependencies: ["y3"]
    },
    { 
      id: "y5", 
      label: "Test form functionality and email delivery", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 8,
      dueDate: "2024-08-01",
      assignee: "QA Tester",
      status: "todo" as const,
      tags: ["testing", "qa"],
      dependencies: ["y4"]
    },
    { 
      id: "y6", 
      label: "Deploy inquiry form to live site", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 4,
      dueDate: "2024-08-02",
      assignee: "DevOps",
      status: "todo" as const,
      tags: ["deployment", "production"],
      dependencies: ["y5"]
    }
  ];

  const galacticTasks = [
    { 
      id: "g1", 
      label: "Optimize site performance and speed", 
      completed: true,
      priority: "high" as const,
      estimatedHours: 16,
      assignee: "Developer",
      status: "completed" as const,
      tags: ["performance", "optimization"]
    },
    { 
      id: "g2", 
      label: "Create About Us page", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 8,
      dueDate: "2024-07-27",
      assignee: "Content Writer",
      status: "in-progress" as const,
      tags: ["content", "pages"]
    },
    { 
      id: "g3", 
      label: "Build Gallery showcase", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 12,
      dueDate: "2024-07-29",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["gallery", "showcase"],
      dependencies: ["g2"]
    },
    { 
      id: "g4", 
      label: "Implement SEO optimizations", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 10,
      dueDate: "2024-08-01",
      assignee: "SEO Specialist",
      status: "todo" as const,
      tags: ["seo", "optimization"]
    },
    { 
      id: "g5", 
      label: "Write blog posts on tile trends", 
      completed: false,
      priority: "low" as const,
      estimatedHours: 20,
      dueDate: "2024-08-05",
      assignee: "Content Writer",
      status: "todo" as const,
      tags: ["blog", "content"]
    },
    { 
      id: "g6", 
      label: "Launch social media campaigns", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 15,
      dueDate: "2024-08-07",
      assignee: "Marketing",
      status: "todo" as const,
      tags: ["social-media", "marketing"]
    }
  ];

  const ghmTasks = [
    { 
      id: "h1", 
      label: "Set up site infrastructure", 
      completed: true,
      priority: "high" as const,
      estimatedHours: 12,
      assignee: "DevOps",
      status: "completed" as const,
      tags: ["infrastructure", "setup"]
    },
    { 
      id: "h2", 
      label: "Create measurement form", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 16,
      dueDate: "2024-07-28",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["forms", "measurement"]
    },
    { 
      id: "h3", 
      label: "Develop SQF calculator", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 20,
      dueDate: "2024-07-30",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["calculator", "sqf"],
      dependencies: ["h2"]
    },
    { 
      id: "h4", 
      label: "Build sample cart system", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 18,
      dueDate: "2024-08-02",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["cart", "samples"],
      dependencies: ["h3"]
    },
    { 
      id: "h5", 
      label: "Implement bulk product upload", 
      completed: false,
      priority: "medium" as const,
      estimatedHours: 14,
      dueDate: "2024-08-05",
      assignee: "Developer",
      status: "todo" as const,
      tags: ["upload", "products"]
    },
    { 
      id: "h6", 
      label: "Transfer domain from GoDaddy", 
      completed: false,
      priority: "low" as const,
      estimatedHours: 4,
      dueDate: "2024-08-07",
      assignee: "DevOps",
      status: "todo" as const,
      tags: ["domain", "transfer"]
    },
    { 
      id: "h7", 
      label: "Complete testing and launch", 
      completed: false,
      priority: "high" as const,
      estimatedHours: 12,
      dueDate: "2024-08-10",
      assignee: "QA Team",
      status: "todo" as const,
      tags: ["testing", "launch"],
      dependencies: ["h4", "h5", "h6"]
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-dashboard">
        <AppSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Target className="h-8 w-8" />
                    Project Dashboard
                  </h1>
                </div>
                <nav className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">Dashboard</Button>
                  <Button variant="ghost" size="sm">Analytics</Button>
                  <Button variant="ghost" size="sm">Settings</Button>
                </nav>
              </div>
              <p className="text-muted-foreground mt-2">
                Enhanced visual project management for Yoolax, Galactic Tiles, and GHM Tile development
              </p>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            {/* Global Progress Overview */}
            <section id="analytics" className="mb-12">
              <GlobalProgressOverview />
            </section>

            {/* Quick Actions Panel */}
            <section id="actions" className="mb-12">
              <QuickActionsPanel />
            </section>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center bg-yoolax-secondary border-yoolax/20">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-yoolax mr-2" />
                  <span className="text-2xl font-bold text-yoolax">Yoolax</span>
                </div>
                <p className="text-sm text-muted-foreground">Order Form Development</p>
              </Card>
              <Card className="p-6 text-center bg-galactic-secondary border-galactic/20">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-galactic mr-2" />
                  <span className="text-2xl font-bold text-galactic">Galactic</span>
                </div>
                <p className="text-sm text-muted-foreground">Website Improvements</p>
              </Card>
              <Card className="p-6 text-center bg-ghm-secondary border-ghm/20">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-ghm mr-2" />
                  <span className="text-2xl font-bold text-ghm">GHM Tile</span>
                </div>
                <p className="text-sm text-muted-foreground">Site Development</p>
              </Card>
            </div>

            {/* Project Sections */}
            <div className="space-y-12">
              {/* Yoolax Project */}
              <section id="yoolax">
                <ProjectCard title="Yoolax Order Form Development" color="yoolax">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ProjectImage 
                      src={yoolaxFlowchart} 
                      alt="Yoolax development flowchart"
                      color="yoolax"
                    />
                    <InteractiveChart 
                      type="line"
                      data={yoolaxData}
                      color="yoolax"
                      title="Development Effort Distribution"
                    />
                    <EnhancedProgressTracker 
                      tasks={yoolaxTasks}
                      color="yoolax"
                      title="Task Progress"
                    />
                  </div>
                </ProjectCard>
              </section>

              {/* Galactic Project */}
              <section id="galactic">
                <ProjectCard title="Galactic Tiles Website Enhancement" color="galactic">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ProjectImage 
                      src={galacticGantt} 
                      alt="Galactic project timeline"
                      color="galactic"
                    />
                    <InteractiveChart 
                      type="bar"
                      data={galacticData}
                      color="galactic"
                      title="Task Completion Status"
                    />
                    <EnhancedProgressTracker 
                      tasks={galacticTasks}
                      color="galactic"
                      title="Task Progress"
                    />
                  </div>
                </ProjectCard>
              </section>

              {/* GHM Project */}
              <section id="ghm">
                <ProjectCard title="GHM Tile Site Development" color="ghm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ProjectImage 
                      src={ghmInfographic} 
                      alt="GHM development process"
                      color="ghm"
                    />
                    <InteractiveChart 
                      type="pie"
                      data={ghmData}
                      color="ghm"
                      title="Project Phase Distribution"
                    />
                    <EnhancedProgressTracker 
                      tasks={ghmTasks}
                      color="ghm"
                      title="Task Progress"
                    />
                  </div>
                </ProjectCard>
              </section>
            </div>

            {/* Timeline Section */}
            <section id="timeline" className="mt-12">
              <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-primary">Project Timeline</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Track your development journey across all projects with enhanced progress monitoring, 
                  deadline tracking, and priority management.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-yoolax hover:bg-yoolax/90">
                    Start Yoolax Development
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="bg-galactic hover:bg-galactic/90">
                    Begin Galactic Improvements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="bg-ghm hover:bg-ghm/90">
                    Launch GHM Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-background/95 backdrop-blur-sm border-t mt-16">
            <div className="container mx-auto px-6 py-8 text-center">
              <p className="text-muted-foreground">
                Enhanced Visual Project Management Dashboard - Designed for maximum productivity and clarity
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Track progress, visualize workflows, manage deadlines, and achieve your development goals
              </p>
            </div>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
