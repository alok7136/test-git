const data =[
    {
      "tm_number": "9724084103",
      "tm_name": "PRADIP BHAI",
      "zsm_number": "9974252013",
      "zsm_name": "Jay Ambe1 Communicati",
      "zbm_number": "1234567890",
      "zbm_name": "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      "zone_name": "Surat",
      "circle_name": "Gujarat",
      "category": "Challenger"
    },
    {
      "tm_number": "9724084103",
      "tm_name": "PRADIP duplicate",
      "zsm_number": "9974252013",
      "zsm_name": "Jay Ambe1 Communicati",
      "zbm_number": "1234567890",
      "zbm_name": "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      "zone_name": "Surat",
      "circle_name": "Gujarat",
      "category": "Challenger"
    },
    {
      "tm_number": "9724084105",
      "tm_name": "PRADIP BHAI",
      "zsm_number": "9974252013",
      "zsm_name": "Jay Ambe Communicati",
      "zbm_number": "1234567890",
      "zbm_name": "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      "zone_name": "Surat",
      "circle_name": "Gujarat",
      "category": "Challenger"
    },
    {
      "tm_number": "972484103",
      "tm_name": "SK BHAI",
      "zsm_number": "9974252013",
      "zsm_name": "Jay Ambe 2 Communicati",
      "zbm_number": "1234567890",
      "zbm_name": "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      "zone_name": "Surat",
      "circle_name": "Gujarat",
      "category": "Challenger"
    },
    {
      "tm_number": "972484103",
      "tm_name": "SK BHAI",
      "zsm_number": "9974252013",
      "zsm_name": "Jay Ambe 3 Communicati",
      "zbm_number": "1234567890",
      "zbm_name": "ARIF MALEK",
      "ceo/sales_head/marketing_head_number": "9898049452",
      "zone_name": "Surat",
      "circle_name": "Gujarat",
      "category": "Challenger"
    }
  ]


// let result=[]

//   let groupBy = (data, tm_number) => {
//     return data.reduce((result,Value) => {
//       (result[Value[tm_number]] = result[Value[tm_number]]||[]).push(Value);
//       return result;
//     },{}); 
//   };

// const person = groupBy(data,"tm_number")

// console.log(person)
  

var shortby = (list, key) => {
  let newdata = {};
  list.forEach(item => {
    
      let newItem = Object.assign({}, item);
      delete newItem[key];
      newdata[item[key]] = newdata[item[key]] || [];
      newdata[item[key]].push(newItem);
  });
  return newdata;
};
let result= shortby(data, 'tm_number')

console.log(result);

