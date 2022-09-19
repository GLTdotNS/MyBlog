import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { GiShadowFollower } from "react-icons/gi"
import { RiGitRepositoryLine } from "react-icons/ri"
import 'react-loading-skeleton/dist/skeleton.css'

const GitHub = ({ github, contributions }) => {

  const openGit = () => {
    window.open("https://github.com/GLTdotNS?tab=repositories")
  }


  if (!github || !contributions) {

    return (
      <div className='columns posts'>

        <h1 className="p__opensans links  title">Me @ GitHub</h1>
        <hr />

        <div className='me_on_github' style={{ padding: "0.3rem", backgroundColor: "#333" }}>

          <SkeletonTheme baseColor="#202020" highlightColor="#444" >
            <p style={{ float: "left", marginLeft: "50%" }}>
              <Skeleton width={90} height={90} borderRadius={100} /></p>
            <p><Skeleton /></p>
            <br />
            <p><Skeleton /></p>
            <br />
            <p><Skeleton /></p>
          </SkeletonTheme >

        </div>



      </div >
    )
  };

  return (

    <div className="columns">
      <div className='me_on_github'>
        <div style={{ borderBottom: "1px solid #333", zIndex: "0 !important", width: "100%" }}>
          <h3 className="p__opensans">Me @ GitHub</h3>
        </div>
        <img width={200} height={200} src={github.avatar_url} alt="Canis Lupus" className='gitHubProfile' />


        <p> <RiGitRepositoryLine  style={{marginRight: "2%"}}/>
          Repositories
          <span
            style={{
              backgroundColor: "#333",
              padding: "5px",
              borderRadius: "2em",
              marginLeft: "2%",
              fontSize: "12px",
              fontWeight: 500
            }}>
            {github.public_repos}
          </span>
        </p>
        <p> <GiShadowFollower /> <span>{github.followers} </span>
          (My only one fan) * <span>{github.following}  follower </span>
        </p>
      </div>
        {contributions ? <p style={{fontSize: "12px" , marginBottom: "2%"}}><span> {contributions} contributions in the last year</span></p> : ""}
      <img width={317} height={112} src="https://ghchart.rshah.org/HEXCOLORCODE=216e39/GLTdotNS" alt="Name Your Github chart" />

      <button className='btnGit' onClick={() => openGit()}>Go to Repositories</button>
    </div>
  )
}

export default GitHub
