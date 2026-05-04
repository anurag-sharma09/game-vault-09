import fs from 'fs';

let content = fs.readFileSync('src/data/siteData.js', 'utf-8');

const imageMap = {
  action: '/images/games/action_game_1777832899430.png',
  fps: '/images/games/fps_game_1777832939474.png',
  indie: '/images/games/indie_game_1777832999890.png',
  'open-world': '/images/games/open_world_game_1777833015156.png',
  racing: '/images/games/racing_game_1777832957397.png',
  rpg: '/images/games/rpg_game_1777832923045.png',
  sports: '/images/games/sports_game_1777832986020.png',
  strategy: '/images/games/strategy_game_1777832972711.png'
};

const games = content.match(/\{\s*title: [\s\S]*?featureTag: '.*?'\s*,?\s*\}/g);

if (games) {
  let newContent = content;
  for (const gameStr of games) {
    let assignedImage = imageMap['action']; // default

    const categoriesMatch = gameStr.match(/categories: \[(.*?)\]/);
    if (categoriesMatch) {
      const categories = categoriesMatch[1].replace(/'/g, '').split(',').map(c => c.trim());
      for (const cat of categories) {
        if (imageMap[cat]) {
          assignedImage = imageMap[cat];
          break; // take the first matched category image
        }
      }
    }

    const modifiedGameStr = gameStr.replace(/(featureTag: '.*?')(,)?(\s*\})/, `$1,\n    image: '${assignedImage}'$3`);
    newContent = newContent.replace(gameStr, modifiedGameStr);
  }

  fs.writeFileSync('src/data/siteData.js', newContent, 'utf-8');
  console.log('Successfully updated siteData.js with images!');
} else {
  console.log('Failed to find games in siteData.js');
}