console.log("This is JavaScript");

let colors=["orange, blue, green, red"]

let post={
        title:"my post",
        description:"my first post awesome",
        likeCount:12,
        comments:["cool", "nice job"]
};

let posts = [{
    title: "First post",
    likeCount: 12
},{
    title: "Second post",
    likeCount: 222
}];

console.log (colors);
console.log(post);

let age= 29;

if (age>=18) {
  console.log ("you are an adult");
} else {
  console.log ("you are a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

console.log(colors);

let myFunction = x => {console.log(x);
}

let greeter = name =>  {
console.log('Hello, ${name}');
if (name==="Norbi") {console.log("he is an adult")}
}

greeter("Levi");
greeter("Norbi");
greeter("Anyu");
greeter("Noni");

console.log("Hello, Levi")
console.log("Hello, Norbi")
console.log("Hello, Anyu")
console.log("Hello, Noni")

colors.forEach(color => {
    console.log(color)
});

console.log ("This is the end of our code")


// "false || (true && (false || false))"
// "false || (true && (false || false))"
// let title="My post"
// undefined
// let description="my first post, awesome"
// undefined
// let likeCount=12
// undefined
// let comments=["cool", "nice job"]
// undefined

// undefined
// post.title
// "my post"
// post.likeCount
// 12
// post.likeCount=15
// 15
// post.comments.push("another")
// 3
// post.likeCount=post.likeCount+1
// 16
// age++
// 33
// age
// 34
// let newSomething=5;
// undefined
// newSomething===15
// false
// newSomething===5
// true
// newSomething!==10
// true
// newSomething!==5
// false