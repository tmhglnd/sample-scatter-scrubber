
// 
// very fast search for audio-files with 
// fast-glob
// 
// install with $ npm i fast-glob
// 

const max = require('max-api');
const fg = require('fast-glob');

max.addHandler('load', (p) => { 
	let glob = '**/*.+(wav|WAV|aif|AIF|aiff|AIFF|mp3|MP3)';
	
	let files = fg.sync(p + glob);
	
	max.post(`found ${files.length} files`);
	max.outlet(files);
});
