export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
            <div className="p-6">
              <p className="text-sm text-[#ff8f5d] mb-2">Coming Soon</p>
              <h2 className="text-xl font-semibold mb-2 text-white">Add your first project</h2>
              <p className="text-gray-300">
                Showcase your technical projects and achievements here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}