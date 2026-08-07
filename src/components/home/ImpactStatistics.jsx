import React from 'react';
import './ImpactStatistics.css';
import impactStatsImg from '../../assets/impact_stats.png';

function ImpactStatistics() {
  return (
    <section className="impact-statistics section">
      <div className="container">
        <div className="text-center mb-5">
         <div className="section-tag">OUR IMPACT</div>

<h2 className="section-title">
  Creating Lasting Change Through Community Action
</h2>

<p className="section-subtitle">
  Efe-Oghene Development Foundation works with communities, governments, development partners, and supporters to deliver sustainable solutions in education, WASH, healthcare, humanitarian response, research, and community empowerment across Nigeria.
</p>
        </div>
        <div className="impact-image-wrapper">
          <img
            src={impactStatsImg}
            alt="Efe-Oghene Development Foundation Impact Statistics"
            className="impact-stats-img"
            width="1712"
            height="716"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ImpactStatistics;
