const data = [
  {
    user: "u1",
    type: "login",
    time: 2,
  },
  {
    user: "u2",
    type: "login",
    time: 3,
  },
  {
    user: "u1",
    type: "logout",
    time: 4,
  },
  {
    user: "u3",
    type: "login",
    time: 5,
  },
  {
    user: "u3",
    type: "logout",
    time: 6,
  },
  {
    user: "u2",
    type: "logout",
    time: 5,
  },
  {
    user: "u4",
    type: "login",
    time: 5,
  },
];

const obj = {};

data.forEach((ele) => {
  if (!obj[ele.time]) {
    obj[ele.time]=[]
  }
});

const key = Object.keys(obj);
console.log("======",key);

maxK = Math.max(...key);
minK = Math.min(...key);

for(let i = minK; i<=maxK; i++){
  obj[i]=[]
}


data.forEach((ele)=>{
Object.keys(obj).forEach((key)=>{
  if(!obj[key].includes(ele.user)){
    obj[key].push(ele.user)
  }
})
})

data.forEach((ele)=>{
Object.keys(obj).forEach((key)=>{
  if(ele.type === "logout"){
    if(ele.time<key){
      obj[key]=obj[key].filter((element)=>{
        return element !== ele.user 
      })
    }
  }

  if(ele.type === "login"){
    console.log("====ele.time====",ele.time);
    console.log("====key===",key);
    if(ele.time > key){
      obj[key]=obj[key].filter((element)=>{
        return element !== ele.user 
      })
    }
  }
})
})

console.log("=====", obj);

// this is my array java script solution
