import { motion } from 'framer-motion';
import { User, Briefcase, MapPin, Calendar } from 'lucide-react';
import { personalInfo, experiences } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* About Card */}
            <div className="glass rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-lg font-display font-semibold">Who am I?</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                  { icon: Briefcase, label: 'Status', value: 'Freelancer' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">{label}</p>
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
                  className="glass rounded-2xl p-5 text-center group hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">
                    {num}
                  </p>
                  <p className="text-xs text-text-secondary font-medium">{label}</p>
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
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent-light" />
              </div>
              <h3 className="text-lg font-display font-semibold">Experience</h3>
            </div>

            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="relative pl-12 group"
                >
                  {/* Dot */}
                  <div className="absolute left-[12px] top-2 w-[15px] h-[15px] rounded-full bg-surface border-2 border-primary group-hover:bg-primary/30 transition-colors duration-300 z-10" />

                  <div className="glass rounded-2xl p-6 group-hover:bg-white/[0.06] transition-colors duration-300">
                    <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                      {exp.year}
                    </span>
                    <h4 className="text-base font-display font-semibold text-white mt-2">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-primary-light font-medium mt-0.5">{exp.company}</p>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                      {exp.description}
                    </p>
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
