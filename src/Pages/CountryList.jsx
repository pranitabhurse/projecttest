import React, { useState , useEffect } from "react";

const CountryList = ()=>{

    const[countrylist , setCountryList]=useState([])
    const ViewList = async () => {
        setLoading(true)

        var options = {
            method: 'GET',
            //  url: 'https://domastic.ebankapi.org/api/login',
            headers:
            {
                'content-type': 'application/json',
                'Authorisation': "Bearer 91KJpxThaD3FEGOTrxhjGflTtq8ruP74AakXjKkn5Sh0dL59A1DbrHu1AaIaJ50EOQ9EJppISK7m4Q2ScdjC+YJB0DXD6AyZgJLDbmHk03FL3AY3NrSSB97bkniyWKRhPPAfJMhuscAlfLxLGxGsIHRXBC83XNuZoqiAIGqlyObQmohtgCzQDA1rgy4xeUdHWyt9OJ0LqCyySzDtJepWh1IKOcfxy8WqflhjCfztGLlrHj+sqpRmqano/Ef1T77gRMEYYrMva6ifiigqUTLnD4S7p7uFa+IIQ1qHMK7ud5xUZZ/P8a38W2W8DBxuRBTKi5Kwd5KU5wSeOVSTgEKnNmr/UGFevbwdS0c99cYa7TdWQjpXNCwfWdipdFwT6d+8sIN9ZLG8btKuzdp/41UuXxJwMaQbVLqYaRZBqq0lOO4TEYEGMIKoGSyb5ZaR26Bw9z9mwladimihgJ7BSTdf7BNunryat4PYF+XJfNeekOCnKy7B0pAs0m3urbBlSAdJwaDRPbKPLJuspjRbkXyMNhM4JaVOfCVz3d/wo2VecSdjChSydR9A8CEk+LjblQqNCBhtqs05PtO68GqTatnSnajfkDEijF09kyTlxEYrq0amfuwPQu/NfbKrZKzPDPYKOTPyD/WfRX0VYpb92k9ySHgTdDq33ypdtrkcNUt7cjrO3+EZo9ydVHs+bixYJsktutk3jcWQUMBv44jBZLkpKVu2JZlED5X7taH7chvOYoH1Bv/szeuPiALpFtUI71enciOkmX6CFZTyF280ZwDwt/wsHQVQ6w9APMNtvOHfy9CHSbkcmr1wND8o52NcT+A/IOGYZb/jHP5F9Y5KHMjBCABFoolb5taeUiCW/TOuzsdbT04affocjaw5H0NDeZLcSX5A1qM+rwtuixeuxGgXe/Ll/W71ZJRz4tZzNJOW5nSeJffzU4nb0nJOf55GhMlkrgpuPyXbQalbwzFnPz4z2aeayNq/xdsOi1X33s0blvrlVPFgYToVKe7oKrx8n4KoLq+y2YcTbkd1yT3ePWCxGi+8uvBFpUbaFVj9iTnPaDH9x++ZEnDpiK85AH8D7cmxjopn5INQworwdspvK/LwhlenQPA1nIdQ/RQR4cC6YJP1XUfgYbWMvX+Q/5aQD36UTrOizqRAxpzIb4LfHK7QL/8EVnk0HeNdpTLZwdTF/Ns="

            },
           
        };


        const response = await fetch('https://projects.harvices.in/ticketingappapitest-uat/cityMST/all/', options)
        const data = await response.json();
        console.log(data)
        setCountryList(data)


    }

useEffect(()=>{
    ViewList()
},[])

const[loading , setLoading]=useState()
const [countryName, setCountryName] = useState()
const [cityName, setCityName] = useState()
const [citycode, setCityCode] = useState()
const [alertMessage, setAlertMessage] = useState();

const[countryMSTId , setcountryMSTId]=useState()


    const update = async (id) => {
       
        setLoading(true)

        var options = {
            method: 'POST',
           
            headers:
            {
                'content-type': 'application/json',
                'Authorisation': "Bearer 91KJpxThaD3FEGOTrxhjGflTtq8ruP74AakXjKkn5Sh0dL59A1DbrHu1AaIaJ50EOQ9EJppISK7m4Q2ScdjC+YJB0DXD6AyZgJLDbmHk03FL3AY3NrSSB97bkniyWKRhPPAfJMhuscAlfLxLGxGsIHRXBC83XNuZoqiAIGqlyObQmohtgCzQDA1rgy4xeUdHWyt9OJ0LqCyySzDtJepWh1IKOcfxy8WqflhjCfztGLlrHj+sqpRmqano/Ef1T77gRMEYYrMva6ifiigqUTLnD4S7p7uFa+IIQ1qHMK7ud5xUZZ/P8a38W2W8DBxuRBTKi5Kwd5KU5wSeOVSTgEKnNmr/UGFevbwdS0c99cYa7TdWQjpXNCwfWdipdFwT6d+8sIN9ZLG8btKuzdp/41UuXxJwMaQbVLqYaRZBqq0lOO4TEYEGMIKoGSyb5ZaR26Bw9z9mwladimihgJ7BSTdf7BNunryat4PYF+XJfNeekOCnKy7B0pAs0m3urbBlSAdJwaDRPbKPLJuspjRbkXyMNhM4JaVOfCVz3d/wo2VecSdjChSydR9A8CEk+LjblQqNCBhtqs05PtO68GqTatnSnajfkDEijF09kyTlxEYrq0amfuwPQu/NfbKrZKzPDPYKOTPyD/WfRX0VYpb92k9ySHgTdDq33ypdtrkcNUt7cjrO3+EZo9ydVHs+bixYJsktutk3jcWQUMBv44jBZLkpKVu2JZlED5X7taH7chvOYoH1Bv/szeuPiALpFtUI71enciOkmX6CFZTyF280ZwDwt/wsHQVQ6w9APMNtvOHfy9CHSbkcmr1wND8o52NcT+A/IOGYZb/jHP5F9Y5KHMjBCABFoolb5taeUiCW/TOuzsdbT04affocjaw5H0NDeZLcSX5A1qM+rwtuixeuxGgXe/Ll/W71ZJRz4tZzNJOW5nSeJffzU4nb0nJOf55GhMlkrgpuPyXbQalbwzFnPz4z2aeayNq/xdsOi1X33s0blvrlVPFgYToVKe7oKrx8n4KoLq+y2YcTbkd1yT3ePWCxGi+8uvBFpUbaFVj9iTnPaDH9x++ZEnDpiK85AH8D7cmxjopn5INQworwdspvK/LwhlenQPA1nIdQ/RQR4cC6YJP1XUfgYbWMvX+Q/5aQD36UTrOizqRAxpzIb4LfHK7QL/8EVnk0HeNdpTLZwdTF/Ns="

            },
            body: JSON.stringify({
                "id": id,
                "createdOn": "2023-06-13 10:27:08",
                "modifiedOn": "2023-06-13 10:27:08",
                "createdBy": 38,
                "modifiedBy": null,
                "countryCode": {citycode},
                "countryName": {countryName},
                "dialingCode": {countryMSTId},
                "regex": null,
                "weekendDays": "2,1",
                "active": true,
                "ID_FIELD": "id"

            })
        };





        const response = await fetch('https://projects.harvices.in/ticketingappapitest-uat/countryMST/update/', options)
        const data = await response.json();
        console.log(data)
      

    }

    return(
        <div>
         <div>
        
         </div>


         <div class="container" style={{textAlign:'center'}}>

  <div class="table-wrapper">
  <table>
      <thead>
      <tr>
                    <th>City Name</th>
                    <th>Country Name</th>
                    <th>Country Code</th>
                    <th>Dialing Code</th>
                    <th onClick={update}>Action</th>
                </tr>
      </thead>
      <tbody>
      {countrylist.map((item , ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{item.id}</td>
                                <td><input value={item.cityName} onChange={(e)=>{setCityName(e.target.value)}}/></td>
                                <td><input value={item.countryName} onChange={(e)=>{setCountryName(e.target.value)}}/></td>
                                <td><input value={item.cityCode} onChange={(e)=>{setCityCode(e.target.value)}}/>{item.cityCode}</td>
                                <td><input value={item.countryMSTId} onChange={(e)=>{setcountryMSTId(e.target.value)}}/></td>
                                <td><button onClick={()=>{update(item.id)}}>update</button></td>
                            </tr>
                        )
                    })}
      
      </tbody>


    </table>
  </div>


</div>


        </div>
    )
}

export default CountryList
