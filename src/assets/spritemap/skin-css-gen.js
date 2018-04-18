/**
#home {
    width: 46px;
    height: 44px;
    background: url(img_navsprites.gif) 0 0;
}

{ name: 'abilities/air-medium',
  file: 'skin.png',
  rotate: 'false',
  xy: '1358, 47',
  size: '34, 34',
  orig: '34, 34',
  offset: '0, 0',
  index: '-1' }


monsters/Vermling Shaman
  rotate: false
  xy: 1255, 212
  size: 207, 209
  orig: 207, 209
  offset: 0, 0
  index: -1

.monsters-Vermling-Shaman {
    height: 207px;
    width:  209px;
    background: url('./skin6.png') 1255px  212px;
}

 */


var fs = require('fs')

var obj = JSON.parse(fs.readFileSync('./skin.json', 'utf8'));
var css=''

for (js in obj){
    css+=getClass(obj[js])
}
console.log(css)

fs.writeFile("skin.css", css)

function getClass(js,parentDir='.'){
    console.log(js)
//    if (hasNull(Object.keys(js))) return console.log(js,'has a null field')
    var name=js.name.replace(/[\/\s]/gi,'-'), 
        pos=js.xy.split(','), 
        x=pos[0].trim(), 
        y=pos[1].trim(), 
        size=js.size.split(','), 
        height=size[1].trim(),
        width=size[0].trim(),
        file=js.file.trim();
    return `
        .${name} {
            height: ${height}px;
            width: ${width}px;
            background: url('${parentDir}/${file}') -${x}px -${y}px;
        }
    `
}

function hasNull(){
    for (arg in args){
        if (arg==null){
            return true
        }
    }
}