import { Layers, Code2, Megaphone } from "lucide-react";

const useCases = [
  {
    icon: Layers,
    title: "Product teams",
    description: "Ship features faster with AI-powered roadmaps",
    bullets: [
      "Feature launch coordination",
      "Roadmap planning & prioritization",
      "Cross-functional alignment",
    ],
  },
  {
    icon: Code2,
    title: "Engineering teams",
    description: "Keep sprints on track without the overhead",
    bullets: [
      "Sprint planning automation",
      "Technical debt tracking",
      "Dependency management",
    ],
  },
  {
    icon: Megaphone,
    title: "Ops & GTM teams",
    description: "Launch campaigns and playbooks seamlessly",
    bullets: [
      "Campaign coordination",
      "Playbook execution",
      "Cross-team visibility",
    ],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for every team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you are shipping products, writing code, or running
            campaigns — SprintPilot adapts to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <useCase.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="size-1.5 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
