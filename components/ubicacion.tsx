import { Car, MapPin, Briefcase } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  {
    icon: Car,
    title: "A 5 minutos de la Garita San Ysidro",
    description:
      "Cruce fronterizo hacia San Diego a unos 5 minutos en auto (según tráfico), para quienes cruzan con frecuencia.",
  },
  {
    icon: MapPin,
    title: "A 5 minutos de Plaza Río",
    description:
      "Zona Río y Plaza Río a unos 5 minutos, además de 3 minutos al Hipódromo y Plaza Galerías.",
  },
  {
    icon: Briefcase,
    title: "A 5 minutos de Otay",
    description:
      "Zona industrial y empresarial de Otay a unos 5 minutos, con hospitales, universidades y servicios cercanos.",
  },
]

export function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Una ubicación que te ahorra tiempo cada día
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            A minutos de los puntos que más usas en tu día a día, sin perder
            horas en el tráfico.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=20%20de%20Noviembre%2C%20Tijuana%2C%20Baja%20California&z=14&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación aproximada: Colonia 20 de Noviembre, Tijuana"
              className="h-[320px] w-full sm:h-[400px]"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            Ubicación aproximada (Colonia 20 de Noviembre). La dirección exacta se comparte al agendar tu cita.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
