/* TODO:
Complete the following API functions to fetch user's data and its unmasked phone number.
Each request should be authenticated with a Bearer token of 'WellTheoryCode2023'.
Use the default fetch API.
*/
const CONFIG = {
  headers: {
    Authorization: 'Bearer WellTheoryCode2023'
  }
}


export const me = async () => {
  const response = await fetch('https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me', CONFIG)
  return response.json()
};

export const phone = async () => {
  const response = await fetch('https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone', CONFIG)
  return response.json()
};

export const createSupportTicket = async (
  { title, message }: {title: string, message: string}
) => {
  // POST 
  // body: { title: string; message: string }
  const response = await fetch('https://us-central1-internals-358114.cloudfunctions.net/react-challenge/support-tickets',{
    ...CONFIG,
    method: 'POST',
    body: JSON.stringify({
      title, message
    })
  } )
  return response
};
