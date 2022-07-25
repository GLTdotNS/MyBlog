import ProjectsComponent from "../components/Projects/ProjectsComponent"
import GitHub from "../components/Blog/BlogPageComponents/GitHub"
import { useState, useEffect } from "react";

const Projects = () => {

  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    fetch(`/api/getGitHubInfo`)
      .then(response => response.json())
      .then(response => {
        setGithub(response.name)
      })

  }, [])
  useEffect(() => {

    const url = `/api/getContributions`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response.data.data)
        setContributions(response.data.data.viewer.contributionsCollection
          .contributionCalendar.totalContributions)
      })
  }, [])


  return (
    <div>
      <div className="leftcolumn">
        <GitHub github={github} contributions={contributions} />
      </div>
      <ProjectsComponent />
    </div>
  )
}


export default Projects
