"use client";
import React from "react";

import { HeroHighlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  TrendingUp,
  LineChart,
  Sparkles,
  CheckCircle,
  Target,
} from "lucide-react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <HeroHighlight
      containerClassName="min-h-screen w-full"
      className="w-full min-h-screen"
    >
      <section className="relative min-h-screen flex items-center overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-md mb-8"
              >
                AI-POWERED PROJECT MANAGEMENT
                <div className="flex items-center gap-2 ml-2">
                  <Sparkles className="w-4 h-4" />
                  <Target className="w-4 h-4" />
                  <CheckCircle className="w-4 h-4" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Manage Projects
                <br />
                <span className="bg-linear-to-r from-primary via-accent to-chart-4 bg-clip-text text-transparent">
                  Smarter & Faster
                </span>
                <br />
                with AI Automation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
              >
                Streamline your workflow with AI-powered task management,
                intelligent scheduling, and real-time collaboration. Get more
                done with less effort.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <a
                  href="#get-started"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:bg-secondary/80 transition-colors">
                  View Features
                </button>
              </motion.div>
            </motion.div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-0 right-0 w-72 bg-card rounded-xl shadow-lg border border-border p-4 z-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-card-foreground">
                    Project Overview
                  </span>
                  <div className="px-2 py-1 bg-chart-4/10 text-chart-4 text-xs font-medium rounded">
                    Active
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Tasks Completed
                    </span>
                    <span className="text-sm font-bold text-success">
                      47/52
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Team Productivity
                    </span>
                    <span className="text-sm font-bold text-card-foreground">
                      94%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      On-Time Delivery
                    </span>
                    <span className="text-sm font-bold text-primary">98%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Target className="w-3 h-3" />
                      <span>Next Milestone</span>
                    </div>
                    <div className="text-lg font-bold text-card-foreground">
                      3 days
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-20 left-0 w-80 bg-card rounded-xl shadow-lg border border-border p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-sm text-card-foreground">
                    Team Performance
                  </h3>
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    This Week
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      metric: "Tasks Completed",
                      value: "142",
                      change: "+18%",
                      positive: true,
                    },
                    {
                      metric: "Active Projects",
                      value: "8",
                      change: "+2",
                      positive: true,
                    },
                    {
                      metric: "Team Efficiency",
                      value: "92%",
                      change: "+5%",
                      positive: true,
                    },
                    {
                      metric: "Client Satisfaction",
                      value: "4.8/5",
                      change: "+0.2",
                      positive: true,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-muted-foreground">
                        {item.metric}
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-card-foreground">
                          {item.value}
                        </div>
                        <div
                          className={`text-xs ${
                            item.positive ? "text-success" : "text-destructive"
                          }`}
                        >
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 left-12 w-64 bg-card rounded-xl shadow-lg border border-border p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-card-foreground">
                        AI Assistant
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Smart Scheduling
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="text-xs font-semibold mb-2 text-card-foreground">
                    Tasks Automated
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    Last 30 days
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-card-foreground">
                      2,847
                    </span>
                    <span className="text-xs text-success font-medium">
                      +45%
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-72 right-4 w-72 bg-card rounded-xl shadow-lg border border-border p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-card-foreground">
                    AI Smart Actions
                  </span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div className="space-y-3">
                  {[
                    {
                      task: "Sprint Planning",
                      status: "Complete",
                      time: "2 min ago",
                    },
                    {
                      task: "Resource Allocation",
                      status: "Processing",
                      time: "5 min ago",
                    },
                    {
                      task: "Timeline Optimization",
                      status: "Complete",
                      time: "12 min ago",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${
                          item.status === "Complete"
                            ? "bg-success/10"
                            : "bg-primary/10"
                        }`}
                      >
                        {item.status === "Complete" ? (
                          <CheckCircle className="w-4 h-4 text-success" />
                        ) : (
                          <Target className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate text-card-foreground">
                          {item.task}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs ${
                              item.status === "Complete"
                                ? "text-success"
                                : "text-primary"
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className="text-xs text-muted-foreground/50">
                            •
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-32 right-20 bg-card rounded-lg shadow-lg border border-border px-4 py-2 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-card-foreground">
                  AI Insight Generated
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-32 right-0 bg-card rounded-lg shadow-lg border border-border px-3 py-2"
              >
                <div className="flex items-center gap-2 text-xs">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="font-medium text-card-foreground">
                    Velocity Increase
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  +38% this sprint
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-44 left-0 bg-card rounded-xl shadow-lg border border-border p-3 w-52"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-card-foreground">
                    Upcoming Milestones
                  </div>
                  <Target className="w-3 h-3 text-accent" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">
                      Dec 8 - Sprint Review
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">
                      Dec 12 - Release v2.0
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">
                      Dec 15 - Client Demo
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default HeroSection;
