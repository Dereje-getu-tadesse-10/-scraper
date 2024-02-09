import https from 'node:https'

export const fetchHtml = async (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let html = ''
        res.on('data', function (chunk) {
          html += chunk
        })
        res.on('end', function () {
          resolve(html)
        })
      })
      .on('error', (error) => {
        reject(error)
      })
  })
