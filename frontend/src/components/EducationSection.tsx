import React from 'react';
import { EducationType } from '../types/EducationType';
import EducationCard from './EducationCard';

const FormationSection: React.FC<{education: EducationType[]}> = ({education}) => {
  return (
    <section>
      {
        education.map((course: EducationType, index: number) => {
          if (JSON.parse(course.show)) {
            return (
              <EducationCard key={index} course={course} />
            )
          }
        })
      }
    </section>
  )
}

export default FormationSection;
