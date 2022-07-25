export default function handler (req, res) {
    const headers = {

      'Authorization': `bearer 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`,
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



