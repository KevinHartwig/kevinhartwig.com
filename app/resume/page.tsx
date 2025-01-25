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
                <h3 className="text-xl font-semibold text-white">Staff Site Reliability Engineer</h3>
                <span className="text-[#ff8f5d]">2022 - 2024</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Senior Site Reliability Engineer</h3>
                <span className="text-[#ff8f5d]">2020 - 2022</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Hinge Health</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led cloud migration initiative from PaaS provider (Aptible) to AWS.</li>
                <li>Designed AWS organizations and security architecture to conform to AWS best practices.</li>
                <li>Established incident committee to drive incident management improvements company wide including parterning with engineering leadership to design and implement a company incident management process, develop and run incident management training, build out of monitoring and alerting integrations between observability platforms and PagerDuty.</li>
                <li>Led project to redact PHI data from service logs enabling offshore employees to support production.</li>
                <li>Led multiple observability projects including onboarding of SumoLogic and migration from New Relic to Datadog.</li>
                <li>Built organizational AWS IAM strategy using Google Workspace, AWS SSO and Terraform.</li>
                <li>Partnered with engineering, security, compliance on defining and implementing infrastructure to support organizational initiatives.</li>
                <li>Collaborated with engineering leadership to define and document best practices related to operational excellence including code freezes, on-call expectations, scheduled maintenance, PHI logging standards.</li>
                <li>Expanded SRE team from 2 engineers to 7 including hiring of management and Director of Infrastructure.</li>
                <li>Provided 24/7 hour on-call support to meet 99.9% uptime SLAs.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Senior DevOps Engineer</h3>
                <span className="text-[#ff8f5d]">2019 - 2020</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">DevOps Engineer</h3>
                <span className="text-[#ff8f5d]">2018 - 2019</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">moovel North America</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led project to automate deployment of service level alerting through New Relic at service build time.</li>
                <li>Built out infrastructure monitoring and alerting solution using New Relic Infrastructure.</li>
                <li>Created Python tool to export and import Rundeck jobs to support deployment to multiple environments.</li>
                <li>Developed and maintained service and infrastructure deployment tooling implemented in Bash, Python, CloudFormation and Ansible.</li>
                <li>Created tooling to deploy new Splunk Indexers and implemented hot/cold storage strategy to reduce costs.</li>
                <li>Maintained and updated infrastructure built in AWS utilizing EC2, ECS, RDS and other technologies.</li>
                <li>Partnered with Product, Account Management and Engineering teams to plan and deploy new features and ensure customer needs are met.</li>
                <li>Led ticket grooming and daily stand up meetings.</li>
                <li>Provided 24 hour on-call support on a rotational basis.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Principal Software Engineer</h3>
                <span className="text-[#ff8f5d]">2014 - 2018</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">XPO Logistics</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">         

                <li>Led project to migrate document repository of 750 million documents from local optical storage to Amazon S3 storage.</li>
                <li>Designed and developed a solution to migrate all documents in our company's contract management solution (Filenet), into our document management system.</li>
                <li>Led project to modernize internal SOAP web services to secure restful web services.</li>
                <li>Led project to migrate existing VB6 applications and common libraries to C#.</li>
                <li>Consulted with process analysts and management to design, prioritize and cost projects.</li>
                <li>Consulted with business partners on integration and best practices for using the document management system.</li>
                <li>Evaluated and implemented various third-party libraries used in document processing, including document scanning, image manipulation/compression, and barcode recognition.</li>
                <li>Integrated standard and custom TWAIN functions into existing document scanning software.</li>
                <li>Developed scripts and automation tools to assist in the deployment of applications.</li>
                <li>Provided high level support to internal business partners, external vendors and customers.</li>
                <li>Trained and mentored junior developers.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Senior Software Engineer</h3>
                <span className="text-[#ff8f5d]">2011 - 2014</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <span className="text-[#ff8f5d]">2008 - 2011</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Con-way Enterprise Services</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">         
                <li>Designed and developed multiple SOAP web services, which communicate with internal C applications and databases using IPC, HTTP/WebDAV and JDBC.</li>
                <li>Developed application to automatically detect and redact sensitive customer information from delivery manifest documents utilizing OCR and barcode recognition software.</li>
                <li>Created a custom benefits workflow solution, which allows users to classify and review employee documents related to the yearly open-enrollment process.</li>
                <li>Evaluated and integrated third-party barcode recognition software into an existing software framework.</li>
                <li>Updated existing VB6, .NET and Java applications and their installation packages to be Windows 7 and Windows XP compliant.</li>
                <li>Developed Java application to update document indexing information triggered off of an XML request received from a Tibco messaging service (JMS).</li>
                <li>Developed C application to start and continuously monitor unix applications status based on configuration information stored in a DB2 database.</li>
                <li>Collaborated in the design and development of a Java build script template utilizing Ant.</li>
                <li>Tested and supported high volume document scanners and cameras used as imaging devices.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">Software Developer</h3>
                <span className="text-[#ff8f5d]">2006 - 2008</span>
              </div>
              <h4 className="text-lg text-gray-400 mb-2">Department of Defense - Naval Undersea Warfare Center</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">         
                <li>Worked as a part of a team to develop, test, and support the United States Navys Carrier Vessel Tactical Support Center (CV-TSC) and Undersea Warfare Decision Support System (USW-DSS).</li>
                <li>Designed and developed Java application to simulate the deployment of sonobuoys to be used in testing and readiness activities.</li>
                <li>Performed on-site installations of the USW-DSS software.</li>
                <li>Provided on-site, phone and email support to customers and other support personnel.</li>
                <li>Performed validation testing of both software and hardware components for deployment and readiness exercises.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#ff6b2b]">Skills</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AWS', 'Terraform', 'Kubernetes', 'GitHub', 'Datadog/New Relic', 
                  'Splunk/SumoLogic', 'PagerDuty', 'Docker', 'Jira', 'Postgres'
                ].map((technologies) => (
                  <span key={technologies} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {technologies}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java', 'C#', 'C/C++', 'Bash', 'Python', 'Ruby'
                ].map((languages) => (
                  <span key={languages} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {languages}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'macOS', 'Windows', 'Linux', 'Unix'
                ].map((os) => (
                  <span key={os} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {os}
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
              <span className="text-[#ff8f5d]">2006</span>
            </div>
            <h4 className="text-lg text-gray-400">Oregon State University - Corvallis OR</h4>
          </div>
        </div>
      </div>
    </div>
  );
}