import baseUrl from './baseUrl'

export async function getAllCharacter () {
  const res = await baseUrl.get('/character');
  return res.data;
}