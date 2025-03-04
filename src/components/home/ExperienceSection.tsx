
import { BarChart, FileText, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-dark-blue">My Journey So Far</h2>
        <div className="max-w-3xl mx-auto">
          {/* Nomura Experience */}
          <div className="flex mb-12">
            <div className="mr-6">
              <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                <BarChart className="h-6 w-6 text-portfolio-blue" />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-portfolio-dark-blue">Manager, Transfer Pricing</h3>
                <span className="mx-3 text-portfolio-gray">•</span>
                <span className="text-portfolio-gray">Nomura</span>
              </div>
              <p className="text-sm text-portfolio-gray mb-4">Apr 2018 - Present</p>
              <div className="space-y-2 text-portfolio-dark-gray mb-4">
                <p>• Transformed team efficiency by building 30+ complex Alteryx workflows that automated repetitive tasks</p>
                <p>• Designed interactive Power BI dashboards that turned raw data into actionable insights for scenario planning</p>
                <p>• Guided the implementation of Nomura's Transfer Pricing policies across Global Markets and Investment Banking</p>
                <p>• Led monthly cross-border interaction analyses that directly impacted financial reporting and settlements</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="pill">Alteryx</span>
                <span className="pill">PowerBI</span>
                <span className="pill">Transfer Pricing</span>
                <span className="pill">Data Analytics</span>
              </div>
            </div>
          </div>

          {/* KPMG Experience */}
          <div className="flex mb-12">
            <div className="mr-6">
              <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                <FileText className="h-6 w-6 text-portfolio-blue" />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-portfolio-dark-blue">Senior Executive, Direct Tax</h3>
                <span className="mx-3 text-portfolio-gray">•</span>
                <span className="text-portfolio-gray">KPMG</span>
              </div>
              <p className="text-sm text-portfolio-gray mb-4">Sept 2015 - Sept 2017</p>
              <div className="space-y-2 text-portfolio-dark-gray mb-4">
                <p>• Orchestrated tax return filing for diverse financial entities, ensuring accuracy and compliance</p>
                <p>• Secured client tax refunds through expert handling of withholding tax returns</p>
                <p>• Delivered practical advisory services on complex tax matters, translating technical jargon into clear guidance</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="pill">Tax Filing</span>
                <span className="pill">Tax Advisory</span>
                <span className="pill">Client Communication</span>
              </div>
            </div>
          </div>

          {/* KPMG Articleship */}
          <div className="flex">
            <div className="mr-6">
              <div className="flex items-center justify-center w-12 h-12 bg-portfolio-light-blue/30 rounded-full">
                <Award className="h-6 w-6 text-portfolio-blue" />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-portfolio-dark-blue">Articleship Experience</h3>
                <span className="mx-3 text-portfolio-gray">•</span>
                <span className="text-portfolio-gray">KPMG</span>
              </div>
              <p className="text-sm text-portfolio-gray mb-4">Sept 2012 - Sept 2015</p>
              <div className="space-y-2 text-portfolio-dark-gray mb-4">
                <p>• Cut my teeth as a Staff Accountant in Direct Taxation, specializing in the BFSI Segment</p>
                <p>• Contributed to technical research and appeal filings, developing a strong foundation in tax analysis</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="pill">Direct Taxation</span>
                <span className="pill">BFSI</span>
                <span className="pill">Technical Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
