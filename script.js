let text = document.querySelector("p");
let img = document.querySelector('img')
let input = document.querySelector('.inputBox')
let button = document.querySelector('.genButton')
let progress = document.querySelector('.progress-bar');
const computedStyle = getComputedStyle(progress);
button.onclick = function(){
  fetch("https://api.openai.com/v1/images/generations", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body:JSON.stringify( {
      'prompt': input.value,
      "model": "image-alpha-001",
      'size': '512x512',
    }),
  })
  .then(result=>result.json())
  .then(
    json=>{
      console.log(json);
      img.src = json['data'][0]['url']
    })
  .catch(err=>console.log(err))
  
}

setInterval(() => {
  let width = parseFloat(computedStyle.getPropertyValue('--width')||0);
  progress.style.setProperty('--width',width+.1)
}, 5);
