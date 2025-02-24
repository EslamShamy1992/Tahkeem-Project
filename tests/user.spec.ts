import{expect, test} from '@playwright/test'

test("should be able to login using api",async({request})=>{


    const response = await request.post("https://qacart-todo.herokuapp.com/api/v1/users/login",{


        data:{
            email:"hatem@example.com",
            password:"123456"


        }
    })
   
console.log(response)
})


test("get api",async({request})=>{

   const res= await request.get("https://qacart-todo.herokuapp.com/");
   expect(res.status()).toBe(200);


})