const data = [
    {
      user: "u1",
      type: "login",
      time: 2
    },
    {
      user: "u2",
      type: "login",
      time: 2
    },
    {
      user: "u1",
      type: "logout",
      time: 4
    },
    {
      user: "u3",
      type: "login",
      time: 5
    },
    {
      user: "u3",
      type: "logout",
      time: 6
    },
    {
      user: "u2",
      type: "logout",
      time: 5
    },
    {
      user: "u5",
      type: "login",
      time: 2
    }
  ];
  
  let obj = {};
  
  data.forEach((ele) => {
    if (!obj[ele.time]) {
      obj[ele.time] = [];
    }
  });


  const keyss = Object.keys(obj)
console.log("=====",keyss);
  const maxV = Math.max(...keyss)
  console.log("====maxV===",maxV);
  

  const minV = Math.min(...keyss)
  console.log("====minV===",minV);
  

  for (let index = minV; index <= maxV; index++) {
    obj[index] = [];
  }

console.log("==obj====", obj);
  data.forEach((ele) => {
    if (ele.type === "login") {
      obj[ele.time].push(ele.user);
    }
    Object.keys(obj).forEach((key) => {
      if (!obj[key].includes(ele.user)) {
        obj[key].push(ele.user);
      }
    });
  });
  
  data.forEach((ele) => {
    Object.keys(obj).forEach((keys) => {
      if (ele.type === "logout") {
        if (ele.time < keys) {
          obj[keys] = obj[keys].filter(function (item) {
            return item !== ele.user;
          });
        }
      }
  
      if (ele.type === "login") {
        if (ele.time > keys) {
          obj[keys] = obj[keys].filter(function (item) {
            return item !== ele.user;
          });
        }
      }
    });
  });
  
  console.log("=obj=111123", obj);