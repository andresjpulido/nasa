export async function getAPOD() 
{
    console.log("ok")
  let response = await fetch(`https://wapi.nasa.gov/planetary/apod?api_key=RDoxqFAGvLbPBsCbMMPLsfBEV22Ud9xbtINCWBcO`);
  let data = await response.json() 
  return data;
}

export async function getNeoFeed(){
    let url = 'https://wapi.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=RDoxqFAGvLbPBsCbMMPLsfBEV22Ud9xbtINCWBcO'
    
    let response = await fetch(url);
    let data = await response.json() 
    console.log(data)
    return data;
     
}
 
 