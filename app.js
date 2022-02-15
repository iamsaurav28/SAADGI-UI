// const boxOutput = document.querySelectorAll(".showcase");
// boxOutput.forEach(box=>{
//     let code = box.innerHTML;
//         code = code.replaceAll("<", "&LT");
//         box.innerHTML = code;
// });


let codeBlocks = document.querySelectorAll("pre code");
codeBlocks.forEach((codeBlock) => {
	let code = codeBlock.innerHTML;
	code = code.replaceAll("<", "&lt;");
	codeBlock.innerHTML = code;
});