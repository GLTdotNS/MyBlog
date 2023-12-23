import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCopy } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
export const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },

    image: (props) => {
      const [modalOpen, setModalOpen] = useState(false);
      return (
        <div className={modalOpen ? "modal" : ""}>
          <figure
            style={{
              textAlign: "center",
              textAlign: "center",
              alignItems: "center",
            }}
            className={modalOpen ? "modal-content" : ""}
          >
            <Image
              width={modalOpen ? 1000 : 400}
              height={modalOpen ? 500 : 300}
              style={{ cursor: "pointer" }}
              src={`https://cdn.sanity.io/images/6kqgsbl2/production/${props.node.asset?._ref
                .replace("image-", "")
                .replace("-jpg", "")}.jpg`}
              onClick={() => setModalOpen(true)}
            />

            {props.node.caption && !modalOpen ? (
              <figcaption>{props.node.caption}</figcaption>
            ) : (
              ""
            )}
          </figure>
          {modalOpen ? (
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: "55px",

                left: "15px",
                zIndex: 100000,
                border: "none",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: "18px",
                color: "white",
                fontSize: "20px",
                borderRadius: "100%",
              }}
            >
              X
            </button>
          ) : (
            ""
          )}
        </div>
      );
    },

    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return (
          <blockquote
            style={{
              position: "relative",
              display: "block",
              width: "90%",
              margin: "auto",
              padding: "5%",
              justifyContent: "center",
              fontSize: "20px",
              textAlign: "left",
              alignItems: "center !important",
            }}
          >
            {" "}
            {props.children}
          </blockquote>
        );
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
    code: (props) => (
      <div
        style={{
          backgroundColor: "rgb(30, 30, 30)",
          borderRadius: "20px",
          padding: "5px",
        }}
      >
        <FaCopy
          style={{ float: "right", margin: "1%", cursor: "grab" }}
          size={17}
          color={"white"}
          onClick={() => copyToClipboard(props.node.code)}
        />
        <SyntaxHighlighter
          showLineNumbers={true}
          className="syntaxHighlighter"
          style={vs2015}
          language={props.node.language}
        >
          {props.node.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
  list: (props) =>
    props.type === "bullet" ? (
      <ul
        style={{
          width: "90%",
          lineHeight: "1.5rem",
          margin: "auto",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        {props.children}
      </ul>
    ) : (
      <ol>{props.children}</ol>
    ),
  listItem: (props) =>
    props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    ),
  marks: {
    strong: (props) => (
      <strong style={{ fontWeight: "bolder", marginTop: "5%" }}>
        {props.children}
      </strong>
    ),

    em: (props) => <em>{props.children}</em>,
    code: (props) => {
      return (
        <p
          style={{
            backgroundColor: "#DEDEDE",
            fontSize: "20px",
            width: "100%",
            textAlign: "left",
            borderRadius: "1px",
            padding: "2%",
          }}
        >
          <code> {props.children === "string" ? "d" : props.children}</code>
        </p>
      );
    },
  },
};
