import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, Calendar } from 'lucide-react';
import { personalInfo, experiences } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* About Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Who am I?</h3>
              </div>
              <p className="text-white/50 leading-relaxed text-sm">
                {personalInfo.bio}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                {[
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                  { icon: Briefcase, label: 'Status', value: 'Available for work' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '10+', label: 'Projects' },
                { num: '2+', label: 'Years Exp.' },
                { num: '5+', label: 'Happy Clients' },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-indigo-500/30 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <p className="text-2xl font-bold gradient-text mb-1">{num}</p>
                  <p className="text-xs text-white/40 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Experience</h3>
            </div>

            <div className="relative space-y-5">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[12px] top-4 w-[15px] h-[15px] rounded-full bg-[#030014] border-2 border-indigo-500 group-hover:bg-indigo-500/30 transition-colors duration-300 z-10" />

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300">
                    <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
                      {exp.year}
                    </span>
                    <h4 className="text-base font-semibold text-white mt-1.5">{exp.title}</h4>
                    <p className="text-sm text-indigo-400 font-medium mt-0.5">{exp.company}</p>
                    <p className="text-sm text-white/40 mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
