import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
export default function Form({ _id }) {
  const [formData, setFormData] = useState();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [name, setName] = useState();
  const [comment, setcomment] = useState();

  const { register, handleSubmit, watch, errors } = useForm();

  const refreshData = async (e) => {
    router.replace(router.asPath);
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
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
        setIsSubmitting(false);
        setHasSubmitted(true);
        refreshData();
        setName("");
        setcomment("");
      });
    } catch (err) {
      setFormData(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap wrapper">
        <h2>Остави коментар:</h2>
        <div className="commentform">
          <div className="field small">
            <input
              value={name}
              id="name"
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value.trim())}
            />
            <label htmlFor="name">Име</label>
          </div>

          <div className="field large ">
            <textarea
              value={comment}
              id="comment"
              onChange={(e) => setcomment(e.target.value.trim())}
              placeholder="Your comment"
            ></textarea>
            <label htmlFor="comment">Коментар </label>
          </div>
        </div>
        {name && comment ? (
          <button
            className="btn  large"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Публикувай
          </button>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}
