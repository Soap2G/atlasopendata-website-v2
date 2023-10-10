import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import atlasLogo from './ATLAS-logo.gif';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className="container">
        <div className="container-grid">
          <div className="container-column left">
            <div className="floating-box">
              <b>The <a href="https://atlas.cern/Resources/Opendata">ATLAS Collaboration</a>'s current approach on the release of datasets is intended for Education, 
              Training and Outreach activities around the World.</b>
              In order to fulfil that objective, the <a href="http://opendata.atlas.cern/">ATLAS Open Data project</a> was created.
            </div>
          </div>

          <div className="container-column right">
          <img src={atlasLogo} alt="ATLAS Logo" />
          </div>
        </div>

          <a href="http://opendata.atlas.cern/">The ATLAS Open Data project</a> aims to provide data and tools to high-school, masters and undergraduate students,
          as well as teachers and lecturers, to help educate them in physics analysis techniques used in experimental particle physics.  
          Sharing data collected by the <a href="https://atlas.cern/">ATLAS experiment</a> aims to generate excitement and enthusiasm for fundamental research,
          inspiring physicists of the future.<br/><br/>
          This site provides <b>introductory material and detailed information</b> for a wide audience about the ATLAS Open Datasets and their visualisation,
          the analysis frameworks and Jupyter notebooks, as well as the virtual machine usage instructions.
          
      </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation the ATLAS Open Data project.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
