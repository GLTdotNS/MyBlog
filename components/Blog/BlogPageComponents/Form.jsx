import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Admin from "../../Admin/admin";
export default function Form({ _id }) {
  const [succes, setsucces] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [comment, setcomment] = useState("");

  const { handleSubmit } = useForm();

  const refreshData = async (e) => {
    router.replace(router.asPath);
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
    const toastId = toast.loading();

    try {
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      }).then(() => {
        setName("");
        setcomment("");
        setsucces(true);
        toast.remove(toastId);
      });
    } catch (err) {}
  };

  return (
    <>
      {succes && (
        <Admin message={"Коментарът Ви е получен и ще бъде разгледан скоро."} />
      )}
      {!succes && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrap wrapper">
            <h2>Остави коментар:</h2>
            <div className="commentform" style={{ padding: "5%" }}>
              <div className="field small">
                <label htmlFor="name">Име</label>
                <input
                  value={name}
                  id="name"
                  type="text"
                  placeholder="Име"
                  onChange={(e) => setName(e.target.value.trim())}
                />
              </div>

              <div className="field large ">
                <label htmlFor="comment">Коментар </label>
                <textarea
                  value={comment}
                  id="comment"
                  onChange={(e) => setcomment(e.target.value.trimStart())}
                  placeholder="Коментар..."
                ></textarea>
              </div>
            </div>

            {name && comment ? (
              <button
                className="loadmore-btn  small"
                onClick={handleSubmit(onSubmit)}
              >
                Публикувай
              </button>
            ) : (
              <button
                style={{ opacity: "0.4", cursor: "not-allowed" }}
                className="loadmore-btn  small"
                onClick={() =>
                  toast(
                    "Имате непопълнени полета. Всички полета са задължителни !",
                    {
                      position: "bottom-center",
                      style: {
                        width: "300px",
                        height: "100",
                        padding: "5px",
                        color: "#713200",
                      },
                      iconTheme: {
                        primary: "wheat",
                        secondary: "blue",
                      },
                    }
                  )
                }
              >
                Публикувай
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
}
