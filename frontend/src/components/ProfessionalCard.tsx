import React from 'react';
import { ExperienceType } from '../types/ExperienceType';

const ProfessionalCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  const { timePeriod: { start, end }, employer, lastRole, roleDescription, skills } = experience;
  return (
    <div>
      <div>{start.toUpperCase()} - {end.toUpperCase()}</div>
      <div>
        <div>{lastRole} - {employer}</div>
        <div>{roleDescription}</div>
        <div>
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
