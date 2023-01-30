const val="test:password"
// const encoded=window.atob(val)
// console.log("encoded::"+encoded);

// const decoded=window.btoa(encoded)
// console.log("decoded::"+decoded);

const encoded=Buffer.from(val).toString('base64')
console.log("encoded:: "+encoded);
console.log("decoded:: "+Buffer.from(encoded, 'base64').toString('ascii'))

const obj={"name":"Saicharan","age":24,"mobile":"+91 8500160838","address":{"firstLine":"B-23","street":"Nunna","PIN":521212}}
// console.log(JSON.stringify(obj,null,"\t"));
// console.log(JSON.stringify(obj,null,"\t \t"));
console.log(JSON.stringify(obj,null,4));
console.log(JSON.stringify(obj,null,10));
