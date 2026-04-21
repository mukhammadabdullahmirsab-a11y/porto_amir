import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  'Tools & Others': Wrench,
};

const categoryColors = {
  Frontend: { bg: 'bg-violet-500/15', text: 'text-violet-400', bar: 'from-violet-500 to-purple-600' },
  Backend: { bg: 'bg-cyan-500/15', text: 'text-cyan-400', bar: 'from-cyan-500 to-blue-600' },
  Database: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', bar: 'from-emerald-500 to-teal-600' },
  'Tools & Others': { bg: 'bg-amber-500/15', text: 'text-amber-400', bar: 'from-amber-500 to-orange-600' },
};

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-semibold text-text-secondary">{level}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-sm`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

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
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-md mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, catIdx) => {
            const Icon = categoryIcons[category.category] || Code;
            const colors = categoryColors[category.category] || categoryColors.Frontend;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold">{category.category}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={colors.bar}
                      delay={catIdx * 0.1 + skillIdx * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
