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


let data2 = data.filter((e)=>e.tm_number==972484103)
let data3 = data.filter((e)=>e.tm_number==9724084105)
let data4 = data.filter((e)=>e.tm_number==9724084103)

// let arr2 = [{9724084103},
//     {tm_number:972484103},
//     {tm_number:972484103}]

// let res = arr2.push(tm_name);
// console.log(arr2);

const testarr = []


testarr.push({tm_number:data2},{tm_number:data3},{tm_number:data4})
// console.log(testarr);

document.write(testarr);