const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg:'red'
    },
    makeTest:function(){
        console.log('First method test')
    }
};

let count = 0;
for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let elem in options[key])
        console.log(`Свойство ${elem} имеет значение ${options[key][elem]}`)
        count++;
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
        count++
    }
    
}
console.log(count)

console.log(Object.keys(options))
console.log(Object.keys(options).length)

options.makeTest();

const {border,bg} = options.colors
console.log(border)
console.log(bg)