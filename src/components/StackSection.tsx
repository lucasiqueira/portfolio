import React from 'react';
import aboutData from '../data/about.json';


import '../styles/components/StackSection.css';
import { stackImages } from '../utils/stackImage';


const StackSection: React.FC = () => {
  

  return (
    <section className="stacks-div">
      {
        aboutData.pt.skills.stacks.map((stack, index: number) => {
          return (
            <div className="stack-logo-container">
              <span key={index} className="stack-logo-title">{stack.title}</span>
              <img className="stack-logo" src={ stackImages[stack.title as keyof typeof stackImages] } alt={ stack.title } />
            </div>
          )
        })
      }
    </section>
  )
}

export default StackSection