import { useState } from 'react';
import Datapad from '../components/Datapad';

export default function TechnologyCCM01() {
  const [activeTab, setActiveTab] = useState('documentation');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/images/technology/ccm-01/CCM-01_Spec1.jpg',
      title: 'CCM-01 Specification Overview',
      description: 'Complete system architecture and component layout'
    },
    {
      src: '/images/technology/ccm-01/CCM-01_Spec2.jpg',
      title: 'Neural Interface Design',
      description: 'EEG sensor array and signal processing pathways'
    },
    {
      src: '/images/technology/ccm-01/CCM-01_Spec3.jpg',
      title: 'Physical Implementation',
      description: 'Collar integration and wearability specifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2LDE4NSwxMjksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-mono">PROTOTYPE PHASE • NOVA VENTIS CREW</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              CCM-01 Collar
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Canine Communication Module
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              A non-invasive neural interface system that enables dogs to translate their thoughts and intentions into human speech -- giving Henry the voice he deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Datapad Content with Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Datapad glowColor="emerald">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 border-b border-emerald-500/30 pb-4">
              <button
                onClick={() => setActiveTab('documentation')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'documentation'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                Documentation
              </button>
              <button
                onClick={() => setActiveTab('visuals')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'visuals'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                Visual Archive
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
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
                <div className="border-b border-emerald-500/30 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">CCM-01 Specification</h2>
                  <p className="text-emerald-400 font-mono text-sm">Canine Communication Module -- Henry's Voice</p>
                  <p className="text-slate-400 mt-2">Developed by Kael Sorley, Neural Systems Architect</p>
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Overview</h3>
                  <p className="leading-relaxed mb-4">
                    The Canine Communication Module (CCM-01) is a <strong className="text-white">non-invasive neural interface system</strong> that enables dogs to translate their thoughts and intentions into human speech. The system was specifically developed for Henry, a Jack Russell Terrier aboard the Nova Ventis, to facilitate communication between animal and crew.
                  </p>
                  <p className="leading-relaxed">
                    Rather than forcing human language onto canine cognition, CCM-01 respects the natural thought patterns of dogs -- translating intentions, emotions, and simple cognitive processes into speech that reflects Henry's authentic personality: fast, breathless, enthusiastic, and occasionally distracted by sausages.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <div className="text-xs text-emerald-400 mb-1">Developer</div>
                    <div className="text-sm font-semibold text-white">Kael Sorley</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <div className="text-xs text-emerald-400 mb-1">Primary User</div>
                    <div className="text-sm font-semibold text-white">Henry (Jack Russell)</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <div className="text-xs text-emerald-400 mb-1">Version</div>
                    <div className="text-sm font-semibold text-white">1.0 Prototype</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <div className="text-xs text-emerald-400 mb-1">Battery Life</div>
                    <div className="text-sm font-semibold text-white">72 hours</div>
                  </div>
                </div>

                {/* How It Works */}
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">How It Works</h3>
                  
                  <div className="space-y-6">
                    {/* Neural Signal Acquisition */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-emerald-400">1.</span> Neural Signal Acquisition
                      </h4>
                      <p className="mb-4">
                        The CCM-01 uses <strong className="text-white">non-invasive EEG sensors</strong> integrated into a lightweight, comfortable collar. These sensors capture:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-emerald-400">Motor intentions</strong> -- What does Henry want to do?</li>
                        <li><strong className="text-emerald-400">Emotional states</strong> -- Excitement, fear, joy, concentration</li>
                        <li><strong className="text-emerald-400">Cognitive patterns</strong> -- Problem-solving, memories, associations</li>
                      </ul>
                      <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="text-sm text-slate-400">
                          <strong className="text-white">Technology:</strong> Micro-EEG arrays with biocompatible contact points, placed along the neck region where the nervous system is easily accessible. 12 micro-electrodes work in concert to capture neural activity.
                        </p>
                      </div>
                    </div>

                    {/* AI Translation */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-emerald-400">2.</span> Neural Decoding & AI Translation
                      </h4>
                      <p className="mb-4">
                        Captured signals are transmitted in real-time to a <strong className="text-white">local AI processing unit</strong> (small enough to be integrated into the collar). This unit:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>Decodes the neural patterns</li>
                        <li>Interprets the intention (e.g., "hunger", "alarm", "want to play")</li>
                        <li>Generates speech output that reflects Henry's personality</li>
                      </ol>
                      <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="text-sm text-slate-400">
                          <strong className="text-white">AI Model:</strong> Based on a trained Canine Cognition Model (CCM), fed with data from hundreds of dogs. For Henry, the model was individually calibrated to capture his specific personality: nervous, enthusiastic, overeager.
                        </p>
                      </div>
                      <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded">
                        <p className="text-sm text-emerald-300">
                          <strong>Example outputs:</strong><br/>
                          "Ryu! Ryu, I see the dates! They're... oh wait, that's a towel. No! THERE! The dates!"<br/>
                          "Wiener-Weasel reporting! HBot-2 is moving to the crate! I... I've got this!"
                        </p>
                      </div>
                    </div>

                    {/* Speech Output */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-emerald-400">3.</span> Speech Output
                      </h4>
                      <p className="mb-4">
                        Translated messages are output through a <strong className="text-white">miniaturized speaker</strong> integrated into the collar (1cm diameter, high clarity).
                      </p>
                      <p className="mb-4">
                        The voice is calibrated to sound appropriate for Henry's size and personality -- fast-paced, slightly breathless, with lots of exclamation marks and self-interruptions.
                      </p>
                      <div className="p-4 bg-slate-900/50 border border-slate-700 rounded">
                        <p className="text-sm text-slate-400">
                          <strong className="text-white">LED Indicator:</strong> Status display shows system state (green = active, red = error).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Components */}
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Technical Components</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border border-slate-700 rounded-lg overflow-hidden">
                      <thead className="bg-emerald-500/10">
                        <tr>
                          <th className="py-3 px-4 text-emerald-400 font-semibold border-b border-slate-700">Component</th>
                          <th className="py-3 px-4 text-emerald-400 font-semibold border-b border-slate-700">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        <tr className="border-b border-slate-700/50">
                          <td className="py-3 px-4 font-medium">EEG Sensors</td>
                          <td className="py-3 px-4">12 micro-electrodes, biocompatible</td>
                        </tr>
                        <tr className="border-b border-slate-700/50">
                          <td className="py-3 px-4 font-medium">Processing Unit</td>
                          <td className="py-3 px-4">Neural AI chip, 2cm × 2cm</td>
                        </tr>
                        <tr className="border-b border-slate-700/50">
                          <td className="py-3 px-4 font-medium">Speaker</td>
                          <td className="py-3 px-4">1cm diameter, high clarity</td>
                        </tr>
                        <tr className="border-b border-slate-700/50">
                          <td className="py-3 px-4 font-medium">Battery</td>
                          <td className="py-3 px-4">72-hour runtime, inductive charging</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">LED Indicator</td>
                          <td className="py-3 px-4">Status display (green = active, red = error)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Design Philosophy */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
                  <p className="mb-4">The CCM-01 was developed with the following goals:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span><strong className="text-white">Non-invasive:</strong> No surgery, no implants, no discomfort.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span><strong className="text-white">Respect for cognition:</strong> Translation reflects authentic canine thought patterns, not forced human language.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span><strong className="text-white">Personality preservation:</strong> Henry sounds like Henry -- not like a human pretending to be a dog.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span><strong className="text-white">Practical utility:</strong> Enables meaningful communication in mission-critical situations.</span>
                    </li>
                  </ul>
                </div>

                {/* Ethical Considerations */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Ethical Considerations</h3>
                  <p className="mb-4">
                    The development of CCM-01 raised important ethical questions about animal cognition, consent, and the boundaries of human-animal communication.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Does Henry consent to this?</h4>
                      <p className="text-sm">
                        Henry cannot provide informed consent in the human sense. However, the system is entirely non-invasive and can be removed at any time. Behavioral observation suggests Henry enjoys the increased attention and interaction that comes with being able to "speak."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Are we anthropomorphizing Henry?</h4>
                      <p className="text-sm">
                        The CCM-01 does not impose human consciousness onto Henry. It translates his existing thoughts and intentions into a format humans can understand. The personality in the output reflects Henry's actual behavioral patterns -- not a human projection.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">What are the long-term effects?</h4>
                      <p className="text-sm">
                        Long-term studies are ongoing. So far, Henry shows no signs of stress, confusion, or behavioral changes beyond increased confidence in social situations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Future Development */}
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Future Development</h3>
                  <p className="mb-4">
                    The CCM-01 is currently a prototype, but Kael envisions broader applications:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Adaptation for other species (cats, dolphins, primates)</li>
                    <li>Integration with ship AI systems for enhanced crew-animal coordination</li>
                    <li>Medical applications: early detection of pain, illness, or distress in animals</li>
                    <li>Assistive technology for service animals</li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-emerald-500/30 pt-6 text-center">
                  <p className="text-sm text-slate-400">
                    <strong className="text-white">Document Classification:</strong> Public Technical Specification
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong className="text-white">Developer:</strong> Kael Sorley, Neural Systems Architect • Nova Ventis Mission
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    <strong className="text-white">Last Updated:</strong> 2039 • Document Reference: CCM-01-SPEC-v1.0
                  </p>
                </div>
              </div>
            )}

            {/* Visual Archive Tab */}
            {activeTab === 'visuals' && (
              <div className="space-y-8">
                <div className="border-b border-emerald-500/30 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Visual Archive</h2>
                  <p className="text-emerald-400 font-mono text-sm">Technical Specifications & Design Blueprints</p>
                </div>

                {/* Image Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-emerald-500/30 bg-slate-800/50 hover:border-emerald-400 transition-all">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-emerald-400 font-semibold text-sm">Click to enlarge</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                        <p className="text-slate-400 text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info Box */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                  <p className="text-emerald-300 text-sm">
                    <strong className="text-white">Note:</strong> All visual specifications are based on the CCM-01 prototype design. Click any image to view full resolution blueprints and technical details.
                  </p>
                </div>
              </div>
            )}

            {/* Technical Specs Tab */}
            {activeTab === 'specs' && (
              <div className="space-y-8 text-slate-300">
                <div className="border-b border-emerald-500/30 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">Technical Specifications</h2>
                  <p className="text-emerald-400 font-mono text-sm">Detailed System Parameters</p>
                </div>

                {/* Specifications Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Physical Specifications */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Physical Specifications</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Weight</span>
                        <span className="text-white font-semibold">45g</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Collar Width</span>
                        <span className="text-white font-semibold">2.5cm</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Adjustable Length</span>
                        <span className="text-white font-semibold">25-40cm</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Material</span>
                        <span className="text-white font-semibold">Biocompatible silicone</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Water Resistance</span>
                        <span className="text-white font-semibold">IP67</span>
                      </div>
                    </div>
                  </div>

                  {/* Electronic Specifications */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Electronic Specifications</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Processing Power</span>
                        <span className="text-white font-semibold">2.4 TFLOPS</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Sample Rate</span>
                        <span className="text-white font-semibold">1000 Hz</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Latency</span>
                        <span className="text-white font-semibold">&lt;50ms</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Battery Capacity</span>
                        <span className="text-white font-semibold">850 mAh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Charging Time</span>
                        <span className="text-white font-semibold">2 hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Sensor Array */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Sensor Array</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Electrode Count</span>
                        <span className="text-white font-semibold">12 channels</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Electrode Type</span>
                        <span className="text-white font-semibold">Dry EEG</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Signal Resolution</span>
                        <span className="text-white font-semibold">24-bit</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Frequency Range</span>
                        <span className="text-white font-semibold">0.5-100 Hz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Impedance</span>
                        <span className="text-white font-semibold">&lt;5 kΩ</span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Output */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Audio Output</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Speaker Type</span>
                        <span className="text-white font-semibold">Piezoelectric</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Frequency Response</span>
                        <span className="text-white font-semibold">200-8000 Hz</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Max Volume</span>
                        <span className="text-white font-semibold">85 dB</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400">Voice Synthesis</span>
                        <span className="text-white font-semibold">Neural TTS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Languages</span>
                        <span className="text-white font-semibold">English, German</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Environmental Specifications */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Environmental Specifications</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-emerald-400 font-semibold mb-2">Operating Temperature</p>
                      <p className="text-slate-300">-10°C to 50°C</p>
                    </div>
                    <div>
                      <p className="text-emerald-400 font-semibold mb-2">Storage Temperature</p>
                      <p className="text-slate-300">-20°C to 60°C</p>
                    </div>
                    <div>
                      <p className="text-emerald-400 font-semibold mb-2">Humidity Range</p>
                      <p className="text-slate-300">10-90% RH</p>
                    </div>
                  </div>
                </div>

                {/* Certification */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Certifications & Compliance</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span>
                      <span>Biocompatibility: ISO 10993</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span>
                      <span>Electromagnetic: FCC Part 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span>
                      <span>Safety: IEC 60601-1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span>
                      <span>Animal Welfare: AAALAC Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Datapad>

          {/* Back Link */}
          <div className="text-center mt-16">
            <a href="/technology" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
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
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-emerald-500/20 hover:bg-emerald-500/30 rounded-full p-2 border border-emerald-500/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
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
