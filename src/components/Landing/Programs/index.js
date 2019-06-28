import React from 'react';


const programsHeader = () => (
  <div className="programs__header">
    <h3>Our Programs</h3>
  </div>
);

const programCard = state => (
  <div className={state}>
    <div className="programs__card-container__card__img" />
    <div className="programs__card-container__card__title">
      Art Box
    </div>
    <div className="programs__card-container__card__separator" />
    <div className="programs__card-container__card__content">
      Art box is a visual art making initiative that involves making of visual art, décor, ornamentation through the use of recycled material mainly glass.
    </div>
  </div>
);

const Programs = () => (
  <div className="programs">
    {programsHeader()}
    <div className="programs__card-container">
      {programCard('programs__card-container__card--farthest')}
      {programCard('programs__card-container__card')}
      {programCard('programs__card-container__card--active')}
      {programCard('programs__card-container__card')}
    </div>
  </div>
);

export default Programs;
