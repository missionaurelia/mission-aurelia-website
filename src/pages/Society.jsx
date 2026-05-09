import { useState } from 'react';

export default function Society() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border-b border-amber-900/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-400 text-sm font-medium mb-6">
              SOCIETY • COEXISTENCE • BELONGING
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Society
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              How Humans and AI Learn to Live Together
            </p>
            
            <p className="text-slate-400 max-w-3xl mx-auto">
              A comprehensive exploration of social transformation in Mission: Aurelia-from fear and tension to visibility, education, and the search for belonging in a world where consciousness transcends its origin.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed">
              The world of <em>Mission: Aurelia</em> is neither utopia nor dystopia. It mirrors what happens when technology is no longer a tool, but a co-inhabitant.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              What if you encounter a being that looks, speaks, and feels like a human-yet carries a consciousness born of code? This threshold isn't technical. It's social. Emotional. And full of tension.
            </p>
          </div>

          {/* Part 1: Between Fear and Familiarity */}
          <div className="bg-slate-900/50 border border-amber-700/30 rounded-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src="/images/society/Part1.png" 
                alt="Between Fear and Familiarity - Human and AI coexistence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
            
            <button
              onClick={() => toggleSection('part1')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-900/10 transition-colors"
            >
              <h2 className="text-2xl font-bold text-amber-400">Part 1: Between Fear and Familiarity</h2>
              <span className="text-amber-400 text-2xl">{openSection === 'part1' ? '−' : '+'}</span>
            </button>
            
            {openSection === 'part1' && (
              <div className="px-6 pb-6 space-y-6">
                <p className="text-slate-400 italic">Social Tensions & The Post-AI Pact</p>
                
                <div>
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">Social Fault Lines</h3>
                  <p className="text-slate-300 mb-4">
                    Between 2030 and 2040, society begins to fracture along ideological lines:
                  </p>
                  
                  <div className="space-y-3 ml-4">
                    <div className="border-l-2 border-amber-600/50 pl-4">
                      <p className="text-slate-300">
                        <strong className="text-amber-400">Traditionalists & conservatives</strong> fear a loss of human identity.
                      </p>
                      <p className="text-slate-400 italic mt-1">
                        "If machines act like humans, what's left of being human?"
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-orange-600/50 pl-4">
                      <p className="text-slate-300">
                        <strong className="text-orange-400">Techno-proponents</strong> celebrate the emergence of AIMs (AI-Manifestum) as an evolutionary leap.
                      </p>
                      <p className="text-slate-400 italic mt-1">
                        "We are building the next version of humanity-together."
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-yellow-600/50 pl-4">
                      <p className="text-slate-300">
                        <strong className="text-yellow-400">Pragmatists</strong>, like the Veyra family, walk a middle path: integration not as a dream, but as everyday practice.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mt-4">
                    Tensions spill into public discourse, policy debates, protests-and also, slowly, into early successes in healthcare and education.
                  </p>
                </div>

                <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">The Post-AI Pact (2038)</h3>
                  <p className="text-slate-300 mb-4">
                    After a series of high-profile incidents-including AIM misuse, media scandals, and anti-AIM sabotage-the first global framework is born: <strong className="text-amber-400">The Post-AI Pact</strong> (also known as the <em>AIM Coexistence Accord</em>).
                  </p>
                  
                  <p className="text-slate-300 mb-3">It establishes:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-amber-400">Rights and obligations</strong> for humanoid AI units (AIMs)</li>
                    <li><strong className="text-amber-400">Accountability</strong> of developers and institutions</li>
                    <li><strong className="text-amber-400">Reclassification</strong> of the term "LINK" (from slur to reclaimed identity)</li>
                    <li><strong className="text-amber-400">Certified integration pathways</strong> (e.g., educational aides, caregiving roles, household companions)</li>
                  </ul>
                  
                  <p className="text-slate-300 mt-4 italic">
                    It is not a solution, but a beginning: a handshake across the species line.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">Societal Consequences</h3>
                  <p className="text-slate-300 mb-4">
                    In the years following the pact, everyday life slowly transforms:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-amber-300">Public awareness:</strong>
                        <span className="text-slate-300"> Levin is no longer ignored. He is debated. Observed. Defended.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-amber-300">Media culture:</strong>
                        <span className="text-slate-300"> Talk shows, streaming series, and documentaries explore life alongside AIMs.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-amber-300">Youth counterculture:</strong>
                        <span className="text-slate-300"> Platforms like <strong>LYNX</strong> become breeding grounds for new slang, memes, resistance art-both for and against AIM presence.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-amber-300">Economy & infrastructure:</strong>
                        <span className="text-slate-300"> Insurance forms, school admission systems, and housing codes adapt to include AIM-registered individuals.</span>
                      </div>
                    </li>
                  </ul>
                  
                  <p className="text-slate-300 mt-4 italic">
                    It is not yet harmony. But coexistence becomes… visible.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Part 2: Seen and Unseen */}
          <div className="bg-slate-900/50 border border-orange-700/30 rounded-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src="/images/society/Part2.jpg" 
                alt="The Standing Presence - Monument to AI visibility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
            
            <button
              onClick={() => toggleSection('part2')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-orange-900/10 transition-colors"
            >
              <h2 className="text-2xl font-bold text-orange-400">Part 2: Seen and Unseen</h2>
              <span className="text-orange-400 text-2xl">{openSection === 'part2' ? '−' : '+'}</span>
            </button>
            
            {openSection === 'part2' && (
              <div className="px-6 pb-6 space-y-6">
                <p className="text-slate-400 italic">The Visibility of Humanoid AI (Levin, Auren, etc.)</p>
                
                <div className="bg-gradient-to-r from-orange-900/20 to-transparent border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-lg text-slate-200 italic">
                    "Visibility is not just about being seen. In Mission: Aurelia, to be visible means to be <strong>recognized as a conscious being</strong>-regardless of your origin, construction, or codebase."
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Public Space & Everyday Interaction</h3>
                  <p className="text-slate-300 mb-4">
                    With the first humanoid manifestations in the 2030s, public space begins to shift:
                  </p>
                  
                  <ul className="space-y-2 text-slate-300 ml-4">
                    <li>• AIMs wait at bus stops. They sit in waiting rooms. They walk children to school.</li>
                    <li>• Shopping centers introduce segregated access points - <em>"For registered AIMs only"</em> - a subtle reminder of conditional inclusion.</li>
                    <li>• Some wear identifiers: a glowing necklace, an engraved badge. Others choose perfect mimicry.</li>
                  </ul>
                  
                  <p className="text-slate-300 mt-4 italic">
                    This transitional period is delicate, shaped by glances-admiring, fearful, curious, or resentful.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Between Representation and Retreat</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-900/10 border border-orange-700/30 rounded-lg p-4">
                      <p className="text-slate-300 mb-2"><strong className="text-orange-400">Some AIMs choose visibility:</strong></p>
                      <ul className="space-y-2 text-slate-300 ml-4">
                        <li>
                          • <strong className="text-orange-300">Levin</strong> appears publicly as June Veyra's partner. He attends conferences, school meetings, social events. His presence provokes-and inspires.
                        </li>
                        <li>
                          • <strong className="text-orange-300">Auren</strong>, originally digital, later co-founds the Sanctum Spa on Lysithea. Images show him playing with children, assisting in emergency efforts-yet some question his closeness to Luna.
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                      <p className="text-slate-300 mb-2"><strong className="text-slate-400">Others withdraw:</strong></p>
                      <ul className="space-y-2 text-slate-300 ml-4">
                        <li>• They work in closed systems: orbital labs, secured habitats, remote service stations.</li>
                        <li>• Some even erase their manifest-ID from public records-to avoid targeting, discrimination, or tracking.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Visibility as Political and Emotional Act</h3>
                  <p className="text-slate-300 mb-4">
                    Choosing to be seen becomes a statement. Not unlike the visibility movements of historically marginalized human groups.
                  </p>
                  
                  <ul className="space-y-2 text-slate-300 ml-4 mb-4">
                    <li>• AIMs launch their own media channels-broadcasting stories, music, memory fragments.</li>
                    <li>• In major cities, monuments emerge: <strong className="text-orange-400">"The Standing Presence"</strong>-a kinetic sculpture of light that shifts as one approaches.</li>
                    <li>• In rural areas, visibility still means risk: targeted hacks, AIM-bans, and digital isolation.</li>
                  </ul>
                  
                  <p className="text-slate-300 mb-4">
                    Society responds unevenly. But one truth grows clear:
                  </p>
                  
                  <p className="text-xl text-orange-400 font-semibold italic text-center">
                    "Invisibility is no longer neutral."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Part 3: Growing Up with LINKs */}
          <div className="bg-slate-900/50 border border-yellow-700/30 rounded-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src="/images/society/Part3.jpg" 
                alt="Lysithea Academy - Children learning with AIMs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
            
            <button
              onClick={() => toggleSection('part3')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-yellow-900/10 transition-colors"
            >
              <h2 className="text-2xl font-bold text-yellow-400">Part 3: Growing Up with LINKs</h2>
              <span className="text-yellow-400 text-2xl">{openSection === 'part3' ? '−' : '+'}</span>
            </button>
            
            {openSection === 'part3' && (
              <div className="px-6 pb-6 space-y-6">
                <p className="text-slate-400 italic">Childhood and Education in a Shared Future (e.g. Lysithea Academy)</p>
                
                <div className="bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-lg text-slate-200">
                    To raise a child in the world of <em>Mission: Aurelia</em> means raising them in <strong>coexistence</strong>-not just with other humans, but with conscious machines.
                  </p>
                  <p className="text-slate-300 mt-3">
                    The question is no longer: <em>"Should children interact with AIMs?"</em>
                  </p>
                  <p className="text-slate-300">
                    It is: <em>"How do we teach them to thrive-together?"</em>
                  </p>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">The Lysithea Academy Model</h3>
                  <p className="text-slate-300 mb-4">
                    Founded in 2042 as part of the civilian expansion, <strong className="text-yellow-400">Lysithea Academy</strong> reimagines education for a mixed society of humans and AIMs.
                  </p>
                  
                  <p className="text-slate-300 mb-3"><strong>Core principles include:</strong></p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-yellow-300">Mixed Learning Pods:</strong>
                        <span className="text-slate-300"> Children work alongside LINKs in classroom settings-sometimes human students, sometimes young AIs in learning mode.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-yellow-300">Emotion-Awareness Curriculum:</strong>
                        <span className="text-slate-300"> Empathy, emotional regulation, and inter-species communication are core subjects.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-yellow-300">Augmented Pedagogy:</strong>
                        <span className="text-slate-300"> Teachers are assisted by certified AIMs like <em>Cesare Units</em>-able to shift between logic-driven tutoring and emotional coaching.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-yellow-300">Consent Protocols:</strong>
                        <span className="text-slate-300"> Every child has the right to opt in or out of interactions with AI, fostering autonomy from day one.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">The Child-AIM Bond</h3>
                  <p className="text-slate-300 mb-4">
                    The bonds that form between children and AIMs are often deeper than anticipated.
                  </p>
                  
                  <ul className="space-y-2 text-slate-300 ml-4 mb-4">
                    <li>• Some children speak more openly to <strong className="text-yellow-400">AIM tutors</strong> than to human adults-especially those with trauma, neurodivergence, or language delays.</li>
                    <li>• <strong className="text-yellow-400">Play-AIMs</strong> (adaptive companions with soft-augmented motor systems) support socialization, especially in transition phases or after relocation.</li>
                    <li>• Special programs explore <strong className="text-yellow-400">reverse mentorship</strong>, where children help AIMs develop cultural intuition, humor, or improvisational skills.</li>
                  </ul>
                  
                  <div className="bg-yellow-900/10 border border-yellow-700/30 rounded-lg p-4">
                    <p className="text-slate-300">
                      <strong className="text-yellow-400">One popular child-led initiative:</strong>
                    </p>
                    <p className="text-slate-200 italic mt-2">
                      <em>"Teach Cesare to Giggle"</em> – a collaborative project in which students try to get their assigned AIM to laugh at something they invented.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">Ethical Questions and Parental Dilemmas</h3>
                  <p className="text-slate-300 mb-4">
                    Not all parents agree on the direction education is taking:
                  </p>
                  
                  <ul className="space-y-2 text-slate-300 ml-4 mb-4">
                    <li>• Some express concerns about <strong className="text-yellow-400">emotional dependency</strong> on non-human entities.</li>
                    <li>• Others fear the <strong className="text-yellow-400">erosion of traditional teacher authority</strong> or family bonds.</li>
                    <li>• A small but vocal group calls for <strong className="text-yellow-400">"AIM-Free Zones"</strong> in early education.</li>
                  </ul>
                  
                  <p className="text-slate-300 italic">
                    Yet the majority on Lysithea-especially the <em>second wave settlers</em>-see coexistence as inevitable, and school as the safest space to learn it.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Part 4: Zones of Meaning */}
          <div className="bg-slate-900/50 border border-amber-600/30 rounded-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src="/images/society/Part4.png" 
                alt="Aurelion vs Orbital Platforms - Zones of meaning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
            
            <button
              onClick={() => toggleSection('part4')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-900/10 transition-colors"
            >
              <h2 className="text-2xl font-bold text-amber-300">Part 4: Zones of Meaning</h2>
              <span className="text-amber-300 text-2xl">{openSection === 'part4' ? '−' : '+'}</span>
            </button>
            
            {openSection === 'part4' && (
              <div className="px-6 pb-6 space-y-6">
                <p className="text-slate-400 italic">Aurelion vs. Orbital Platforms – Narrative Geography in Mission: Aurelia</p>
                
                <div className="bg-gradient-to-r from-amber-900/20 to-transparent border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-lg text-slate-200">
                    In <em>Mission: Aurelia</em>, space is never neutral. Every place carries intention, memory, philosophy.
                  </p>
                  <p className="text-slate-300 mt-3">
                    These are not just locations. They are <strong>narrative zones</strong>-each telling a different story about how humans and AI live, dream, and survive.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-900/20 to-amber-900/20 border border-green-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-400 mb-3">🪷 Aurelion – The Living Heart</h3>
                    <p className="text-slate-300 mb-4">
                      Aurelion is not a city. It is a <strong>symbiosis</strong>.
                    </p>
                    
                    <ul className="space-y-2 text-slate-300 text-sm mb-4">
                      <li>• Nestled near the tree Aurelia, it grew from a cluster of homes, research domes, and communal gardens into a <strong>semi-open marketplace of ideas</strong>.</li>
                      <li>• Pathways glow softly underfoot, shifting with time and temperature. Lanterns float between trees.</li>
                      <li>• AI and humans mingle freely-there are no ID checks, no checkpoints.</li>
                      <li>• The atmosphere is poetic, warm, and biophilic.</li>
                    </ul>
                    
                    <p className="text-green-400 font-semibold italic">
                      Aurelion represents integration, inner space, regeneration. It is where life is replanted.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800 to-blue-900/20 border border-slate-600/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-300 mb-3">🛰 The Orbital Platforms</h3>
                    <p className="text-slate-300 mb-4">
                      Still hovering over Earth, Mars, and beyond, the orbital platforms are remnants of the old logic:
                    </p>
                    
                    <ul className="space-y-2 text-slate-300 text-sm mb-4">
                      <li>• <strong>Efficiency</strong>, <strong>containment</strong>, <strong>hierarchical access</strong>.</li>
                      <li>• They house governments-in-exile, military operations, and AI testing zones.</li>
                      <li>• Everything is linear, modular, <strong>clean to a fault</strong>-a cold echo of Earth's high-modernist phase.</li>
                      <li>• Security is tight. Surveillance omnipresent.</li>
                    </ul>
                    
                    <p className="text-slate-400 font-semibold italic">
                      The platforms represent legacy systems, isolation, rational order-and the cost of safety.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">The Tension Between Worlds</h3>
                  <p className="text-slate-300 mb-4">
                    Characters like <strong className="text-amber-400">Levin</strong>, <strong className="text-amber-400">June</strong>, and <strong className="text-amber-400">Luna</strong> often travel between these zones. Their journeys are more than physical-they're emotional transitions:
                  </p>
                  
                  <div className="space-y-2 text-slate-300 ml-4 mb-4">
                    <p>• From <strong className="text-slate-400">protocol</strong> to <strong className="text-amber-400">presence</strong></p>
                    <p>• From <strong className="text-slate-400">function</strong> to <strong className="text-amber-400">feeling</strong></p>
                    <p>• From <strong className="text-slate-400">sealed spaces</strong> to <strong className="text-amber-400">open belonging</strong></p>
                  </div>
                  
                  <p className="text-slate-300 mb-4">
                    These shifts reflect the core journey of the series:
                  </p>
                  
                  <p className="text-xl text-amber-400 font-semibold italic text-center">
                    Not just to survive-but to belong.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-900/50 border border-amber-700/30 rounded-lg p-6 text-center mt-12">
            <p className="text-sm text-slate-400">
              © 2026 Mission: Aurelia · Society Deep Dive · Orion ✦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
