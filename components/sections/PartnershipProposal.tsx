"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, LayoutDashboard, Instagram, FileVideo } from "lucide-react";

export default function PartnershipProposal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      {/* Proposal Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-24"
      >
        <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
          Partnership Proposal
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-6">
          Growth, Lead Management & Client Presentation System
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-zinc-900 mt-12">
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Prepared For</p>
            <p className="text-white font-medium">Brittney Reader, Owner<br />BNG Remodel</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Prepared By</p>
            <p className="text-white font-medium">Couture House<br /><a href="mailto:hello@couturehouse.co" className="text-[var(--color-bng-red)] hover:underline">hello@couturehouse.co</a></p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Proposal Validity</p>
            <p className="text-white font-medium">7 days from presentation date</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Monthly Investment</p>
            <p className="text-white font-medium text-xl">$600<span className="text-sm text-zinc-400 font-normal">/month</span></p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-24"
      >
        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Introduction</h3>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl">
          Dear Brittney, thank you for the opportunity to continue our conversation regarding the growth of BNG Remodel. 
          This proposal outlines a practical partnership designed to support BNG Remodel in three key areas: 
          <strong className="text-white font-medium"> business operations, Instagram growth, and client-facing project presentation.</strong> The 
          goal is to help BNG Remodel operate more efficiently, stay visible online, and improve conversion 
          from inquiry to booked remodeling project.
        </p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-24"
      >
        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Partnership Overview</h3>
        <p className="text-zinc-400 mb-6">This partnership is structured to help BNG Remodel:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            "Centralize lead and client management",
            "Improve organization, scheduling, and follow-up",
            "Strengthen Instagram visibility and consistency",
            "Showcase projects in a more compelling way",
            "Help prospective customers visualize project outcomes",
            "Support stronger lead generation and lead conversion"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] shrink-0 mt-0.5" />
              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {/* Pillar 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <LayoutDashboard className="w-32 h-32 text-white" />
          </div>
          <div className="text-[var(--color-bng-red)] font-mono text-5xl font-bold mb-6 opacity-50">1</div>
          <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">BNG Business Hub</h4>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            Command center for lead intake, CRM-style organization, scheduling, calendar connection, and ongoing maintenance.
          </p>
          <ul className="space-y-3">
            {[
              "Custom Business Hub setup and deployment",
              "CRM-style lead organization and tracking",
              "Calendar integration",
              "Appointment scheduling functionality",
              "Centralized inquiry and client management",
              "Ongoing maintenance and reasonable update requests"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-bng-red)] shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Pillar 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Instagram className="w-32 h-32 text-white" />
          </div>
          <div className="text-[var(--color-bng-red)] font-mono text-5xl font-bold mb-6 opacity-50">2</div>
          <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Instagram Management</h4>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            Content planning, post/reel/story creation, posting, account management, engagement support, DM monitoring, and lead handoff.
          </p>
          <ul className="space-y-3">
            {[
              "Instagram content planning",
              "Post, reel, and story creation",
              "Posting and scheduling",
              "Ongoing account management",
              "Profile activity and engagement support",
              "Direct Message monitoring",
              "Lead inquiry review and handoff to Brittney"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-bng-red)] shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Pillar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FileVideo className="w-32 h-32 text-white" />
          </div>
          <div className="text-[var(--color-bng-red)] font-mono text-5xl font-bold mb-6 opacity-50">3</div>
          <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Client Project Mock-Ups</h4>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            Up to 4 monthly visual mock-up concepts to help homeowners better understand proposed project outcomes.
          </p>
          <ul className="space-y-3">
            {[
              "Up to 4 mock-up projects per month",
              "Render concepts",
              "Before-and-after transformation concepts",
              "Visual presentation support for customer discussions",
              "Revisions included within the original project scope",
              "Additional mock-ups billed at $50 each"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-bng-red)] shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Performance-Based Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-lg mb-16"
      >
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Performance-Based Lead Generation</h3>
        <p className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-8">Commission Structure (Pay-Per-Close)</p>
        
        <p className="text-zinc-300 mb-8 leading-relaxed">
          In addition to the monthly partnership investment, Couture House will earn commission on qualified projects 
          that originate through Instagram lead-generation efforts managed by Couture House and are successfully 
          closed by BNG Remodel. This aligns compensation with measurable revenue outcomes.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-4 px-4 text-zinc-400 font-mono text-xs uppercase tracking-widest">Closed Project Value</th>
                <th className="py-4 px-4 text-zinc-400 font-mono text-xs uppercase tracking-widest text-right">Commission</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                <td className="py-4 px-4">Projects up to $10,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--color-bng-red)]">10%</td>
              </tr>
              <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                <td className="py-4 px-4">Projects from $10,000 to $25,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--color-bng-red)]">5%</td>
              </tr>
              <tr className="hover:bg-zinc-900/50 transition-colors">
                <td className="py-4 px-4">Projects over $25,000</td>
                <td className="py-4 px-4 text-right font-bold text-[var(--color-bng-red)]">3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400">
          <div>
            <h5 className="text-white font-bold mb-2">Lead Attribution</h5>
            <p className="leading-relaxed">
              An Instagram lead will be considered attributable to Couture House when the opportunity originates 
              through Instagram content, messaging, engagement activity, or related lead-generation efforts 
              managed by Couture House and is then handed off to Brittney or BNG Remodel for follow-up and closing.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Pre-Existing Opportunities</h5>
            <p className="leading-relaxed">
              Any leads, prospects, or active opportunities already in BNG Remodel&apos;s pipeline prior to the start 
              of this partnership will not be subject to Instagram lead-generation commission unless otherwise agreed in writing.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Transparency</h5>
            <p className="leading-relaxed">
              Upon closing a project that originated through Instagram lead-generation efforts managed by Couture House, 
              BNG Remodel will share the final signed estimate, proposal, or contract amount for commission verification.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-2">Payment Timing & Lead Flow</h5>
            <p className="leading-relaxed">
              Commission payments are due within 7 days of BNG Remodel receiving the initial deposit. Couture House 
              organizes inquiries and passes qualified opportunities directly to Brittney; BNG Remodel remains responsible 
              for estimates and closing.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Acceptance / Term */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto border-t border-zinc-900 pt-16"
      >
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Term & Acceptance</h3>
        <p className="text-zinc-400 mb-6">
          <strong className="text-white">Initial term: 3 months.</strong> Thereafter: month-to-month.
        </p>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
          If this proposal reflects the intended partnership structure, BNG Remodel may proceed by confirming 
          approval and beginning onboarding for the Business Hub, Instagram workflow, mock-up request process, 
          and lead handoff structure.
        </p>
      </motion.div>
    </div>
  );
}
