import _ from 'lodash'

export default function printMe() {

    let str1 = 'I get called'
    let str2 = 'from print.js!'

    console.log(_join(str1, str2));
}