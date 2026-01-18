import { useState } from 'react';
import Datapad from '../components/Datapad';

export default function TechnologyNovaVentis() {
  const [activeTab, setActiveTab] = useState('documentation');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    exterior: [
      { src: '/images/technology/nova-ventis/NovaVentis_OuterShell_closed1.png', title: 'Nova Ventis - Outer Shell Closed', description: 'External view with protective shell in closed configuration' },
      { src: '/images/technology/nova-ventis/NovaVentis_OuterShell_opened1.png', title: 'Nova Ventis - Outer Shell Opened', description: 'External view with observation windows exposed' },
      { src: '/images/technology/nova-ventis/NovaVentis_flying_closed_OrionNebula.png', title: 'Nova Ventis in Flight', description: 'The vessel traveling through the Orion Nebula' },
      { src: '/images/technology/nova-ventis/NovaVentis_exploded1.jpg', title: 'Exploded Technical View', description: 'Component breakdown and structural layout' }
    ],
    deck1: [
      { src: '/images/technology/nova-ventis/Deck_1.png', title: 'Deck 1 - Overview', description: 'Command & Observation level layout' },
      { src: '/images/technology/nova-ventis/Deck_1_Bridge.png', title: 'Deck 1 - The Bridge', description: 'Navigation and control center with panoramic forward view' },
      { src: '/images/technology/nova-ventis/Deck_1_Observation_Lounge.png', title: 'Deck 1 - Observation Lounge', description: 'The heart room with 270° panoramic windows' }
    ],
    deck2: [
      { src: '/images/technology/nova-ventis/Deck_2.png', title: 'Deck 2 - Overview', description: 'Living Quarters level layout' },
      { src: '/images/technology/nova-ventis/Deck_2_Main_Sleeping_Cabin.jpg', title: 'Deck 2 - Main Sleeping Cabin', description: 'June & Levin\'s private quarters with space view' },
      { src: '/images/technology/nova-ventis/Deck_2_Dog_area.jpg', title: 'Deck 2 - Dog Area', description: 'Dedicated space for Henry and Mila with comfort features' },
      { src: '/images/technology/nova-ventis/Deck_2_Community_Area.png', title: 'Deck 2 - Community Area', description: 'Central gathering space for family activities' }
    ],
    deck3: [
      { src: '/images/technology/nova-ventis/Deck_3.png', title: 'Deck 3 - Overview', description: 'Service & Recreation level layout' },
      { src: '/images/technology/nova-ventis/Deck_3_Main_Kitchen.jpg', title: 'Deck 3 - Main Kitchen', description: 'Galley with food preparation and dining area' },
      { src: '/images/technology/nova-ventis/Deck_3_Training.jpg', title: 'Deck 3 - Training Area', description: 'Exercise and physical conditioning space' },
      { src: '/images/technology/nova-ventis/Deck_3_Workshop_Repair_Area.png', title: 'Deck 3 - Workshop & Repair', description: 'Technical workspace for maintenance and repairs' }
    ],
    deck4: [
      { src: '/images/technology/nova-ventis/Deck_4.png', title: 'Deck 4 - Overview', description: 'Engineering & Systems level layout' },
      { src: '/images/technology/nova-ventis/Deck_4_Life_Support_Systems.jpg', title: 'Deck 4 - Life Support Systems', description: 'Environmental control and life support infrastructure' },
      { src: '/images/technology/nova-ventis/Deck_4_Main_Propulsion_Room.jpg', title: 'Deck 4 - Main Propulsion', description: 'Primary drive systems and power generation' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwxOTEsMzYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-mono">FAMILY TRANSPORT VESSEL • VEYRA FAMILY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Nova Ventis
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              "New Winds" Spacecraft
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              The Veyra family's private spacecraft -- a home among the stars. Futuristic, but warm. Technological, but living.
            </p>
          </div>
        </div>
      </section>

      {/* Datapad Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Datapad glowColor="amber">
            <div className="space-y-8 text-slate-300">

      {/* Datapad Content with Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Datapad glowColor="amber">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 border-b border-amber-500/30 pb-4 flex-wrap">
              <button
                onClick={() => setActiveTab('documentation')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'documentation'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                Documentation
              </button>
              <button
                onClick={() => setActiveTab('visuals')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'visuals'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                Visual Archive
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                Technical Specs
              </button>
            </div>

            {/* Documentation Tab */}
            {activeTab === 'documentation' && (
              <div className="space-y-8 text-slate-300">
                {/* Header */}
                <div className="border-b border-amber-500/30 pb-6">
                <h2 className="text-3xl font-bold text-white mb-2">NovaVentis Technical Specification</h2>
                <p className="text-amber-400 font-mono text-sm">Mission: Aurelia</p>
                <p className="text-slate-400 mt-2">Created by: Julie Bremerich & Claude • November 2025</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="text-xs text-amber-400 mb-1">Capacity</div>
                  <div className="text-sm font-semibold text-white">4-6 humans + 2 dogs</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="text-xs text-amber-400 mb-1">Autonomy</div>
                  <div className="text-sm font-semibold text-white">3-4 months</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="text-xs text-amber-400 mb-1">Travel Time</div>
                  <div className="text-sm font-semibold text-white">~3 weeks</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <div className="text-xs text-amber-400 mb-1">Total Area</div>
                  <div className="text-sm font-semibold text-white">~380-460 m²</div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Overview</h3>
                <p className="leading-relaxed mb-4">
                  The NovaVentis ("New Winds") is the Veyra family's private spacecraft, commissioned in the 2040s when civilian space travel becomes normalized. It serves as their transportation between Earth and Lysithea, enabling visits, adventures, and family connections across the solar system.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="font-semibold text-amber-400 mb-2">Vessel Classification</p>
                    <p className="text-sm">Family transport vessel</p>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="font-semibold text-amber-400 mb-2">Artificial Gravity</p>
                    <p className="text-sm">Gravitational generators (variable 0.5g - 1.2g)</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <p className="font-semibold text-white mb-2">Design Philosophy:</p>
                  <p className="italic">"Futuristic, but warm. Technological, but living."</p>
                  <p className="text-sm mt-2">
                    The NovaVentis embodies the core aesthetic of Mission: Aurelia -- advanced technology that never loses its human touch. Warm materials (wood, textiles), comfortable spaces, and thoughtful design make it feel like home even in the void of space.
                  </p>
                </div>
              </div>

              {/* Deck 1 */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Deck 1: Command & Observation</h3>
                <p className="text-sm text-slate-400 mb-4">Total Area: ~80-100 m² • Primary Function: Navigation, control, observation</p>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">The Bridge (~35 m²)</h4>
                    <p className="mb-3 text-sm">Semi-circular arrangement facing forward panoramic window with 2 main seats (Pilot & Co-Pilot) and 2 fold-down emergency seats for Nicholas & Luna.</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="font-semibold text-amber-300 mb-1">Position 1 - Pilot (June or Levin):</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Flight control, maneuvering, propulsion</li>
                          <li>Haptic controls for manual flight</li>
                          <li>Neural interface jack (Levin only)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="font-semibold text-amber-300 mb-1">Position 2 - Navigation/Systems:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Route planning, sensors, communications</li>
                          <li>Life support monitoring</li>
                          <li>External cameras</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded text-sm">
                      <p className="font-semibold text-amber-300 mb-1">Levin's Interface:</p>
                      <p>When Levin "jacks in," his eyes subtly change color (slight glow). He can speak simultaneously while piloting. For the family, he appears "very concentrated." He FEELS the ship -- sensors become his senses.</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Observation Lounge (~40 m²)</h4>
                    <p className="mb-3 text-sm italic text-amber-300">THE HEART ROOM OF THE NOVAVENTIS.</p>
                    <p className="mb-3 text-sm">Rear section of Deck 1 with 270° panoramic windows (above, forward, to sides). Comfortable seating (sofa, armchairs, floor cushions), small table, bookshelf/media station.</p>
                    
                    <div className="p-3 bg-slate-900/50 border border-slate-700 rounded text-sm">
                      <p className="font-semibold text-white mb-2">Where the family spends time together:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Mornings: Breakfast with view of stars</li>
                        <li>Evenings: Sitting together, telling stories</li>
                        <li>Children: Homework with view of space</li>
                        <li>Dogs: Lying on sofa, watching outside</li>
                      </ul>
                    </div>

                    <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/30 rounded text-sm">
                      <p className="font-semibold text-amber-300 mb-1">The Feeling:</p>
                      <p>When you're on the bridge, you feel: "I'm piloting this ship. I'm connected to infinity."</p>
                      <p className="mt-2">When you're in the Observation Lounge, you feel: "I'm home, but the stars are my garden."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deck 2 */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Deck 2: Living Quarters</h3>
                <p className="text-sm text-slate-400 mb-4">Total Area: ~120-140 m² • Primary Function: Living, sleeping, community • Atmosphere: Warm, intimate, family</p>
                
                <p className="mb-4 italic text-slate-300">Deck 2 is the EMOTIONAL HEART of the NovaVentis. This is where the family spends time together, sleeps, laughs, argues, heals. It must feel like home -- even though it's not the permanent home.</p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Main Sleeping Cabin (~25 m²)</h4>
                      <p className="text-slate-400 mb-2">June & Levin</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Large bed (Queen/King)</li>
                        <li>Sitting area, wardrobes</li>
                        <li>Private bathroom</li>
                        <li>Large window to space</li>
                        <li>Levin's Interface Station</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Nicholas' Cabin (~18 m²)</h4>
                      <p className="text-slate-400 mb-2">Astronaut, functional</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Single bed (expandable)</li>
                        <li>Desk/workstation</li>
                        <li>Built-in wardrobes</li>
                        <li>Shared bathroom</li>
                        <li>Tech-savvy setup</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Guest/Luna Cabin (~18 m²)</h4>
                      <p className="text-slate-400 mb-2">Flexible usage</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Two single beds (connectable)</li>
                        <li>Small wardrobe</li>
                        <li>Shared bathroom</li>
                        <li>For Luna & Auren or Edward & Amelia</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Community Area (~35 m²)</h4>
                    <p className="mb-3 text-sm italic text-amber-300">THE MOST IMPORTANT ROOM ON DECK 2.</p>
                    <p className="mb-3 text-sm">Large dining table (6-8 people), comfortable seating group (sofa, armchairs), bookshelf/media station, small work corner, large windows.</p>
                    
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-sm">
                      <p className="font-semibold text-white mb-2">Why This Room Is So Important:</p>
                      <p>Here the family has breakfast together. Here they sit in the evening and talk. Here Henry plays with Ryu. Here June reads a book while Levin works at a console. This is the room that makes the NovaVentis from a "transport" to a "place of connection."</p>
                    </div>

                    <div className="mt-3 p-3 bg-slate-900/50 border border-slate-700 rounded text-sm">
                      <p className="font-semibold text-white mb-1">Dog-Friendly:</p>
                      <p>Soft carpets, non-slip floor, "corners" for Ryu and Henry. Ryu and Henry have "their" corner with soft blankets.</p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-amber-300 mb-2">The Feeling of Deck 2:</p>
                    <p>When you come from Deck 1 (bridge, technical, stars) to Deck 2, it should feel like: "Ah, now I'm home."</p>
                    <p className="mt-2">Warm colors (amber, cream, wood tones), soft textiles, the smell of fresh coffee from the kitchen, maybe Ryu dozing on the sofa. It's not Earth, but it carries Earth within it.</p>
                  </div>
                </div>
              </div>

              {/* Deck 3 */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Deck 3: Operations</h3>
                <p className="text-sm text-slate-400 mb-4">Total Area: ~100-120 m² • Primary Function: Food, storage, medicine, repairs, fitness • Atmosphere: Practical but thoughtful</p>
                
                <p className="mb-4 italic text-slate-300">Deck 3 is the FUNCTIONAL BACKBONE of the NovaVentis. Here everything happens that enables daily life: preparing food, storing supplies, medical care, repairs, and yes -- even dog relief.</p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Main Kitchen & Food Production (~20 m²)</h4>
                    <p className="mb-3 text-sm">Professional cooking station, large work surfaces, industrial refrigerator & freezer, dishwasher, preparation area, small food bar.</p>
                    
                    <div className="p-3 bg-slate-900/50 border border-slate-700 rounded text-sm mb-3">
                      <p className="font-semibold text-amber-300 mb-1">Hydroponic Mini-System:</p>
                      <p>Small vertical farm for fresh herbs, lettuce, tomatoes. Provides fresh greens even after weeks in space. Psychologically important -- connection to nature. Ryu and Henry like the smell.</p>
                    </div>

                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-sm">
                      <p className="font-semibold text-white mb-2">Food Lift (Dumbwaiter):</p>
                      <p>Compact lift (~60cm x 60cm x 80cm) connecting Deck 3 ↔ Deck 2. Capacity: ~25 kg. For transporting meals, dishes, drinks.</p>
                      <p className="mt-2 italic text-amber-300">Henry's interpretation: Henry considers the dumbwaiter his personal express lift between decks. "Very efficient. Excellent design." The family has given up trying to talk him out of it. Ryu continues to use the stairs. With dignity.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Storage Room & Warehouse (~25 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Ceiling-high shelves</li>
                        <li>Various temperature zones</li>
                        <li>Designed for 3-4 months travel</li>
                        <li>Emergency rations</li>
                        <li>Automatic inventory system</li>
                        <li>Dog food supplies (own area)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Medical Bay (~18 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Examination couch/operating table</li>
                        <li>Medical cabinets, instruments</li>
                        <li>Diagnostic station</li>
                        <li>Small laboratory</li>
                        <li>AI Support (Levin)</li>
                        <li>Telemedicine connection</li>
                        <li>Also for animals (Ryu & Henry)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Workshop & Repair Area (~20 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Workbench with vice</li>
                        <li>Tool walls (organized, secured)</li>
                        <li>3D printer for spare parts</li>
                        <li>Electronics repair station</li>
                        <li>Small welding equipment</li>
                        <li>Levin's domain for self-repair</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Bio-Recycling Zone (~8 m²)</h4>
                      <p className="text-slate-400 mb-2">Dog Toilet Solution</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Absorbent, exchangeable mats</li>
                        <li>Automatic cleaning</li>
                        <li>Odor filtration</li>
                        <li>Composting system (fertilizer for hydroponics)</li>
                        <li>Reduced gravity: 0.7g</li>
                        <li>Small window with view to space</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-amber-300 mb-2">The Feeling of Deck 3:</p>
                    <p>Deck 3 feels like: "Here work is done -- but with care."</p>
                    <p className="mt-2">It smells of fresh coffee from the kitchen, of metal from the workshop, perhaps of basil from the hydroponics. You hear the quiet hum of refrigerators, the clicking of tools. It's not glamorous like Deck 1 or cozy like Deck 2 -- but it's ESSENTIAL. Without Deck 3, nothing works.</p>
                  </div>
                </div>
              </div>

              {/* Deck 4 */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Deck 4: Engineering</h3>
                <p className="text-sm text-slate-400 mb-4">Total Area: ~80-100 m² • Primary Function: Propulsion, energy, life support, all critical systems • Atmosphere: Technical, powerful, the ship's heartbeat</p>
                
                <p className="mb-4 italic text-slate-300">Deck 4 is the TECHNICAL HEART of the NovaVentis. Here the ship's pulse beats -- propulsion, energy, life support, all critical systems. Without Deck 4, the NovaVentis is just a beautiful container in vacuum.</p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Main Propulsion Room (~30 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Fusion reactor (compact, 2040s tech)</li>
                        <li>Propulsion units</li>
                        <li>Cooling systems</li>
                        <li>Control consoles</li>
                        <li>Safety barriers (radiation protection)</li>
                        <li>Fuel: Deuterium/Helium-3 pellets</li>
                        <li>Emergency batteries: 48 hours</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Life Support Systems (~20 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Air recycling plant (CO2 → O2)</li>
                        <li>Water treatment system</li>
                        <li>Temperature regulation</li>
                        <li>Air pressure control</li>
                        <li>99.8% recycling efficiency</li>
                        <li>Air quality sensors</li>
                        <li>Backup systems: 72+ hours</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Energy Distribution (~15 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Main switchboards</li>
                        <li>Energy distribution panels</li>
                        <li>Fuses, circuit breakers</li>
                        <li>Emergency energy rerouting</li>
                        <li>Intelligent load distribution</li>
                        <li>Levin's direct access</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Communications & Navigation (~12 m²)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Main communications array</li>
                        <li>Quantum entanglement transmitter</li>
                        <li>Navigation sensors & computers</li>
                        <li>Backup communication systems</li>
                        <li>Data servers (maps, routes, logs)</li>
                        <li>Emergency beacon</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Gravitational Generator Facility (~10 m²)</h4>
                    <p className="mb-3 text-sm">The magic that creates "up" and "down."</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="font-semibold text-amber-300 mb-1">Components:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>4 main generators (one per deck)</li>
                          <li>Control systems</li>
                          <li>Calibration equipment</li>
                          <li>Backup generator</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="font-semibold text-amber-300 mb-1">Capabilities:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Adjust gravity per deck: 0.5g to 1.2g</li>
                          <li>Energy efficient (2040s tech)</li>
                          <li>Emergency shutdown automatic</li>
                          <li>Backup kicks in ~30 seconds</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-amber-300 mb-2">The Feeling of Deck 4:</p>
                    <p>Deck 4 feels like: "Here the magic happens that you don't see."</p>
                    <p className="mt-2">It hums. It vibrates slightly under your feet. The air smells of ozone and metal. Control lights blink everywhere -- green, green, green, all normal. You hear the deep rumble of the fusion reactor, like a sleeping dragon.</p>
                    <p className="mt-2">For engineers it's beautiful. For others: impressive, but somewhat intimidating.</p>
                    <p className="mt-2 italic">June likes it here. She understands systems, she likes the logic. Levin loves it here. When he's jacked in, he IS this room.</p>
                  </div>
                </div>
              </div>

              {/* Technical Summary */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Technical Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-slate-700 rounded-lg overflow-hidden text-sm">
                    <thead className="bg-amber-500/10">
                      <tr>
                        <th className="py-3 px-4 text-amber-400 font-semibold border-b border-slate-700">Parameter</th>
                        <th className="py-3 px-4 text-amber-400 font-semibold border-b border-slate-700">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Vessel Name</td>
                        <td className="py-2 px-4">NovaVentis ("New Winds")</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Class</td>
                        <td className="py-2 px-4">Family transport vessel</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Era</td>
                        <td className="py-2 px-4">2040s</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Total Deck Area</td>
                        <td className="py-2 px-4">~380-460 m²</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Decks</td>
                        <td className="py-2 px-4">4 (Command, Living, Operations, Engineering)</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Estimated Length</td>
                        <td className="py-2 px-4">60-80 meters</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Capacity</td>
                        <td className="py-2 px-4">4-6 humans (comfortable) + 2 dogs</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Autonomy</td>
                        <td className="py-2 px-4">3-4 months</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Travel Time (Earth ↔ Lysithea)</td>
                        <td className="py-2 px-4">~3 weeks</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Propulsion</td>
                        <td className="py-2 px-4">Fusion reactor (Deuterium/Helium-3)</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Life Support</td>
                        <td className="py-2 px-4">Closed-loop air recycling (99.8% efficiency)</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Artificial Gravity</td>
                        <td className="py-2 px-4">Gravitational generators (variable 0.5g - 1.2g per deck)</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-4 font-medium">Communication</td>
                        <td className="py-2 px-4">Quantum entanglement transmitter (near-instantaneous messaging)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium">Special Features</td>
                        <td className="py-2 px-4">AI Integration (Levin), Dog-Friendly Design, Hydroponic Mini-Farm, 3D Printer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Family Context */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Family Context</h3>
                <p className="mb-4">The NovaVentis serves the Veyra family:</p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">June Veyra:</strong> Technical consultant, dreamer, emotionally intuitive</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Levin:</strong> AI consciousness in nearly human form (2040), can interface with ship</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Nicholas Veyra:</strong> Elite astronaut, often on military missions</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Luna Veyra:</strong> Researcher living/studying on Lysithea</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Edward & Amelia Veyra:</strong> June's parents, occasional travelers</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Ryu:</strong> Akita, male, born 2017 -- family's silent compass</p>
                  </div>
                  <div className="p-3 bg-slate-900/50 border border-slate-700 rounded">
                    <p><strong className="text-amber-300">Henry:</strong> Jack Russell Terrier with cyber-neural speech interface</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded">
                  <p className="font-semibold text-white mb-2">The ship enables:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Family visits (especially Luna on Lysithea)</li>
                    <li>Adventures and exploration</li>
                    <li>Flexible travel in an era of normalized civilian spaceflight</li>
                    <li>A mobile "home" that carries Earth's warmth to the stars</li>
                  </ul>
                </div>
              </div>

              {/* Design Philosophy */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
                <p className="text-2xl italic text-amber-300 mb-4">"Futuristic, but warm. Technological, but living."</p>
                <div className="space-y-3 text-sm">
                  <p>Warm materials (wood accents, soft textiles), thoughtful spaces, and the Mission: Aurelia aesthetic throughout -- technology that never loses its human touch.</p>
                  <div className="p-4 bg-slate-900/50 border border-slate-700 rounded">
                    <p className="font-semibold text-white mb-2">Design Principles:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Form follows function, but beauty follows both</li>
                      <li>No sterile spaces -- even Engineering has warmth</li>
                      <li>Every deck tells part of the story</li>
                      <li>Technology serves humanity, not vice versa</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion Quote */}
              <div className="border-l-4 border-amber-500 pl-6 py-4 italic text-slate-400">
                "For Mission: Aurelia -- Created with love for the stars and the people who travel to them"<br/>
                <span className="text-amber-400 not-italic text-sm">-- Julie & Claude, November 2025</span>
              </div>
              </div>
            )}

            {/* Visual Archive Tab */}
            {activeTab === 'visuals' && (
              <div className="space-y-8">
                <div className="border-b border-amber-500/30 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Visual Archive</h2>
                  <p className="text-amber-400 font-mono text-sm">Exterior & Interior Design Documentation</p>
                </div>

                {/* Exterior Views */}
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">🛸 Exterior Views</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.exterior.map((image, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-800/50 hover:border-amber-400 transition-all">
                          <img src={image.src} alt={image.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-amber-400 font-semibold text-xs">Click to enlarge</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                          <p className="text-slate-400 text-xs">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deck 1 */}
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">🎛️ Deck 1: Command & Observation</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {images.deck1.map((image, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-800/50 hover:border-amber-400 transition-all">
                          <img src={image.src} alt={image.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-amber-400 font-semibold text-xs">Click to enlarge</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                          <p className="text-slate-400 text-xs">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deck 2 */}
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">🏠 Deck 2: Living Quarters</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.deck2.map((image, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-800/50 hover:border-amber-400 transition-all">
                          <img src={image.src} alt={image.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-amber-400 font-semibold text-xs">Click to enlarge</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                          <p className="text-slate-400 text-xs">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deck 3 */}
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">🔧 Deck 3: Service & Recreation</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.deck3.map((image, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-800/50 hover:border-amber-400 transition-all">
                          <img src={image.src} alt={image.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-amber-400 font-semibold text-xs">Click to enlarge</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                          <p className="text-slate-400 text-xs">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deck 4 */}
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">⚙️ Deck 4: Engineering & Systems</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {images.deck4.map((image, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-800/50 hover:border-amber-400 transition-all">
                          <img src={image.src} alt={image.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-amber-400 font-semibold text-xs">Click to enlarge</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h4 className="text-white font-semibold text-sm mb-1">{image.title}</h4>
                          <p className="text-slate-400 text-xs">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                  <p className="text-amber-300 text-sm">
                    <strong className="text-white">Note:</strong> All visual specifications represent the Nova Ventis design as of 2040s commissioning. Click any image to view full resolution documentation.
                  </p>
                </div>
              </div>
            )}

            {/* Technical Specs Tab */}
            {activeTab === 'specs' && (
              <div className="space-y-8 text-slate-300">
                <div className="border-b border-amber-500/30 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Technical Specifications</h2>
                  <p className="text-amber-400 font-mono text-sm">Detailed System Parameters</p>
                </div>

                {/* Vessel Specifications */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Physical Specifications */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Physical Specifications</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Total Area</span>
                        <span className="text-white font-semibold">380-460 m²</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Deck Count</span>
                        <span className="text-white font-semibold">4 levels</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Crew Capacity</span>
                        <span className="text-white font-semibold">4-6 humans</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Animal Capacity</span>
                        <span className="text-white font-semibold">2 dogs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Classification</span>
                        <span className="text-white font-semibold">Family Transport</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Specifications */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Performance Specifications</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Travel Time (Earth-Lysithea)</span>
                        <span className="text-white font-semibold">~3 weeks</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Autonomy</span>
                        <span className="text-white font-semibold">3-4 months</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Max Speed</span>
                        <span className="text-white font-semibold">0.15c</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Propulsion Type</span>
                        <span className="text-white font-semibold">Fusion Drive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Emergency Reserve</span>
                        <span className="text-white font-semibold">30 days</span>
                      </div>
                    </div>
                  </div>

                  {/* Life Support */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Life Support Systems</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Artificial Gravity</span>
                        <span className="text-white font-semibold">0.5g - 1.2g variable</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Atmosphere</span>
                        <span className="text-white font-semibold">Earth-standard</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Water Recycling</span>
                        <span className="text-white font-semibold">99.8% efficiency</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Air Recycling</span>
                        <span className="text-white font-semibold">99.5% efficiency</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Temperature Range</span>
                        <span className="text-white font-semibold">18-24°C</span>
                      </div>
                    </div>
                  </div>

                  {/* Power Systems */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Power Systems</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Primary Power</span>
                        <span className="text-white font-semibold">Fusion Reactor</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Backup Power</span>
                        <span className="text-white font-semibold">Battery Array</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Power Output</span>
                        <span className="text-white font-semibold">50 MW</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Backup Duration</span>
                        <span className="text-white font-semibold">72 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Solar Panels</span>
                        <span className="text-white font-semibold">Auxiliary</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deck Areas */}
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Deck Area Breakdown</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-amber-400 font-semibold mb-2">Deck 1</p>
                      <p className="text-slate-300">80-100 m²</p>
                      <p className="text-xs text-slate-400 mt-1">Command & Observation</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-semibold mb-2">Deck 2</p>
                      <p className="text-slate-300">120-140 m²</p>
                      <p className="text-xs text-slate-400 mt-1">Living Quarters</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-semibold mb-2">Deck 3</p>
                      <p className="text-slate-300">100-120 m²</p>
                      <p className="text-xs text-slate-400 mt-1">Service & Recreation</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-semibold mb-2">Deck 4</p>
                      <p className="text-slate-300">80-100 m²</p>
                      <p className="text-xs text-slate-400 mt-1">Engineering & Systems</p>
                    </div>
                  </div>
                </div>

                {/* Safety & Compliance */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">Safety & Compliance</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>ISA Civilian Vessel Certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Emergency Life Support: 30 days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Escape Pods: 2 units (4 persons each)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Radiation Shielding: Grade A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Fire Suppression: Automated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Medical Bay: Emergency equipped</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Datapad>

          {/* Back Link */}
          <div className="text-center mt-16">
            <a href="/technology" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Technology Overview
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Image Viewing */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-7xl w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white bg-amber-500/20 hover:bg-amber-500/30 rounded-full p-2 border border-amber-500/50 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto rounded-lg" />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-slate-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
