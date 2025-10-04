// Mock data structure matching the Supabase schema design
// This will be replaced with actual Supabase queries when connected

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  parent_id?: string;
  sort_order: number;
  is_active: boolean;
}

export interface Product {
  id: string;
  code: string;
  name?: string;
  family: string;
  grade_type: "Prime" | "Off Spec" | "Off Grade" | "Recycled";
  short_description?: string;
  description: string;
  properties: Record<string, any>;
  applications: string[];
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "polymers",
    name: "Polymers",
    description: "High-quality polymer materials including PE, PP, PVC, PS, PET, and engineering plastics for various industrial applications.",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "2",
    slug: "chemicals",
    name: "Chemicals",
    description: "Specialty chemicals and oil field chemicals for industrial processes and specialized applications.",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "4",
    slug: "recycled",
    name: "Recycled Materials",
    description: "Eco-friendly recycled plastic materials contributing to sustainable manufacturing.",
    sort_order: 4,
    is_active: true,
  },
];

export const subcategories: Category[] = [
  // Polymer subcategories
  {
    id: "11",
    slug: "polyethylene",
    name: "Polyethylene (PE)",
    description: "HDPE, LLDPE, LDPE, MDPE variants with excellent chemical resistance and durability.",
    parent_id: "1",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "12",
    slug: "polypropylene",
    name: "Polypropylene (PP)",
    description: "PP, PPH, ICP, PPRC materials with superior heat and chemical resistance.",
    parent_id: "1",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "13",
    slug: "pvc",
    name: "PVC",
    description: "Versatile PVC materials for construction, packaging, and industrial applications.",
    parent_id: "1",
    sort_order: 3,
    is_active: true,
  },
  {
    id: "14",
    slug: "polystyrene",
    name: "Polystyrene (PS)",
    description: "GPPS and HIPS variants for packaging, insulation, and consumer products.",
    parent_id: "1",
    sort_order: 4,
    is_active: true,
  },
  {
    id: "15",
    slug: "pet",
    name: "PET",
    description: "High-quality PET materials for bottles, containers, and textile applications.",
    parent_id: "1",
    sort_order: 5,
    is_active: true,
  },
  {
    id: "16",
    slug: "engineering-plastics",
    name: "Engineering Plastics",
    description: "ABS, PC, PC/ABS, POM, PMMA, PBT, Nylon 6/66, PPS for demanding applications.",
    parent_id: "1",
    sort_order: 6,
    is_active: true,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "p1",
    code: "PP 500P",
    family: "PP",
    grade_type: "Prime",
    short_description: "Homopolymer polypropylene with excellent stiffness",
    description: "High-quality polypropylene homopolymer with excellent stiffness and heat resistance. Ideal for automotive parts, household appliances, and packaging applications.",
    properties: { mfi: "12", density: "0.905", rigidity: "semi-rigid" },
    applications: ["Automotive parts", "Appliances", "Packaging", "Containers"],
    is_featured: true,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p2",
    code: "HE3490-LS",
    family: "HDPE",
    grade_type: "Prime",
    short_description: "Linear low-density polyethylene for film applications",
    description: "Premium HDPE material with excellent processability and barrier properties. Suitable for blown film, injection molding, and rotational molding applications.",
    properties: { mfi: "0.3", density: "0.934", barrier: "excellent" },
    applications: ["Film", "Bottles", "Containers", "Pipes"],
    is_featured: true,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p3",
    code: "PET BC112",
    family: "PET",
    grade_type: "Prime",
    short_description: "Bottle-grade PET resin",
    description: "High-quality bottle-grade PET with excellent clarity and barrier properties. Perfect for beverage bottles, food containers, and packaging applications.",
    properties: { iv: "0.72", clarity: "excellent", barrier: "high" },
    applications: ["Bottles", "Containers", "Packaging", "Textiles"],
    is_featured: true,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p4",
    code: "ABS Grade A",
    family: "ABS",
    grade_type: "Prime",
    short_description: "High-impact ABS for automotive applications",
    description: "Premium ABS material with excellent impact strength and surface finish. Ideal for automotive interior parts, electronics housings, and consumer products.",
    properties: { impact: "high", finish: "excellent", heat_resistance: "good" },
    applications: ["Automotive", "Electronics", "Appliances", "Toys"],
    is_featured: true,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p5",
    code: "PP Off Grade",
    family: "PP",
    grade_type: "Off Grade",
    short_description: "Cost-effective off-grade polypropylene",
    description: "Off-grade polypropylene offering excellent value for non-critical applications. Maintains good processability at reduced cost.",
    properties: { mfi: "8-15", density: "0.905", cost_effective: true },
    applications: ["Non-critical parts", "Secondary applications", "Cost-sensitive projects"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p6",
    code: "PE Recycled Clear",
    family: "LDPE",
    grade_type: "Recycled",
    short_description: "Recycled clear polyethylene film grade",
    description: "Sustainable recycled polyethylene with good clarity and processability. Contributes to circular economy goals while maintaining performance.",
    properties: { mfi: "2.5", clarity: "good", sustainable: true },
    applications: ["Films", "Bags", "Sustainable packaging", "Secondary applications"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "p7",
    code: "PP 520L",
    family: "PP",
    grade_type: "Prime",
    description: "Linear polypropylene with enhanced flow properties",
    properties: { mfi: "20", density: "0.905" },
    applications: ["Injection molding", "Thin wall packaging"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p8",
    code: "GPPS Crystal",
    family: "PS",
    grade_type: "Prime",
    description: "Crystal clear general purpose polystyrene",
    properties: { clarity: "excellent", rigidity: "high" },
    applications: ["Transparent packaging", "Disposables", "Optical parts"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p9",
    code: "PVC S-70",
    family: "PVC",
    grade_type: "Prime",
    description: "Suspension PVC for pipe and profile applications",
    properties: { k_value: "70", processability: "excellent" },
    applications: ["Pipes", "Profiles", "Fittings", "Construction"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
  {
    id: "p10",
    code: "LLDPE Film Grade",
    family: "LLDPE",
    grade_type: "Prime",
    description: "Linear low-density polyethylene for film applications",
    properties: { mfi: "1.0", dart_impact: "high" },
    applications: ["Stretch films", "Agricultural films", "Packaging"],
    is_featured: false,
    is_active: true,
    created_at: "2024-01-01",
  },
];

export const usps = [
  {
    title: "Best Services",
    description: "Professional customer service with technical expertise and reliable support throughout your sourcing journey.",
    icon: "🏆",
  },
  {
    title: "Best Prices",
    description: "Competitive pricing through global sourcing networks and volume purchasing advantages.",
    icon: "💰",
  },
  {
    title: "Range of Products",
    description: "Extensive catalog of polymers, chemicals, and recycled materials from trusted global manufacturers.",
    icon: "📦",
  },
  {
    title: "Prompt Supplies",
    description: "Efficient logistics and supply chain management ensuring timely delivery to your destination.",
    icon: "🚚",
  },
];