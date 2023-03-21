import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
export default function Form({ _id }) {
  const [formData, setFormData] = useState();

  const router = useRouter();

  const [name, setName] = useState("");
  const [comment, setcomment] = useState("");

  const { handleSubmit } = useForm();

  const refreshData = async (e) => {
    router.prefetch(router.asPath);
  };

  const onSubmit = async (e) => {
    if (!name || !comment) {
      return;
    }
    let data = {
      name,
      _id,
      comment,
    };
    setFormData(data);

    try {
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      }).then(() => {
        setName("");
        setcomment("");
        refreshData();
      });
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap wrapper">
        <h2>Остави коментар:</h2>
        <div className="commentform">
          <div className="field small">
            <label htmlFor="name">Име</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>

          <div className="field large ">
            <label htmlFor="comment">Коментар </label>
            <textarea
              id="comment"
              onChange={(e) => setcomment(e.target.value.trim())}
              placeholder="Your comment"
            ></textarea>
          </div>
        </div>
        {name && comment ? (
          <button className="btn  small" onClick={handleSubmit(onSubmit)}>
            Публикувай
          </button>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}
