
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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-light-blue"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-blue"></div>
              
              {/* Content - alternating sides */}
              <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
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
