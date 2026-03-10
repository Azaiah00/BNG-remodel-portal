"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Refrigerator, Flame, LayoutTemplate, Sparkles } from "lucide-react";

/**
 * ProductPlacement section: demonstrates how Couture House Co. can visualize
 * a kitchen remodel progression—from raw space to fully staged with cabinets,
 * fridge, stove, and countertops. Uses BNG/product-placement assets.
 */
const steps = [
  {
    id: "raw",
    step: 1,
    icon: Layers,
    title: "The Raw Canvas",
    copy: "Every stunning remodel starts somewhere. We take your client's existing space—the dated cabinetry, worn counters, outdated appliances—and turn it into the starting point of a compelling visual story.",
    image: "/stove-counter-2-before.webp",
    label: "Original Kitchen",
  },
  {
    id: "cabinets",
    step: 2,
    icon: LayoutTemplate,
    title: "Cabinets Installed",
    copy: "New cabinetry transforms the entire feel of a room. We showcase that moment—the clean lines, the modern hardware—so homeowners can instantly envision their own upgrade.",
    image: "/assets/product-placement-staging-1.jpg",
    label: "Cabinets In",
  },
  {
    id: "fridge",
    step: 3,
    icon: Refrigerator,
    title: "Fridge In Place",
    copy: "A premium refrigerator isn't just an appliance—it's a statement. We highlight that installation moment, making your clients' finished spaces feel real and achievable.",
    image: "/assets/product-placement-fridge-installed.png",
    label: "Fridge Installed",
  },
  {
    id: "stove",
    step: 4,
    icon: Flame,
    title: "Stove & Cooktop",
    copy: "The heart of the kitchen. We capture that sleek new range—the cooktop, the oven, the finish—so your prospects see exactly what BNG Remodel delivers.",
    image: "/assets/product-placement-stove-installed.png",
    label: "Stove Installed",
  },
  {
    id: "counters",
    step: 5,
    icon: Sparkles,
    title: "Countertops & Finish",
    copy: "The final layer. Quartz, marble, or solid surface—we show the complete transformation, from rough to ready. This is the money shot that closes deals.",
    image: "/assets/product-placement-counter-top-installed.png",
    label: "Countertops In",
  },
];

export default function ProductPlacement() {
  return (
    <section
      id="product-placement"
      className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-bng-red)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-bng-blue)] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
            Visualize the Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Product Placement That Sells
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed">
            We don&apos;t just photograph remodels—we stage each phase. From raw space to cabinets, 
            fridge, stove, and countertops, we show homeowners exactly what their investment looks like. 
            <strong className="text-white"> This is how BNG Remodel wins trust before the first call.</strong>
          </p>
        </motion.div>

        {/* Step-by-step timeline */}
        <div className="space-y-20 sm:space-y-28">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image block */}
                <div className="w-full lg:w-[55%] flex-shrink-0">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    {/* Step badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--color-bng-red)] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Copy block */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Icon className="w-5 h-5 text-[var(--color-bng-red)]" />
                    </div>
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      Step {item.step} of 5
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Raw product photos—individual products we stage into the visuals above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-zinc-800"
        >
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6 text-center">
            Raw Product Shots—Individual Items We Place
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-1">
                <Image
                  src="/assets/product-photo-fridge.png"
                  alt="Stainless steel refrigerator"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-2 text-zinc-500 text-xs font-mono uppercase tracking-widest">Fridge</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-1">
                <Image
                  src="/assets/product-photo-stove.png"
                  alt="White stove with black cooktop"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-2 text-zinc-500 text-xs font-mono uppercase tracking-widest">Stove</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-1">
                <Image
                  src="/assets/product-photo-countertop.png"
                  alt="Marble countertop with sink"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-2 text-zinc-500 text-xs font-mono uppercase tracking-widest">Countertop</span>
            </div>
          </div>
        </motion.div>

        {/* Closing CTA line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            <span className="text-[var(--color-bng-red)] font-semibold">Couture House Co.</span> creates 
            this visual journey for your clients—so every remodel you complete has content that converts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
