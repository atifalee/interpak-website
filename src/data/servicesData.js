import { Shield, Wrench, Container, Droplet, Zap, Flame, Package } from 'lucide-react';

export const servicesData = [
    {
        id: 'safety',
        icon: Shield,
        title: 'Safety Products (Complete PPE)',
        items: [
            'Respiratory Protection',
            'Hand Protection',
            'Head & Face Protection',
            'Safety Eyewear',
            'Fall Protection',
            'Protective Clothing',
            'Hearing Protection'
        ],
        description: 'Quality brands like Portwest coveralls, Shoes & Boots (Redwings, X110, Rangers). Staff trained on tomorrow\'s technology.'
    },
    {
        id: 'general',
        icon: Wrench,
        title: 'General Order Supplier',
        items: [
            'Steel/Electrical/Wooden/Metal Materials',
            'Raw Materials & Construction',
            'Lifting & Welding Equipment',
            'Electrodes, Plants, Helmets, Glasses',
            'Cutting & Grinding Materials',
            'Spare Parts for Oil & Gas'
        ],
        description: 'Wide range including round bars, pipes, tools and all industrial supplies.'
    },
    {
        id: 'containers',
        icon: Container,
        title: 'Container Services',
        items: [
            'Porta Cabins',
            'Site Managers Offices',
            'Portable Washrooms',
            'Portable Toilets'
        ],
        description: 'Rentals and setups for remote sites and oil field operations.'
    },
    {
        id: 'lubricants',
        icon: Droplet,
        title: 'Lubricant Services',
        items: [
            'Drilling Rig Fluids and Chemicals',    
            'Engine Oil',
            'Gear Oil',
            'Hydraulic Oil',
            'Other Solutions'
        ],
        description: 'Helps combat drilling challenges like contamination, wear, heat, and leaks.'
    },
    {
        id: 'electrical',
        icon: Zap,
        title: 'Electronics & Electrical/IT Services',
        items: [
            'Industrial Electric Instrumentals',
            'Control Panels',
            'Cables & Wiring',
            'IT Accessories'
        ],
        description: 'Complete supply of all industrial electrical equipment and accessories.'
    },
    {
        id: 'fire',
        icon: Flame,
        title: 'Fire Safety Equipment',
        items: [
            'Dry Hydrants',
            'Escape Ladders',
            'Fire Barrier Products',
            'Fire Blankets',
            'Fire Extinguisher Systems',
            'Alarms, Brackets, Cabinets'
        ],
        description: 'Essential fire safety equipment for oil field operations and industrial sites.'
    },
    {
        id: 'rental',
        icon: Package,
        title: 'Rental Services',
        items: [
            'BOP\'s',
            'Accumulator Unit',
            'Choke Manifold',
            'Power Boy Degasser',
            'Gate Valves',
            'Mud Tanks',
            'Generators',
            'Fuel Tank',
            'Water Tank'
        ],
        description: 'Complete rental equipment for drilling operations and oil field support.'
    }
];
