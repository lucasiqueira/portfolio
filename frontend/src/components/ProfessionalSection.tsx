import React from 'react'
import { ExperienceType } from '../types/ExperienceType'
import ProfessionalCard from './ProfessionalCard'

const ProfessionalSection: React.FC<{experiences: ExperienceType[]}> = ({experiences}) => {
  return (
    <section className="about-section-content">
      {
        experiences.map((experience: ExperienceType, index: number) => {
          if (JSON.parse(experience.show)) {
            return (
              <ProfessionalCard key={index} experience={experience} />
            )
          }
        })
      }
    </section>
  )
}

export default ProfessionalSection;
