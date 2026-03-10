"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, Megaphone, Share2 } from "lucide-react";

/**
 * ReviewAds section: showcases how Couture House Co. transforms BNG's real
 * client reviews (including Google reviews) into scroll-stopping visual ads
 * across every channel—IG, FB, Google, print, and beyond.
 */
const ads = [
  {
    id: "ad-1",
    image: "/assets/review-ad-1.png",
    format: "Social & Feed",
  },
  {
    id: "ad-2",
    image: "/assets/review-ad-2.png",
    format: "Google Review Creative",
  },
  {
    id: "ad-3",
    image: "/assets/review-ad-3.png",
    format: "Digital Ad Format",
  },
];

export default function ReviewAds() {
  return (
    <section
      id="review-ads"
      className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-bng-blue)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-bng-red)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
            Social Proof, Reimagined
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Your Reviews. Our Ads.
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed mb-8">
            That 5-star Google review isn&apos;t just a badge—it&apos;s a headline. We take BNG&apos;s real 
            client testimonials and turn them into scroll-stopping creative. Same words. 
            <span className="text-white font-medium"> Ten times the impact.</span>
          </p>

          {/* Value props row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm"
          >
            <div className="flex items-center gap-2 text-zinc-400">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
              <span>Google reviews → ad creatives</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Share2 className="w-4 h-4 text-[var(--color-bng-red)] flex-shrink-0" />
              <span>IG, FB, stories, reels</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Megaphone className="w-4 h-4 text-[var(--color-bng-blue)] flex-shrink-0" />
              <span>Paid ads + organic</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 max-w-2xl mx-auto"
        >
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--color-bng-red)]">
            <Quote className="absolute -left-1 top-0 w-8 h-8 text-[var(--color-bng-red)]/30" />
            <p className="text-xl sm:text-2xl text-zinc-300 font-light italic leading-relaxed">
              &ldquo;We mine every angle—Google, Yelp, Facebook, word of mouth—and turn what your 
              clients already say into ads that prove why BNG Remodel is the choice. 
              <strong className="text-white not-italic"> Zero regrets</strong> isn&apos;t just a quote. 
              It&apos;s the hook.&rdquo;
            </p>
            <p className="mt-4 text-zinc-500 text-sm font-mono uppercase tracking-widest">
              — Couture House Co. approach
            </p>
          </div>
        </motion.div>

        {/* Ad showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ads.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group-hover:border-zinc-700 transition-colors">
                <Image
                  src={ad.image}
                  alt={`BNG Remodel review ad - ${ad.format}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Format label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    {ad.format}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Real reviews. Real photos. Real trust. We don&apos;t invent testimonials—we 
            <span className="text-white font-medium"> design them into ads that convert.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
