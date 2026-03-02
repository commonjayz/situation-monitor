//src/routes/api/data/+server.js
//方式2：纯原生 Response，不导入任何 SvelteKit 工具（最稳定）

import { fetchAllNews } from '$lib/api/news.js';

export async function GET() {
  try {
    const news = await fetchAllNews();
    
    return new Response(
      JSON.stringify({ news }), 
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch news', 
        details: error.message 
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
