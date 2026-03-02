import { json } from '@sveltejs/kit';
import { fetchAllNews } from '$lib/api/news';  
export async function GET() {
  const news = await fetchAllNews();  
  return json({ news });  
}
