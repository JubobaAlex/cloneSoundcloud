export async function getInitialDataMusicApi(url) {
    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 } 
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        
       
        if (data.results && Array.isArray(data.results)) {
            return data.results; 
        } else {
            console.warn('Unexpected API response structure');
            return [];
        }
    } catch(err) {
        console.error('Error fetching music data:', err);
        return [];
    }
}