import baseUrl from './baseUrl'

export async function getEpisode (episodesId : string) {
  const res = await baseUrl.get(`/episode/${episodesId}`);
  return res.data;
}