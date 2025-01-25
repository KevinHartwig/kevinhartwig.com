import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Resume</h1>
        
        {/* Experience */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#ff6b2b]">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <span className="text-[#ff8f5d]">2018 - Present</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Northrop Grumman</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Develop and maintain software for mission critical applications</li>
                <li>Collaborate with team members to design and implement new features</li>
                <li>Participate in code reviews and provide constructive feedback</li>
                <li>Mentor junior developers and interns</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <span className="text-[#ff8f5d]">2017 - 2018</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Leidos</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained software for government applications</li>
                <li>Collaborated with team members to design and implement new features</li>
                <li>Participated in code reviews and provided constructive feedback</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Software Engineer Intern</h3>
                <span className="text-[#ff8f5d]">2016 - 2017</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Leidos</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained software for government applications</li>
                <li>Collaborated with team members to design and implement new features</li>
                <li>Participated in code reviews and provided constructive feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#ff6b2b]">Skills</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Node.js', 'Next.js', 'Spring Boot', 'Git',
                  'Docker', 'Jenkins', 'AWS', 'Linux'
                ].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#ff6b2b]">Education</h2>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
              <span className="text-[#ff8f5d]">2018</span>
            </div>
            <h4 className="text-lg text-gray-400">Oregon State University - Corvallis OR</h4>
          </div>
        </div>
      </div>
    </div>
  );
}