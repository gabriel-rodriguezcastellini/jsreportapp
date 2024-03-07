const axios = require('axios')

async  function beforeRender(req, res)  {
  const resData =  await axios.get('http://services.odata.org/V4/Northwind/Northwind.svc/Customers?$top=5')
  console.log(resData.data)
  req.data.customers = resData.data.value
}