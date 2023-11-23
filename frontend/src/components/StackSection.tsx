import React from 'react';
import aboutData from '../data/about.json';
import react from '../assets/images/stacks/react.svg';
import node from '../assets/images/stacks/node.svg';
import java from '../assets/images/stacks/java.svg';
import spring from '../assets/images/stacks/spring.svg';
import typescript from '../assets/images/stacks/typescript.svg';
import javascript from '../assets/images/stacks/javascript.svg';
import angular from '../assets/images/stacks/angular.svg';
import html from '../assets/images/stacks/html.svg';
import css from '../assets/images/stacks/css.svg';
import python from '../assets/images/stacks/python.svg';
import git from '../assets/images/stacks/git.svg';
import mysql from '../assets/images/stacks/mysql.svg';
import mongo from '../assets/images/stacks/mongo.svg';
import linux from '../assets/images/stacks/linux.svg';

import '../styles/components/StackSection.css';


const StackSection: React.FC = () => {
  const stackImages = {
    React: react,
    NodeJS: node,
    Java: java,
    Spring: spring,
    TypeScript: typescript,
    JavaScript: javascript,
    Angular: angular,
    HTML: html,
    CSS: css,
    Python: python,
    Git: git,
    MySQL: mysql,
    MongoDB: mongo,
    Linux: linux,
  };

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