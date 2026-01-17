import { useState } from 'react';

export default function TechnologyCCM01() {
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
              A non-invasive neural interface system that enables dogs to translate their thoughts and intentions into human speech—giving Henry the voice he deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Executive Summary */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🐕</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Henry's Voice</h2>
                <p className="text-emerald-400 font-mono text-sm">Developed by Kael Sorley, Neural Systems Architect</p>
              </div>
            </div>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The Canine Communication Module (CCM-01) is a <strong className="text-white">non-invasive neural interface system</strong> that enables dogs to translate their thoughts and intentions into human speech. The system was specifically developed for Henry, a Jack Russell Terrier aboard the Nova Ventis, to facilitate communication between animal and crew.
              </p>
              <p>
                Rather than forcing human language onto canine cognition, CCM-01 respects the natural thought patterns of dogs—translating intentions, emotions, and simple cognitive processes into speech that reflects Henry's authentic personality: fast, breathless, enthusiastic, and occasionally distracted by sausages.
              </p>
              <p className="text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <strong>"Henry deserves a voice. Let's build him one."</strong><br/>
                — Kael Sorley, Neural Systems Architect
              </p>
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                <div className="text-xs text-slate-400">Developer</div>
                <div className="text-sm font-semibold text-white">Kael Sorley</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                <div className="text-xs text-slate-400">Primary User</div>
                <div className="text-sm font-semibold text-white">Henry (Jack Russell)</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                <div className="text-xs text-slate-400">Version</div>
                <div className="text-sm font-semibold text-white">1.0 Prototype</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-2 border border-slate-700">
                <div className="text-xs text-slate-400">Battery Life</div>
                <div className="text-sm font-semibold text-white">72 hours</div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">How It Works</h3>
            
            {/* Neural Signal Acquisition */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('neural')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">Neural Signal Acquisition</h4>
                    <p className="text-sm text-slate-400">Non-invasive EEG sensors capture Henry's thoughts</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.neural ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedSections.neural && (
                <div className="px-6 pb-6 space-y-4 text-slate-300">
                  <p>
                    The CCM-01 uses <strong className="text-white">non-invasive EEG sensors</strong> integrated into a lightweight, comfortable collar. These sensors capture:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-emerald-400">Motor intentions</strong> — What does Henry want to do?</li>
                    <li><strong className="text-emerald-400">Emotional states</strong> — Excitement, fear, joy, concentration</li>
                    <li><strong className="text-emerald-400">Cognitive patterns</strong> — Problem-solving, memories, associations</li>
                  </ul>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-400">
                      <strong className="text-white">Technology:</strong> Micro-EEG arrays with biocompatible contact points, placed along the neck region where the nervous system is easily accessible. 12 micro-electrodes work in concert to capture neural activity.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* AI Translation */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('ai')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">Neural Decoding & AI Translation</h4>
                    <p className="text-sm text-slate-400">Canine Cognition Model interprets and generates speech</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.ai ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedSections.ai && (
                <div className="px-6 pb-6 space-y-4 text-slate-300">
                  <p>
                    Captured signals are transmitted in real-time to a <strong className="text-white">local AI processing unit</strong> (small enough to be integrated into the collar). This unit:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Decodes the neural patterns</li>
                    <li>Interprets the intention (e.g., "hunger", "alarm", "want to play")</li>
                    <li>Generates speech output that reflects Henry's personality</li>
                  </ol>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-400">
                      <strong className="text-white">AI Model:</strong> Based on a trained Canine Cognition Model (CCM), fed with data from hundreds of dogs. For Henry, the model was individually calibrated to capture his specific personality: nervous, enthusiastic, overeager.
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm text-emerald-300">
                      <strong>Example outputs:</strong><br/>
                      "Ryu! Ryu, I see the dates! They're... oh wait, that's a towel. No! THERE! The dates!"<br/>
                      "Wiener-Weasel reporting! HBot-2 is moving to the crate! I... I've got this!"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Speech Output */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('speech')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white">Speech Output</h4>
                    <p className="text-sm text-slate-400">Miniaturized speaker with high clarity</p>
                  </div>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.speech ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedSections.speech && (
                <div className="px-6 pb-6 space-y-4 text-slate-300">
                  <p>
                    Translated messages are output through a <strong className="text-white">miniaturized speaker</strong> integrated into the collar (1cm diameter, high clarity).
                  </p>
                  <p>
                    The voice is calibrated to sound appropriate for Henry's size and personality—fast-paced, slightly breathless, with lots of exclamation marks and self-interruptions.
                  </p>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-400">
                      <strong className="text-white">LED Indicator:</strong> Status display shows system state (green = active, red = error).
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Components */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Components</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-emerald-400 font-semibold">Component</th>
                    <th className="py-3 px-4 text-emerald-400 font-semibold">Description</th>
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
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
            <div className="space-y-4 text-slate-300">
              <p>The CCM-01 was developed with the following goals:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">•</span>
                  <div>
                    <strong className="text-white">Dignity:</strong> Henry retains his autonomy; the module only translates what he "wants" to say
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">•</span>
                  <div>
                    <strong className="text-white">Comfort:</strong> Lightweight design, no pressure on throat or spine
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">•</span>
                  <div>
                    <strong className="text-white">Authenticity:</strong> Translation reflects Henry's real personality, not an idealized version
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Limitations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">What the system CAN do:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Translate intentions ("I want food", "Alarm!", "Where is Ryu?")</li>
                  <li>✓ Communicate emotional states ("I'm excited", "I'm scared")</li>
                  <li>✓ Express simple thought processes ("That smells good", "I should be careful")</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">What the system CANNOT do:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✗ Complex abstract concepts (Henry doesn't think in philosophy)</li>
                  <li>✗ "Invent" language Henry doesn't understand (he speaks as he thinks)</li>
                  <li>✗ Read thoughts Henry isn't actively "sending"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ethics & Consent */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ethics & Consent</h3>
            <div className="space-y-4 text-slate-300">
              <p className="text-amber-300">
                <strong>Important:</strong> Henry cannot remove the module himself, therefore the crew must ensure:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Henry shows no signs of stress or discomfort</li>
                <li>• The module is regularly removed (e.g., at night, while sleeping)</li>
                <li>• Henry's privacy is respected (not every thought needs to be translated)</li>
              </ul>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mt-4">
                <p className="text-sm text-emerald-300">
                  <strong>Consent Indicator:</strong> The system has a "comfort sensor"—when Henry's stress level rises, the module automatically shuts down.
                </p>
              </div>
            </div>
          </div>

          {/* Future Developments */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Future Developments</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="text-lg font-semibold text-white mb-2">CCM-02 (planned)</h4>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Bi-directional communication (crew can "respond" directly to Henry)</li>
                  <li>• Enhanced emotion recognition</li>
                  <li>• Integration with Presence (Henry's status visible to everyone)</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white mb-2">CCM-03 (research)</h4>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>• Multi-species support (cats, birds, etc.)</li>
                  <li>• Memory playback (Henry can "remember" and talk about past events)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center pt-8">
            <a
              href="/technology"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Technology
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
