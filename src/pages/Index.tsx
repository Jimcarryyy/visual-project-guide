import { ProjectCard } from "@/components/ProjectCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { InteractiveChart } from "@/components/InteractiveChart";
import { ProjectImage } from "@/components/ProjectImage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    { id: "y1", label: "Plan form features and requirements", completed: false },
    { id: "y2", label: "Set up development environment", completed: true },
    { id: "y3", label: "Install and configure WPForms", completed: false },
    { id: "y4", label: "Design multi-step form layout", completed: false },
    { id: "y5", label: "Test form functionality and email delivery", completed: false },
    { id: "y6", label: "Deploy inquiry form to live site", completed: false }
  ];

  const galacticTasks = [
    { id: "g1", label: "Optimize site performance and speed", completed: true },
    { id: "g2", label: "Create About Us page", completed: false },
    { id: "g3", label: "Build Gallery showcase", completed: false },
    { id: "g4", label: "Implement SEO optimizations", completed: false },
    { id: "g5", label: "Write blog posts on tile trends", completed: false },
    { id: "g6", label: "Launch social media campaigns", completed: false }
  ];

  const ghmTasks = [
    { id: "h1", label: "Set up site infrastructure", completed: true },
    { id: "h2", label: "Create measurement form", completed: false },
    { id: "h3", label: "Develop SQF calculator", completed: false },
    { id: "h4", label: "Build sample cart system", completed: false },
    { id: "h5", label: "Implement bulk product upload", completed: false },
    { id: "h6", label: "Transfer domain from GoDaddy", completed: false },
    { id: "h7", label: "Complete testing and launch", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-dashboard">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              <Target className="h-8 w-8" />
              Project Dashboard
            </h1>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Dashboard</Button>
              <Button variant="ghost" size="sm">Analytics</Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </nav>
          </div>
          <p className="text-muted-foreground mt-2">
            Visual project management for Yoolax, Galactic Tiles, and GHM Tile development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
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
              <ProgressTracker 
                tasks={yoolaxTasks}
                color="yoolax"
              />
            </div>
          </ProjectCard>

          {/* Galactic Project */}
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
              <ProgressTracker 
                tasks={galacticTasks}
                color="galactic"
              />
            </div>
          </ProjectCard>

          {/* GHM Project */}
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
              <ProgressTracker 
                tasks={ghmTasks}
                color="ghm"
              />
            </div>
          </ProjectCard>
        </div>

        {/* Next Steps Section */}
        <Card className="mt-12 p-8 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">Next Steps</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to start your development journey? Review the dashboard, pick a project to begin with, 
            and track your progress using the interactive elements above.
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
      </main>

      {/* Footer */}
      <footer className="bg-background/95 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            Visual Project Management Dashboard - Designed for enhanced productivity and clarity
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Track progress, visualize workflows, and achieve your development goals
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
