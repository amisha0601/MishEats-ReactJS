import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-cardmix to-navbar px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl/80 rounded-2xl px-6 py-8 sm:px-12 sm:py-12 text-white">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 tracking-tight">
          About MisHeats
        </h2>

        <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed tracking-wide">
          <p>
            MisHeats is a modern food delivery platform focused on making food
            ordering easier, cleaner, and faster — especially for local users
            who value simplicity and taste. It’s not just a food app, it’s a
            curated experience that connects hunger with satisfaction,
            instantly.
          </p>

          <p>
            Whether you’re craving spicy snacks, a fulfilling lunch, or a homely
            dinner, MisHeats brings a handpicked selection of dishes to your
            screen. No clutter, no confusion — just food you love, delivered
            with clarity and care.
          </p>

          <p>
            Our app is built with performance and design in mind. With a
            minimal, distraction-free interface and reliable features, MisHeats
            works seamlessly across all screen sizes. From homepage to cart,
            every interaction is smooth, quick, and delightful.
          </p>

          <p>
            MisHeats is developed using React for frontend structure and
            Tailwind CSS for visual design — ensuring fast rendering, reusable
            components, and a responsive layout throughout the app. Every screen
            is thoughtfully designed to reflect user comfort and business
            clarity.
          </p>
        </div>

        <div className="mt-10 text-center text-shadow-purple-300 text-xs sm:text-sm">
          ~ Developed by Amisha ~
        </div>
      </div>
    </div>
  );
};

export default About;
