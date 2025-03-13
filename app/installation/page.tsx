export default function InstallationPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
    <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
      Installation
    </h1>
    
    <div className="prose prose-invert max-w-none prose-lg">
      <p className="text-white/90 leading-relaxed mb-8 bg-white/[0.03] rounded-xl p-6 backdrop-blur-sm">
        Visit <a href="https://cursor.so/downloads" className="text-violet-300 hover:text-violet-400 transition-colors">cursor.so/downloads</a> and click the download button for your operating system.
        <br />
        For M1+ Macs download the <strong>arm64</strong> version.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Installation Steps
      </h2>

      <div className="space-y-4">
        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-xl font-semibold text-violet-300 mb-3">Mac</h3>
          <p className="text-white/80">
            Open the downloaded .dmg file and drag Cursor to your Applications folder
          </p>
        </div>

        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-xl font-semibold text-violet-300 mb-3">Windows</h3>
          <p className="text-white/80">
            Run the .exe installer and follow the prompts
          </p>
        </div>

        <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-xl font-semibold text-violet-300 mb-3">Linux</h3>
          <p className="text-white/80">
            Use the .AppImage file or follow distribution-specific instructions
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        First Launch
      </h2>

      <div className="bg-white/[0.02] rounded-xl p-6 backdrop-blur-sm">
        <p className="text-white/80 mb-4">When you first open Cursor, you'll need to:</p>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>Create a Cursor account or sign in</li>
          <li>Select your preferred AI model (Claude or GPT-4)</li>
          <li>Install any VS Code extensions you regularly use</li>
        </ul>
      </div>
    </div>
  </div>
  )
} 