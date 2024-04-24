// import fs from 'fs';

// const subdirectories = ['lightgreen-maple', 'green-winkheart', 'green-spearhead', 'green-longheart', 'green-long', 'green-lilypad', 'green-butterfly'];

// for (const subdirectory of subdirectories) {
//   const files = await fs.promises.readdir(`C:/Users/victo/Documents/OtherProgrammingProjects/korok-randomizer/src/assets/standing/faces/${subdirectory}`);

//   for (const file of files) {
//     const fromPath = `C:/Users/victo/Documents/OtherProgrammingProjects/korok-randomizer/src/assets/standing/faces/${subdirectory}/${file}`

//     const slice = file.slice(subdirectory.length + 1);
//     const toPath = `C:/Users/victo/Documents/OtherProgrammingProjects/korok-randomizer/src/assets/standing/faces/${subdirectory}/${slice}`
//     await fs.promises.rename( fromPath, toPath );
//     // console.log(JSON.stringify({
//     //   fromPath,
//     //   toPath,
//     //   slice
//     // }))
//   }
// }
