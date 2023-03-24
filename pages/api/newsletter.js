export default async function handler(req, res) {
  if (req.method === "PUT") {
    fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        contacts: [{ email: `${req.body}` }],
        list_ids: [process.env.NEXT_PUBLIC_SENDGRIDID],
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID}`,
        },
      }
    )
      .then((result) => {
        res.status(200).send({
          message:
            "Your email has been succesfully added to the mailing list. Welcome 👋",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Oups, there was a problem with your subscription, please try again or contact us",
        });
      });
  }
}
