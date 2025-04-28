/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'iPhone Galaxy +1'
    })
  })
  .then(res => res.json())
  .then(console.log);