import React, { useState } from "react";
import './Pages.css'
import { Link } from "react-router-dom";
import CountryList from "./CountryList";



const CountryScreen = () => {

    const [countryName, setCountryName] = useState()
    const [countryCode, setCountryCode] = useState()
    const [dialingCode, setDialingCode] = useState()
    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    const [alertMessage, setAlertMessage] = useState()


//  create country

    const submit = async () => {

        setAlertMessage('')


        setLoading(true)

        var options = {
            method: 'POST',
            //  url: 'https://domastic.ebankapi.org/api/login',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorisation': "Bearer 91KJpxThaD3FEGOTrxhjGflTtq8ruP74AakXjKkn5Sh0dL59A1DbrHu1AaIaJ50EOQ9EJppISK7m4Q2ScdjC+YJB0DXD6AyZgJLDbmHk03FL3AY3NrSSB97bkniyWKRhPPAfJMhuscAlfLxLGxGsIHRXBC83XNuZoqiAIGqlyObQmohtgCzQDA1rgy4xeUdHWyt9OJ0LqCyySzDtJepWh1IKOcfxy8WqflhjCfztGLlrHj+sqpRmqano/Ef1T77gRMEYYrMva6ifiigqUTLnD4S7p7uFa+IIQ1qHMK7ud5xUZZ/P8a38W2W8DBxuRBTKi5Kwd5KU5wSeOVSTgEKnNmr/UGFevbwdS0c99cYa7TdWQjpXNCwfWdipdFwT6d+8sIN9ZLG8btKuzdp/41UuXxJwMaQbVLqYaRZBqq0lOO4TEYEGMIKoGSyb5ZaR26Bw9z9mwladimihgJ7BSTdf7BNunryat4PYF+XJfNeekOCnKy7B0pAs0m3urbBlSAdJwaDRPbKPLJuspjRbkXyMNhM4JaVOfCVz3d/wo2VecSdjChSydR9A8CEk+LjblQqNCBhtqs05PtO68GqTatnSnajfkDEijF09kyTlxEYrq0amfuwPQu/NfbKrZKzPDPYKOTPyD/WfRX0VYpb92k9ySHgTdDq33ypdtrkcNUt7cjrO3+EZo9ydVHs+bixYJsktutk3jcWQUMBv44jBZLkpKVu2JZlED5X7taH7chvOYoH1Bv/szeuPiALpFtUI71enciOkmX6CFZTyF280ZwDwt/wsHQVQ6w9APMNtvOHfy9CHSbkcmr1wND8o52NcT+A/IOGYZb/jHP5F9Y5KHMjBCABFoolb5taeUiCW/TOuzsdbT04affocjaw5H0NDeZLcSX5A1qM+rwtuixeuxGgXe/Ll/W71ZJRz4tZzNJOW5nSeJffzU4nb0nJOf55GhMlkrgpuPyXbQalbwzFnPz4z2aeayNq/xdsOi1X33s0blvrlVPFgYToVKe7oKrx8n4KoLq+y2YcTbkd1yT3ePWCxGi+8uvBFpUbaFVj9iTnPaDH9x++ZEnDpiK85AH8D7cmxjopn5INQworwdspvK/LwhlenQPA1nIdQ/RQR4cC6YJP1XUfgYbWMvX+Q/5aQD36UTrOizqRAxpzIb4LfHK7QL/8EVnk0HeNdpTLZwdTF/Ns="

            },
            body: JSON.stringify({
                "active": true,
                "id": null,
                "countryCode": countryCode,
                "countryName": countryName,
                "dialingCode": dialingCode,
                "weekendDays": "3,2",
                "ID_FIELD": "id"

            })
        };




        if (!countryCode || !countryName || !dialingCode) {
            setAlertMessage("Required all fields");
            setLoading(false)
            
        }


        else {

            const response = await fetch('https://projects.harvices.in/ticketingappapitest-uat/countryMST/create/', options)
            const data = await response.json();
            console.log(data)
            if(data.message== "Country Code Already Exists!")
            {
                setAlertMessage('Country Code Already Exists!')
                setLoading(false)
            }
            else if(data.message== "Country Name Already Exists!")
            {
                setAlertMessage('Country Name Already Exists!')  
                setLoading(false)
            }
            else if(data.message=="SuccessFul"){
                setAlertMessage('Country Created') 
                setLoading(false)
            }
           
        }

    }



// update country

  

    return (
        <div className="container">

            <div classname="form">
                <div className="login-page">

                    <div className="form">
                        <h3 >Create Country </h3>
                        <p style={{ color: 'red' }}>{alertMessage}</p>

                        <div className="login-form">
                            <input type="text" placeholder="Enter Country Name" value={countryName} onChange={(e) => { setCountryName(e.target.value) }} />
                            <input type="text" placeholder="Enter Country Code" value={countryCode} onChange={(e) => { setCountryCode(e.target.value) }} />
                            <input type="text" placeholder="Enter dialing Code" value={dialingCode} onChange={(e) => { setDialingCode(e.target.value) }} />
                            {!loading && <button onClick={submit}>Create</button>}
                            {loading && <button> <i className="fa fa-spinner fa-spin" /></button>}
                            
                        </div>
                        <p className="message"> registered? <Link to="/">Login</Link></p>
                    </div>
                </div>
            </div>
<CountryList/>
        </div>
    )
}

export default CountryScreen
