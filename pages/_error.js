import { useRouter } from "next/router";

function Error({ statusCode }) {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",

        width: "100vw",
        display: "flex-box",
        position: "relative",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          position: "relative",
          top: "50%",
          fontFamily: "san-serif",
          fontWeight: "100",
        }}
      >
        {statusCode
          ? `${statusCode} page not found`
          : "An error occurred on client"}
      </h2>
      <button
        style={{
          position: "relative",
          top: "50%",
          backgroundColor: "#181818",
        }}
        className="btn"
        onClick={() => router.back()}
      >
        Go back
      </button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
