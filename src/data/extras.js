// ─── SERVICIOS ADICIONALES ───────────────────────────────────────────────────
// Edita este array para actualizar extras disponibles y sus precios.

export const extras = [
  {
    id: 'bouncy-castle',
    icon: 'Zap',
    title: 'Casa de brinco',
    description:
      'No se permite casa de brinco dentro de la piscina. Solo está permitida en el área del patio.',
    pricing: [{ item: 'Costo por unidad', cost: '$50.00' }],
    note: 'Solo en el patio',
  },
  {
    id: 'chairs-tables',
    icon: 'Armchair',
    title: 'Sillas y Mesas',
    description:
      'Alquila sillas y mesas adicionales para acomodar a todos tus invitados con comodidad.',
    pricing: [
      { item: 'Sillas', cost: '$1.00 c/u' },
      { item: 'Mesas',  cost: '$8.00 c/u' },
    ],
    note: null,
  },
  {
    id: 'tent',
    icon: 'Home',
    title: 'Carpa 20 × 20',
    description:
      'Carpa grande para protegerte del sol o la lluvia y hacer tu evento aún más especial.',
    pricing: [{ item: 'Precio', cost: '$200.00' }],
    note: null,
  },
]
