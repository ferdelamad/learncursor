export default function InstallationPage() {
  return (
    <div className="max-w-3xl mx-auto py-4 md:py-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
      Installation
    </h1>
    
    <div className="prose prose-invert max-w-none prose-base md:prose-lg">
      <p className="text-white/90 leading-relaxed mb-4 md:mb-8 bg-white/[0.03] rounded-xl p-4 md:p-6 backdrop-blur-sm text-sm md:text-base">
        Visit <a href="https://cursor.so/downloads" className="text-violet-300 hover:text-violet-400 transition-colors">cursor.so/downloads</a> and click the download button for your operating system.
        <br />
        For M1+ Macs download the <strong>arm64</strong> version.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Installation Steps
      </h2>

      <div className="space-y-4">
        <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Mac</h3>
          <p className="text-white/80 text-sm md:text-base">
            Open the downloaded .dmg file and drag Cursor to your Applications folder
          </p>
        </div>

        <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Windows</h3>
          <p className="text-white/80 text-sm md:text-base">
            Run the .exe installer and follow the prompts
          </p>
        </div>

        <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
          <h3 className="text-lg md:text-xl font-semibold text-violet-300 mb-2 md:mb-3">Linux</h3>
          <p className="text-white/80 text-sm md:text-base">
            Use the .AppImage file or follow distribution-specific instructions
          </p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        First Launch
      </h2>

      <div className="bg-white/[0.02] rounded-xl p-4 md:p-6 backdrop-blur-sm">
        <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">When you first open Cursor, you'll need to:</p>
        <ul className="list-disc list-inside space-y-1 md:space-y-2 text-white/80 ml-2 md:ml-4 text-sm md:text-base">
          <li>Create a Cursor account or sign in</li>
          <li>Select your preferred AI model (Claude or GPT-4)</li>
          <li>Install any VS Code extensions you regularly use</li>
        </ul>
      </div>
    </div>
  </div>
  )
} 