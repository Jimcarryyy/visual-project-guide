import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Target,
  BarChart3,
  Search,
  Bell,
  Settings,
  Home,
  Clock,
  CheckCircle2,
  TrendingUp,
  Filter,
  Zap
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Timeline", url: "#timeline", icon: Calendar },
  { title: "Analytics", url: "#analytics", icon: BarChart3 },
  { title: "Quick Actions", url: "#actions", icon: Zap },
];

const projectItems = [
  { title: "Yoolax", url: "#yoolax", icon: Target, color: "bg-yoolax", tasks: 6, completed: 1 },
  { title: "Galactic", url: "#galactic", icon: TrendingUp, color: "bg-galactic", tasks: 6, completed: 1 },
  { title: "GHM Tile", url: "#ghm", icon: CheckCircle2, color: "bg-ghm", tasks: 7, completed: 1 },
];

const statusItems = [
  { title: "Overdue Tasks", url: "#overdue", icon: Clock, count: 3 },
  { title: "Due Today", url: "#today", icon: Bell, count: 2 },
  { title: "Completed", url: "#completed", icon: CheckCircle2, count: 15 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavCls = (isActive: boolean) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-72"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent className="p-4">
        {/* Search */}
        {!collapsed && (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects, tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9"
              />
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => scrollToSection(item.url)}
                      className={`flex items-center w-full p-2 rounded-lg transition-colors ${getNavCls(location.pathname === item.url)}`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => scrollToSection(item.url)}
                      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${item.color} mr-3`} />
                        {!collapsed && (
                          <>
                            <span className="font-medium">{item.title}</span>
                          </>
                        )}
                      </div>
                      {!collapsed && (
                        <Badge variant="secondary" className="text-xs">
                          {item.completed}/{item.tasks}
                        </Badge>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Task Status
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {statusItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => scrollToSection(item.url)}
                      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4 mr-3 text-muted-foreground" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </div>
                      {!collapsed && (
                        <Badge 
                          variant={item.title === "Overdue Tasks" ? "destructive" : "outline"} 
                          className="text-xs"
                        >
                          {item.count}
                        </Badge>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="mt-6 space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <Button size="sm" className="w-full justify-start h-8">
              <Filter className="h-4 w-4 mr-2" />
              Filter Tasks
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start h-8">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}