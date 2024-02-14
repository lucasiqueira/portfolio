import React from 'react';
import { ExperienceType } from '../types/ExperienceType';

const ProfessionalCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  const { timePeriod: { start, end }, employer, lastRole, roleDescription, skills } = experience;
  return (
    <div className="experience-container">
      <div className="experience-date">{start.toUpperCase()} - {end.toUpperCase()}</div>
      <div>
        <div className="experience-title">{lastRole} - {employer}</div>
        <div className="experience-role-description">{roleDescription}</div>
        <div className="skills-experience-div">
          {
            skills.map((skill, index) => {
              return (
                <span key={index} className="skill-tag">{skill}</span>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
