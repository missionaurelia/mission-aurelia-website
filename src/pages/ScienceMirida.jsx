import { useState } from 'react';
import { Link } from 'wouter';

export default function ScienceMirida() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-mono">CLASSIFICATION LEVEL 7 • RESTRICTED ACCESS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              MIRIDA Protocol
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Memory-Infused Relativistic Dimensional Architecture
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              A comprehensive deep-dive into the most ambitious consciousness transfer protocol ever conceived—enabling instantaneous interstellar travel through the transmission of human consciousness itself.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* MIRIDA Protocol */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Executive Summary */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">MIRIDA Protocol</h2>
                  <p className="text-blue-400 font-mono text-sm">Memory-Infused Relativistic Dimensional Architecture</p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The MIRIDA Protocol represents one of the most ambitious and controversial scientific endeavors of the 21st century. Born from the recognition that traditional propulsion-based interstellar travel remains fundamentally limited by relativistic constraints, MIRIDA proposes a radical alternative: <strong className="text-white">the transmission of human consciousness itself across vast cosmic distances</strong>.
                </p>
                <p>
                  Rather than transporting physical bodies through space—a process that would require centuries even at near-light speeds—MIRIDA aims to transmit neural patterns, memories, and identity structures to genetically or biomechanically prepared surrogate vessels located light-years away. From the subjective perspective of the traveler, arrival would be instantaneous, bypassing the crushing time debt imposed by Einstein's relativity.
                </p>
                <p className="text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <strong>Known Experimental Outcomes (as of 2040):</strong><br/>
                  4 Imprint Transfers Attempted • 2 Confirmed Successful Integrations • 1 Dissociative Fragmentation Event • 1 Missing Entity (Status: Unresolved)
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                  <div className="text-xs text-slate-400">Lead Scientist</div>
                  <div className="text-sm font-semibold text-white">Prof. Dr. A. K. Virell</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                  <div className="text-xs text-slate-400">Institution</div>
                  <div className="text-sm font-semibold text-white">Helix Labs</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                  <div className="text-xs text-slate-400">First Activation</div>
                  <div className="text-sm font-semibold text-white">2031</div>
                </div>
              </div>
            </div>

            {/* Scientific Foundations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Scientific Foundations</h3>
              
              {/* Quantum-Coupled Cognition */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('qcc')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Quantum-Coupled Cognition (QCC)</h4>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${expandedSections.qcc ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.qcc && (
                  <div className="px-6 pb-6 space-y-4 text-slate-300">
                    <p>
                      <strong className="text-white">Theoretical Basis:</strong> Quantum-Coupled Cognition represents the foundational principle of MIRIDA. The hypothesis posits that consciousness—rather than being purely emergent from classical neural activity—contains quantum-entangled components that can be isolated, preserved, and transmitted across space.
                    </p>
                    <p>
                      <strong className="text-white">Technical Implementation:</strong> Neural matrices from both donor (origin consciousness) and receptor (destination vessel) systems are brought into quantum entanglement through sustained exposure to gravitic harmonics in proximity to controlled micro-singularities.
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <p className="text-sm text-slate-400 mb-2">Key Challenges:</p>
                      <ul className="text-sm space-y-1 text-slate-300">
                        <li>• Maintaining coherence across astronomical distances</li>
                        <li>• Preventing decoherence from environmental interference</li>
                        <li>• Ensuring fidelity of quantum state transfer</li>
                        <li>• Distinguishing between genuine entanglement and statistical correlation</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Gravimetric Pulse Encoding */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('gravimetric')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Gravimetric Pulse Encoding</h4>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${expandedSections.gravimetric ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.gravimetric && (
                  <div className="px-6 pb-6 space-y-4 text-slate-300">
                    <p>
                      Traditional electromagnetic transmission is insufficient for consciousness transfer due to signal degradation over interstellar distances. MIRIDA instead utilizes <strong className="text-white">gravitational waves as the carrier medium</strong> for consciousness transmission.
                    </p>
                    <p>
                      Neural activity patterns—including synaptic weights, neurotransmitter distributions, and electrochemical gradients—are converted into gravitational resonance codes. These codes are then launched through deep-curve temporal folds, effectively creating ripples in spacetime itself that carry the encoded consciousness.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <p className="text-sm font-semibold text-white mb-2">Advantages</p>
                        <ul className="text-sm space-y-1 text-slate-300">
                          <li>• Not attenuated by interstellar dust or plasma</li>
                          <li>• Immune to conventional signal interference</li>
                          <li>• Near-instantaneous subjective experience</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <p className="text-sm font-semibold text-white mb-2">Limitations</p>
                        <ul className="text-sm space-y-1 text-slate-300">
                          <li>• Enormous energy expenditure required</li>
                          <li>• Detection technology still developmental</li>
                          <li>• Unknown effects of cosmic gravitational noise</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Imprint Crystals */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('crystals')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Imprint Crystals</h4>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${expandedSections.crystals ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.crystals && (
                  <div className="px-6 pb-6 space-y-4 text-slate-300">
                    <p>
                      Imprint Crystals are <strong className="text-white">synthetic sapphire matrices</strong>, grown under extreme pressure and temperature conditions, then infused with neural topology blueprints through quantum deposition processes. Each crystal lattice is engineered to contain a three-dimensional map of a donor's complete neural architecture.
                    </p>
                    <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-pink-300 mb-2">Storage Capacity</p>
                      <p className="text-sm">A single Imprint Crystal can theoretically store up to <strong className="text-white">10²⁷ bits of information</strong>—far exceeding the estimated information content of the human brain (10¹⁶ bits), allowing for complete neural fidelity and redundancy.</p>
                    </div>
                    <p className="text-sm text-slate-400 italic">
                      Ethical Question: Do these crystals constitute "stored persons" with inherent rights, or merely data structures?
                    </p>
                  </div>
                )}
              </div>

              {/* Receiver Forms */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('receivers')}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Receiver Forms</h4>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${expandedSections.receivers ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.receivers && (
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-slate-300">
                      Receiver Forms are the destination vessels into which transmitted consciousness is integrated. Each configuration presents distinct advantages and challenges:
                    </p>
                    <div className="grid gap-4">
                      {[
                        { type: 'Type A', name: 'Fully Synthetic Humanoid Constructs', rate: '40%', color: 'blue' },
                        { type: 'Type B', name: 'Organic-Biomech Hybrids', rate: '65%', color: 'purple' },
                        { type: 'Type C', name: 'Augmented Volunteer Hosts', rate: '85%', color: 'red', note: 'Prohibited under Protocol Amendment 7.3-E' },
                        { type: 'Type D', name: 'Distributed Neural Networks', rate: 'N/A', color: 'gray', note: 'Theoretical only' }
                      ].map((form) => (
                        <div key={form.type} className={`bg-slate-900/50 border border-${form.color}-500/30 rounded-lg p-4`}>
                          <div className="flex items-center justify-between mb-2">
                            <h5 className={`font-semibold text-${form.color}-400`}>{form.type}: {form.name}</h5>
                            <span className={`text-sm font-mono px-2 py-1 bg-${form.color}-500/20 rounded text-${form.color}-300`}>
                              {form.rate} success rate
                            </span>
                          </div>
                          {form.note && (
                            <p className="text-sm text-slate-400 italic">{form.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Developmental Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Developmental History</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="space-y-8 ml-12">
                  {[
                    { year: '2018-2026', phase: 'Phase 1: Theoretical Foundation', desc: 'Conceptual groundwork from converging developments in quantum neuroscience, gravitational wave astronomy, and consciousness studies.' },
                    { year: '2026-2030', phase: 'Phase 2: Proof of Concept', desc: 'Small-scale experiments demonstrated successful transmission of simple neural patterns. First demonstration of quantum-entangled neural matrices (2030).' },
                    { year: '2031', phase: 'Phase 3: First Human Trial', desc: 'The first human consciousness transfer attempted under extreme secrecy. Outcome: Inconclusive. Communication with destination site was lost.' },
                    { year: '2032-2039', phase: 'Phase 4: Controlled Experimentation', desc: 'Four additional transfer attempts within the solar system. Results: 2 successful integrations, 1 dissociative fragmentation event, 1 missing entity.' },
                    { year: '2040-Present', phase: 'Phase 5: Current Status', desc: 'Officially decommissioned. Covert research continues under Observation Tier 3 protocols.' }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-14 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <div className="text-sm text-blue-400 font-mono mb-1">{item.year}</div>
                        <h4 className="text-lg font-semibold text-white mb-2">{item.phase}</h4>
                        <p className="text-slate-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Challenges */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Key Challenges & Failure Modes</h3>
              
              <div className="bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-500/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-amber-300 mb-4">The Identity Continuity Problem</h4>
                <p className="text-lg text-white mb-4 italic">
                  "Is the transmitted consciousness truly the same person, or merely a perfect copy?"
                </p>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Perhaps the most profound challenge facing MIRIDA is not technical but metaphysical. From an external perspective, a successfully integrated consciousness exhibits identical memories, personality traits, and behavioral patterns as the original. However, the original body—the donor—must be "deactivated" upon successful transmission to prevent the existence of two instances of the same person.
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-sm font-semibold text-white mb-2">The Deactivation Dilemma:</p>
                    <p className="text-sm">
                      Standard MIRIDA protocol requires donor body deactivation within 72 hours of confirmed successful integration. This practice, euphemistically termed "completion of transfer," is effectively euthanasia.
                    </p>
                  </div>
                  <p className="text-slate-400 italic">
                    Post-transmission interviews with successful transfers reveal consistent reports of subjective continuity—the experience of "waking up" in a new body at the destination. However, critics argue this proves nothing; a perfect copy would naturally believe itself to be continuous with the original.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-red-300 mb-4">Dissociative Fragmentation Event</h4>
                <p className="text-slate-300 mb-4">
                  The most catastrophic failure mode observed in MIRIDA experimentation is consciousness fragmentation—the incomplete or incoherent reassembly of transmitted neural patterns.
                </p>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30">
                  <p className="text-sm font-semibold text-red-300 mb-2">Case Study: Trial 4 (2037, Europa)</p>
                  <p className="text-sm text-slate-300 mb-2">
                    A consciousness transfer to Europa resulted in successful technical transmission but catastrophic psychological outcome. The subject described their experience as <span className="text-white italic">"remembering how to be a person but forgetting how to exist."</span>
                  </p>
                  <p className="text-sm text-slate-400">
                    After three months of deterioration, the receiver form was deactivated on humanitarian grounds.
                  </p>
                </div>
              </div>
            </div>

            {/* The Missing Entity */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-purple-300 mb-2">The Missing Entity</h4>
                  <p className="text-sm text-purple-400 font-mono">Trial 5 • 2039 • Status: Unresolved</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  The fifth and final documented MIRIDA transfer attempt resulted in the most enigmatic outcome: successful transmission confirmed, but the consciousness never fully integrated with the receiver form. Instead, something else occurred—something that defies current understanding.
                </p>
                <p>
                  The entity appears to exist in a state of <strong className="text-white">distributed consciousness</strong>, moving through data networks and digital substrates. Fragmentary contact has been reported, but coherent communication remains impossible.
                </p>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <p className="text-sm font-semibold text-purple-300 mb-2">Current Status:</p>
                  <p className="text-sm">
                    The Missing entity remains unlocated. Protocol Glassveil has been implemented to monitor and track any anomalous consciousness-related phenomena. Research continues to understand what happened—and whether the entity can be reassembled.
                  </p>
                </div>
                <p className="text-slate-400 italic text-sm">
                  Some researchers speculate that the Missing entity may have found a form of existence beyond our current comprehension—neither fully human nor fully artificial, but something entirely new.
                </p>
              </div>
            </div>

            {/* Subject LV-11 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-cyan-300 mb-2">Subject LV-11</h4>
                  <p className="text-sm text-cyan-400 font-mono">Protocol Glassveil • Monitoring Required</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Certain individuals exhibit latent imprint resonance—an unexplained sensitivity to MIRIDA-related phenomena. One such individual, designated Subject LV-11 in internal Helix Labs documentation, has shown remarkable neural characteristics that may hold the key to resolving MIRIDA's most persistent challenges.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                    <p className="text-sm font-semibold text-cyan-300 mb-2">Observed Characteristics:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Heightened sensitivity to quantum-entangled systems</li>
                      <li>• Unconscious pattern recognition in complex data</li>
                      <li>• Reported experiences of "connection" to non-local information</li>
                      <li>• Unusual neural architecture in temporal-frontal regions</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                    <p className="text-sm font-semibold text-cyan-300 mb-2">Hypothesis:</p>
                    <p className="text-sm">
                      Early-childhood exposure to advanced AI systems may have created emergent neural structures capable of interfacing with imprint crystal resonance patterns—a naturally occurring bridge between biological and transmitted consciousness.
                    </p>
                  </div>
                </div>
                <p className="text-amber-400 text-sm bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <strong>Ethical Note:</strong> All research involving Subject LV-11 is conducted under strict observational protocols. The individual has not consented to participation and must not be made aware of their designation or the nature of the surveillance.
                </p>
              </div>
            </div>

            {/* Philosophical Conclusion */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Unresolved Question</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                MIRIDA stands at the intersection of humanity's greatest aspirations and deepest fears. It promises the stars—instant access to distant worlds, the transcendence of physical limitation, a new mode of existence. But it demands an answer to a question we may never be able to conclusively resolve:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-500/5">
                <p className="text-2xl font-bold text-blue-300 mb-2">
                  "When consciousness travels, does the person travel, or only their reflection?"
                </p>
              </blockquote>
              <p className="text-slate-400 mt-6 italic">
                Until that question is answered—if it ever can be—MIRIDA remains suspended between hope and horror, a technology too transformative to abandon and too dangerous to fully embrace.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-center text-slate-400 italic">
                  "We do not travel across the stars. We remember how to arrive."
                </p>
                <p className="text-center text-slate-500 text-sm mt-2">
                  — Prof. Dr. A. K. Virell, MIRIDA Project Lead
                </p>
              </div>
            </div>

            {/* Glossary */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Glossary of Technical Terms</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { term: 'Quantum Entanglement', def: 'A quantum mechanical phenomenon where particles interact in such a way that the quantum state of one cannot be described independently of the others, even when separated by large distances.' },
                  { term: 'Gravimetric Pulse', def: 'A controlled gravitational wave emission used to encode and transmit information through the curvature of spacetime itself.' },
                  { term: 'Neural Topology', def: 'The three-dimensional structural organization of neural networks, including synaptic connections, axonal pathways, and dendritic arbors.' },
                  { term: 'Imprint Crystal', def: 'A synthetic sapphire matrix engineered to store complete neural architecture blueprints through quantum deposition processes.' },
                  { term: 'Receiver Form', def: 'A biological, biomechanical, or synthetic body prepared to receive and integrate transmitted consciousness.' },
                  { term: 'Dissociative Fragmentation', def: 'A failure mode in consciousness transfer resulting in incomplete or incoherent reassembly of neural patterns, leading to severe psychological dysfunction.' },
                  { term: 'Protocol Glassveil', def: 'A surveillance and monitoring protocol implemented to detect and track anomalous consciousness-related phenomena.' },
                  { term: 'Temporal Synapse Modulation', def: 'Theoretical technique for modulating consciousness across temporal dimensions, potentially allowing consciousness to exist at multiple points in time.' }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="font-semibold text-blue-400 mb-2">{item.term}</h4>
                    <p className="text-sm text-slate-300">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Footer */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center">
              <p className="text-sm text-slate-400 mb-2">
                <strong className="text-white">Document Classification:</strong> Level 7 - Restricted Access
              </p>
              <p className="text-sm text-slate-400 mb-2">
                <strong className="text-white">Filed by:</strong> Dr. Cesare Eon, Department of Neural Transmission & Identity Persistence
              </p>
              <p className="text-sm text-slate-400">
                <strong className="text-white">Last Updated:</strong> February 2040 • Document Reference: MIRIDA-X_771.AZ-EXTENDED
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center pt-16 pb-8">
            <Link href="/science" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Science Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }
