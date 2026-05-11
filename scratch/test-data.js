
import { games } from '../src/data/siteData.js';

console.log('Total games:', games.length);
if (games.length > 0) {
    console.log('First game slug:', games[0].slug);
    console.log('GTA VI slug:', games.find(g => g.title.includes('VI'))?.slug);
}
