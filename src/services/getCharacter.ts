import baseUrl from './baseUrl'

export async function getCharacter (id : string | undefined) {
  const res = await baseUrl.get(`/character/${id}`);  
  return res.data;
}