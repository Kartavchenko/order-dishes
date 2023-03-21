export default (async function sendResults(values) {

  const options = {
  method: "POST",
  body: JSON.stringify(values),
  headers: {
    "Content-Type": "application/json",
  },
  };

  try {
    const result = await fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", options);
    return await result.json();
  } catch (error) {
    console.log(error)
  }
});