'use strict';

function collect_all_even(collection) {
  //在这里写入代码
    var re = /^\d*[02468]$/;
    var y = collection;
    var x = new Array();
    for(var i in y){
        if(re.test(y[i])){
            x.push(y[i]);
        }
    }
    return x;
}

module.exports = collect_all_even;
