import { BedDouble, Sofa, Warehouse, Droplets, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "2 Recámaras + Cuarto de Estudio",
    description:
      "Recámaras con clóset y un cuarto adicional que puede funcionar como estudio, home office o tercera habitación.",
  },
  {
    icon: Sofa,
    title: "Cocina integral y área social",
    description:
      "Cocina con barra y refrigerador incluido, además de sala y comedor en espacios independientes.",
  },
  {
    icon: Warehouse,
    title: "Cochera techada + visitas",
    description: "Un cajón de estacionamiento techado para el departamento, más área de estacionamiento para visitas.",
  },
  {
    icon: Droplets,
    title: "Plus técnico",
    description:
      "Cisterna de agua propia del conjunto, para no depender de los cortes de la red municipal.",
  },
  {
    icon: Building2,
    title: "Conjunto privado de 4 torres",
    description:
      "Acceso controlado, portón eléctrico y administración profesional, en un conjunto de solo 4 torres.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            70 m² bien distribuidos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Un conjunto privado de solo 4 torres, con espacios pensados para
            vivir o rentar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
