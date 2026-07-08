import { ArrowRight, Factory, Hammer, Layers3, ShieldCheck, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";

const features = [
  { icon: Users, title: "Worker records", detail: "Track skills, availability, assignments, and professional history in one calm workspace." },
  { icon: Factory, title: "Production clarity", detail: "Follow every order from assignment to quality check with deadlines and priority signals." },
  { icon: Layers3, title: "Material control", detail: "Keep raw materials tied to workers and jobs without drifting into retail inventory clutter." },
  { icon: ShieldCheck, title: "Backend-ready UI", detail: "Clean mock data, reusable surfaces, and routes prepared for real integration." },
];

const industries = ["Jewelry workshops", "Leather goods", "Metal craft", "Textile production", "Woodworking studios", "Repair ateliers"];

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090b] text-white">
      <section className="fine-grid relative min-h-[92vh] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white font-bold text-zinc-950">B</div>
            <span className="font-semibold">BLMS</span>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300 sm:block">Business-Labor Management System</div>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-300">
              <Sparkles size={16} />
              Production workforce coordination for skilled labor
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Business-Labor Management System</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              A modern workforce management platform connecting businesses with skilled workers across labor-intensive industries.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="min-h-16 px-8 text-lg" onClick={() => navigate("/business")}>
                <Factory size={22} />
                Business Portal
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" className="min-h-16 px-8 text-lg" onClick={() => navigate("/labor")}>
                <Hammer size={22} />
                Labor Portal
                <ArrowRight size={20} />
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }} className="glass rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#101114] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-zinc-500">Live production board</p>
                  <h2 className="mt-1 text-xl font-semibold">Aarunya Jewels</h2>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">18 active workers</div>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["22K bridal necklace set", "Maya Tamang", 64],
                  ["Ruby ring batch", "Sara Maharjan", 86],
                  ["Silver temple earrings", "Arjun Shrestha", 18],
                ].map(([product, worker, progress]) => (
                  <div key={product} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium">{product}</p>
                        <p className="text-sm text-zinc-500">{worker}</p>
                      </div>
                      <span className="text-sm text-zinc-400">{progress}%</span>
                    </div>
                    <ProgressBar value={Number(progress)} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight">Built around the business and worker relationship</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-5">
                <feature.icon className="text-sky-200" size={24} />
                <h3 className="mt-5 font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight">Industries</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-zinc-300">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-4 py-10 text-sm text-zinc-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <p>BLMS. Frontend-only startup MVP.</p>
          <p>Designed for worker assignments, production tracking, and material flow.</p>
        </div>
      </footer>
    </div>
  );
}
