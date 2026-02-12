function App() {
  const steps = [
    {
      id: 1,
      title: 'Download Visual Studio Code',
      description: 'Download and install VS Code from the official website.',
      link: 'https://code.visualstudio.com/',
    },
    {
      id: 2,
      title: 'Download Node.js LTS',
      description:
        'Download the Long-Term Support (LTS) version of Node.js for stable development.',
      link: 'https://nodejs.org/',
    },
    {
      id: 3,
      title: 'Download Git',
      description:
        'Download and install Git for version control and repository management.',
      link: 'https://git-scm.com/',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-7xl font-black text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Prepare to Vibe Code!
        </h1>
        <p className="text-center text-gray-800 text-2xl mb-16 font-bold">
          Follow these steps to set up your development environment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-600"
            >
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-2xl flex-shrink-0">
                  {step.id}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    {step.description}
                  </p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 font-black text-3xl"
                    style={{ color: '#FFFFFF' }}
                  >
                    Download →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
