fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log);