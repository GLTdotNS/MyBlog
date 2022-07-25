import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const GitHub = ({ github, contributions }) => {


  if (!github || !contributions) {

    return (
      <div className='columns posts'>

        <h1 className="p__opensans links me_on_github">Me @ GitHub</h1>
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

    <div className="columns posts">
      <h1 className="p__opensans links me_on_github">Me @ GitHub</h1>
      <hr />

      <div className='me_on_github' style={{ padding: "0.3rem", backgroundColor: "#333" }}>

        <img width={90} height={90} style={{ borderRadius: "100%", marginLeft: "50%" }}
          src={github.avatar_url} alt="" />
        <p>Repositories: <span>{github.public_repos}</span></p>
        <br />
        <p>Followers:  <span>{github.followers} </span>
          (My only one fan)
        </p>
        <br />
        {contributions ? <p>Contributions:  <span> {contributions}</span></p> : ""}
      </div>


    </div>
  )
}

export default GitHub
