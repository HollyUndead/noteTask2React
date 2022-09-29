export function searchForDates(content: string){
    const date = new RegExp(/(0?[1-9]|[12][0-9]|3[01])[- \.\/](0*[1-9]|1[012])[- \.\/](19|20|\d\d)/);
    let str = content;

    if(date.test(str)!==true){
        return '-'
    }

    let a =[];
    let f = new RegExp(/\.|\-|\s|\//);
    while(date.test(str) === true){
        let res = str.match(date)[0];
        let s = res.split(f)
        if(s[1].length > 2){
            s[1] = s[1].slice(-2)
        }
        str = str.replace(res, '')
        res = s.join('/')
        a.push(res)
    }
    a.forEach((elemet, index) => {
        if(f.test(elemet)==true){
            let b = elemet.split(f)
            a[index] = b.join('/')
        }
    })
    return a.join(',')
}

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}
  
export function formatDate(date:any) {
    return [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join('/');
}