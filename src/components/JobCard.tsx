
import React from 'react';
import "./JobCard.css"

interface JobCardProps {
  company: string;
  logoUrl: string;
  jobDescription: {
    title: string;
    details: string;
    salary: bigint;
    hours: bigint;
  };
}

const JobCard: React.FC<JobCardProps> = ({ company, logoUrl, jobDescription }) => {
  return (
    <div className="mainCard">
    
      <div className="pictureSquare">
        {/* Use img tag and pass the logoUrl */}
        <img src={logoUrl} alt={`${company} Logo`} className="squareImage" />
      </div>
      <div className="textArea">
        <div className="div1">
          <h1 className="jobTitle">{jobDescription.title}</h1>
        </div>
        <div className="div2">
          <p className="JobResume">{jobDescription.details}</p>
        </div>
        <div className="div3">
          {/* Convert BigInt to string for display */}
          <button className="Salary">${jobDescription.salary.toString()}</button>
          <button className="Hours">{jobDescription.hours} hours/week</button>
        </div>
        
      </div>
    </div>
  );
};

export default JobCard;

