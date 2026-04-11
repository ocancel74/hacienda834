import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * Componente reutilizable para los títulos de sección.
 *
 * Props:
 *  - tag       : etiqueta HTML opcional (default 'h2')
 *  - eyebrow   : texto pequeño encima del título
 *  - title     : título principal
 *  - subtitle  : subtítulo / descripción opcional
 *  - light     : true = colores claros (para fondos oscuros)
 *  - centered  : true = centrado (default true)
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light    = false,
  centered = true,
}) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`reveal mb-12 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full ${
            light
              ? 'bg-white/10 text-pool-200'
              : 'bg-pool-100 text-pool-600'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} leading-relaxed ${
            light ? 'text-pool-200' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Línea decorativa */}
      <div className={`mt-6 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className={`h-0.5 w-12 rounded-full ${light ? 'bg-pool-400' : 'bg-pool-500'}`} />
        <div className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-sand-300' : 'bg-sand-400'}`} />
        <div className={`h-0.5 w-12 rounded-full ${light ? 'bg-pool-400' : 'bg-pool-500'}`} />
      </div>
    </div>
  )
}
