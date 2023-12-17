// import axios from 'axios';

// let accessToken = "VVNfOGQ1MWM1YjU3MzJkNDBjYTg4ZjZkODNjYWM4MmE4ZGU6Y2IyOWY0OTgtMWVmYS00YWM4LTgxOWUtNzU5Mzk0NjEwN2Zj"
// let userId = localStorage.getItem('uuid') 





// export const serverCalls = {

//     getCar: async () => {


      
//       const url = 'https://car-api2.p.rapidapi.com/api/models?make=toyota&limit=6&sort=id&direction=asc&year=2020&verbose=yes';

//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '99425d4840msh6dae608e7f50b0ap159556jsneb71cb37ce7d',
//           'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
//         }
//       };
      
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         let data = result.data
//         console.log (data)
//         return data

       
//       } catch (error) {
//         console.error(error);
//       }
// }
// }
// serverCalls.getCar 



// export const serverGet = {

//   getCar: async (search: any) => {


    
//     const url = `https://google-search72.p.rapidapi.com/imagesearch?q=${search}&gl=us&lr=lang_en&num=10&start=0`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '99425d4840msh6dae608e7f50b0ap159556jsneb71cb37ce7d',
//         'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
// serverGet.getCar 







let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMjcwMzU4NCwianRpIjoiMzg5NmQxNWMtYTgzYS00MWEwLWI0OTgtY2IyOGE2ZDdiNzBmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImJlcmlra3ltIiwibmJmIjoxNzAyNzAzNTg0LCJleHAiOjE3MzQyMzk1ODR9.em3wRtwIP3lH6NXHl65FvjeJGIpR1C-MKrDaJE4ksnc"
let userId = localStorage.getItem('uuid') 









export const serverCalls = {

    getShop: async () => {
       
        const response = await fetch(`https://flask-final-homework.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    },
    getOrder: async () => {
       
        const response = await fetch(`https://flask-final-homework.onrender.com/api/order${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    },
    createOrder: async (data: any) => { 
       
        const response = await fetch(`https://flask-final-homework.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok) {
            throw new Error('Failed to create data'), response.status 
        }

        return await response.json()

    },
    updateData: async (orderId: string, data: any) => { 
        
        const response = await fetch(`https://flask-final-homework.onrender.com/api/order/update/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok) {
            throw new Error('Failed to update data'), response.status 
        }

        return await response.json()

    },
    deleteOrder: async (orderId: string, data: any) => {
        
        const response = await fetch(`https://flask-final-homework.onrender.com/api/order/delete/${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to delete data'), response.status 
        }

        return await response.json()

    }
}