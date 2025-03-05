// Education details
const education = [
  {
    degree: "Chartered Accountant",
    institution: "ICAI",
    date: "November 2015",
    score: "56%"
  },
  {
    degree: "CFA, Level 3",
    institution: "CFA Institute",
    date: "November 2021"
  },
  {
    degree: "B. Comm",
    institution: "R. A. Podar College, Mumbai University",
    date: "March 2014",
    score: "75%"
  }
];

const EducationSection = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-8 text-portfolio-dark-blue">Education Journey</h3>
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-light-blue"></div>
        
        {/* Timeline items */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-blue"></div>
              
              {/* Content - stacked on mobile, alternating sides on desktop */}
              <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-portfolio-light-gray hover-lift">
                    <h4 className="text-xl font-bold mb-1 text-portfolio-dark-blue">{edu.degree}</h4>
                    <p className="text-portfolio-gray">{edu.institution}</p>
                    <p className="text-sm text-portfolio-gray mb-2">{edu.date}</p>
                    {edu.score && (
                      <div className="mt-2 text-portfolio-blue font-medium">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
