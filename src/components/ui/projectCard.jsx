export const ProjectCard = ({
  title,
  tech,
  description,
  impact,
  stats,
  images,
  image,
  color,
  border,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-slate-900 border ${border} rounded-3xl p-6 lg:p-8 xl:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}
    >
      <div
        className={`absolute inset-0 ${color} opacity-20 group-hover:opacity-30 transition-opacity`}
      />

      {/* Image */}
      <div className="w-full lg:w-3/5 xl:w-[65%] relative z-10">
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 bg-black/50">
          {images ? (
            <ImageCarousel images={images} title={title} />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/5 xl:w-[35%] relative z-10 flex flex-col h-full justify-center py-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] md:text-xs uppercase font-bold text-slate-200 bg-black/40 px-3 py-1.5 rounded border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-slate-300 text-base md:text-lg mb-6">
          {description}
        </p>

        <div className="bg-black/20 rounded-xl p-4 border border-white/5 mb-6">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <Info size={14} /> Impact & Results
          </p>
          <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
            {impact}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-white/10">
          {children}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
              {stats}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
