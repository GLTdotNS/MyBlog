

const GitHub = ({github }) => {


  if ( !github) {

    return (
      <div className="spinner">
    
      </div>
    )
  };

  return (
              
    <div className="columns posts">
    <h1  className="p__opensans links me_on_github">Me @ GitHub</h1>
    <hr />
    
<div className='me_on_github' style={{padding: "0.3rem" , backgroundColor: "#333" , textAlign: "left"}}>
  
<img width={90} height={90} style={{borderRadius: "100%" , borderColor: "red !important" ,float:"right"}}
      src={github.avatar_url} alt="" />
    <p>Repositories: {github.public_repos}</p>
    <p>Followers: {github.followers}</p>
    {/* {contributions ? <p>Contributions: {contributions}</p> : ""} */}
</div>
 
    
  </div>
  )
}

export default GitHub
