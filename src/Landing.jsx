import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import Navbar from "./components/Navbar";

export default function Landing() {
  const content = [
    {
      title: "Model 3",
      subtitle: [
        "$7,500 Federal Tax Credit Available",
        "From $33,990 After Est. Savings",
      ],
      className: "model-3",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Model Y",
      subtitle: ["From $31,490", "After Est. Savings"],
      className: "model-y",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Model X",
      subtitle: ["From $63,990", "After Est. Savings"],
      className: "model-x",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Model S",
      subtitle: ["From $66,490", "After Est. Savings"],
      className: "model-s",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Solar Panels",
      subtitle: ["Schedule a Virtual Consultation"],
      className: "solar-panel",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Solar Roof",
      subtitle: ["Produce Clean Energy From Your Roof"],
      className: "solar-roof",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Powerwall",
      subtitle: [],
      className: "powerwall",
      buttons: ["Order Now", "Demo Drive"],
    },
    {
      title: "Accessories",
      subtitle: [],
      className: "accessories",
      buttons: ["Shop Now"],
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        {content.map(({ title, subtitle, className, buttons }) => (
          <LandingSection
            key={title}
            className={className}
            title={title}
            subtitle={subtitle}
            buttons={buttons}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
