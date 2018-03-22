function sumAllArgs(processArr) {
    var sum = 0;
    for(var i = 2; i < processArr.length; i++) {
        sum += Number(processArr[i]);
    }
    console.log(sum);
}

sumAllArgs(process.argv);