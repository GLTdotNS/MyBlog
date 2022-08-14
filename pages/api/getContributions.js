export default function handler (req, res) {
    const headers = {

      'Authorization':"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",
    }
    const body = { "query": "query {viewer {contributionsCollection {contributionCalendar {totalContributions}}}}" }
     fetch('https://api.github.com/graphql', {
      method: 'POST', body: JSON.stringify(body)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026'),

      headers: headers
    }).then((response) => {
      return response.json();
    }).then((response) => {

        res.status(200).json({ data: response})
    })

  }



