var fs = require('fs')
var readline = require('readline')

var lineReader = readline.createInterface({
  input: fs.createReadStream('./skin.atlas')
})

var bg=''
var currentSkin=[]
var currentIconDef={}
//  xy: 1984, 171
var keyValuePair = /^\s\s(.+)\:\s(.+)$/


lineReader.on('line', function (line) {
  // commit currentIconDef
  if (line.indexOf('==')==0){
    // console.log('commit')
    // currentSkin.push(currentIconDef);

  // set fields
  }else if (line.indexOf('  ')==0){
    r=line.match(keyValuePair);
    if (r){
      currentIconDef[r[1]]=r[2];
    }

  // set background image and init a new icon
  }else if (/\w+\.png/.test(line)){
    // console.log('reinit')
    bg=line

  // set icon name
  }else if (!/(size|format|filter|repeat):/.test(line)){
    currentSkin.push(currentIconDef);

    currentIconDef={
      name:line,
      file:bg
    }
    // console.log('setname',line)
  }else{
    //console.log(line)
  }
//  console.log('Line from file:', line)
})

lineReader.on('close',function(){
  var json=JSON.stringify(currentSkin,null,2);
  console.log("skin",json)
  fs.writeFile("skin.json", json)
})

