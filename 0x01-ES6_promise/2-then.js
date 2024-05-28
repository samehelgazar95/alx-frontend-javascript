export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      return { status: 200, body: 'Success' };
    })
    .catch((err) => {
      return err;
    })
    .finally(() => console.log('Got a response from the API'));
}
