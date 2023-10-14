import React from 'react';
import { EducationType } from '../types/EducationType';

const EducationCard: React.FC<{course: EducationType}> = ({course}) => {
  const { timePeriod: { start, end }, institution, courseTitle, description, skills } = course;
  return (
    <div>
      <div>{start.toUpperCase()} - {end.toUpperCase()}</div>
      <div>
        <div>{courseTitle}</div>
        <div>{institution}</div>
        <div>{description}</div>
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
  )
}

export default EducationCard;
