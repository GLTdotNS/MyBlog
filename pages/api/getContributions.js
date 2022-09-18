export default function handler (req, res) {
    const headers = {
    
      'Authorization': process.env.NEXT_PUBLIC_GIT_HUB,
    }
    const body = { "query": `query 
    {viewer  {
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }` }
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



