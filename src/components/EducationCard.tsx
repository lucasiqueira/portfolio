import React from 'react';
import { EducationType } from '../types/EducationType';

const EducationCard: React.FC<{course: EducationType}> = ({course}) => {
  const { timePeriod: { start, end }, institution, courseTitle, description, skills } = course;
  return (
    <div className="experience-container">
      <div className="experience-date">{start.toUpperCase()} - {end.toUpperCase()}</div>
      <div>
        <div className="experience-title">{courseTitle} - { institution }</div>
        <div className="experience-role-description">{description}</div>
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
  )
}

export default EducationCard;
