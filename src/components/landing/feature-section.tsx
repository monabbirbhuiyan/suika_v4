"use client";
import { motion } from "framer-motion";
import {
  Bot,
  Briefcase,
  CalendarDays,
  KanbanSquare,
  LayoutGrid,
  ListChecks,
  Table,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Team Workspaces",
    description:
      "Create dedicated workspaces for different teams or clients. Invite members and manage permissions with ease.",
    color: "chart-1",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description:
      "Organize your work into projects with deadlines, milestones, and detailed descriptions to keep everyone on track.",
    color: "chart-2",
  },
  {
    icon: ListChecks,
    title: "Task Organization",
    description:
      "Break down projects into manageable tasks, assign team members, set priorities, and track progress.",
    color: "chart-3",
  },
  {
    icon: KanbanSquare,
    title: "Kanban Boards",
    description:
      "Visualize your workflow with customizable kanban boards. Drag and drop tasks between columns as they progress.",
    color: "chart-4",
  },
  {
    icon: Table,
    title: "Table View",
    description:
      "View and filter your tasks in a structured table format. Sort by any attribute and customize columns to your needs.",
    color: "chart-5",
  },
  {
    icon: CalendarDays,
    title: "Calendar View",
    description:
      "Plan your schedule with an interactive calendar. View tasks by day, week, or month and manage deadlines visually.",
    color: "chart-1",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistance",
    description:
      "Let AI generate project descriptions, create task lists, and provide intelligent suggestions to boost your productivity.",
    color: "chart-2",
  },
  {
    icon: LayoutGrid,
    title: "Cross-Workspace Collaboration",
    description:
      "Accept invitations to multiple workspaces, perfect for freelancers working with different clients.",
    color: "chart-3",
  },
];

const FeatureSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-balance text-3xl font-bold md:text-4xl"
          >
            Powerful Features for Efficient Project Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-pretty text-muted-foreground"
          >
            Everything you need to manage projects, collaborate with teams, and
            deliver exceptional results.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const getColorClasses = (color: string) => {
              const colorMap: Record<
                string,
                { bg: string; icon: string; iconHover: string }
              > = {
                "chart-1": {
                  bg: "bg-primary/10 dark:bg-primary/20",
                  icon: "text-primary",
                  iconHover: "group-hover:scale-110",
                },
                "chart-2": {
                  bg: "bg-chart-2/10 dark:bg-chart-2/20",
                  icon: "text-chart-2",
                  iconHover: "group-hover:scale-110",
                },
                "chart-3": {
                  bg: "bg-chart-3/10 dark:bg-chart-3/20",
                  icon: "text-chart-3",
                  iconHover: "group-hover:scale-110",
                },
                "chart-4": {
                  bg: "bg-chart-4/10 dark:bg-chart-4/20",
                  icon: "text-chart-4",
                  iconHover: "group-hover:scale-110",
                },
                "chart-5": {
                  bg: "bg-chart-5/10 dark:bg-chart-5/20",
                  icon: "text-chart-5",
                  iconHover: "group-hover:scale-110",
                },
              };
              return colorMap[color];
            };

            const colors = getColorClasses(feature.color);

            return (
              <motion.div key={index} variants={item}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} transition-all duration-300`}
                    >
                      <Icon
                        className={`h-6 w-6 ${colors.icon} ${colors.iconHover} transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
