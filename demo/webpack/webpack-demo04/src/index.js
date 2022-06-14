import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


function component() {
    let element = document.createElement('div');

    console.log(element);
  
    element.innerHTML = (['Hello', 'webpack']).join(' ');
    // 将css样式添加到class为hello的div上
    element.classList.add('hello');
    // 将图像添加到我们已经存在的div中
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);
  
    return element;
  }
  
  document.body.appendChild(component());