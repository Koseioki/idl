// This page is right under "research-projects", and shows the overview of the research project, including the background and goals. It also has a link to "about-this-project" page, which will show the details of the research project, including the methods and findings.

import { H1 } from "../../components/header-and-footer/H1";
import { NavLink, useParams } from "react-router-dom";
import projectData from "../../data/research-projects/research-projects.json";
import { SideNav } from "../../components/global/SideNav";
import "./ResearchProjectPage.css";
export function ProjectOverview() {
  const { slug } = useParams();
  const project = projectData.find(
    (proj) => proj.slug === slug || proj.id === slug,
  );

  return (
    <div className="research-project-page">
      <main id="main-content">
        <H1>{project?.title}</H1>

        <h2>About this research</h2>
        <p>
          This project looks at different forms of marginalisation and how they
          affect people in digital society.
        </p>
        <p>
          It also explores how these forms connect with each other and influence
          one another.
        </p>

        <h2>Keywords</h2>
        <ul>
          <li>intersectionality</li>
          <li>digital inclusion</li>
          <li>digital inequality</li>
          <li>social exclusion</li>
          <li>universal design</li>
        </ul>

        <h2>Project Duration</h2>
        <p>1 May 2026 to 28 February 2027, with the possibility of extension.</p>
        <p>The results will be shared as the research continues.</p>

        <h2>Results</h2>
        <NavLink to={`/research-projects/${slug}/types-of-marginalisation`}>
          View Results
        </NavLink>
      </main>
      <SideNav />
    </div>
  );
}
