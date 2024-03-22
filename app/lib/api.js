export default async function eventsApi(category) {
  const response = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`)
  .then((res) => res.json())
  
  return response
}
