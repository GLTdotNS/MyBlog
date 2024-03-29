import Image from "next/image";
import moment from "moment";
4;
import logo from "../../../styles/assets/footer-bg.jpg";
export default function Comments({ comments = [] }) {
  return (
    <div className="initial-post  " style={{ marginTop: "20%" }}>
      {comments.length < 1 ? (
        <>
          <h1>Коментари: </h1>
          <br />
          <p>Все още няма коментари по темата</p>
        </>
      ) : (
        <h1>Коментари:</h1>
      )}
      {comments?.map(({ _id, _createdAt, name, email, comment }) => (
        <div
          className=""
          key={comment?._id}
          style={{
            marginTop: "10%",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "30px",
            padding: "5px",
          }}
        >
          <h3 style={{ color: "#4ba6e7" }}>
            <Image
              src={logo}
              alt="image of user"
              width={50}
              height={50}
              style={{ borderRadius: "100%" }}
            />{" "}
            {name}
          </h3>
          <h4 style={{ color: "#A9A9A9", float: "right", fontWeight: "400" }}>
            {" "}
            {moment(_createdAt).fromNow()}
          </h4>
          <br />
          <p style={{ color: "black", padding: "5px" }}>{comment}</p>
        </div>
      ))}
    </div>
  );
}
