class APIUtils{
     
    constructor(apiContext,loginPayload){
         this.apiContext = apiContext;
         this.loginPayload = loginPayload;
    }

  async getToken(){

     const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data : this.loginPayload
    });
    const responseJson = await loginResponse.json();
    const token = responseJson.token;
    return token;

  }

  async createOrder(orderPayload){
      let response = {};
      response.token = await this.getToken();
      const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data : orderPayload,
        headers: {
            'authorization':response.token,
            'content-type' :'application/json'
        },
    })

    const orderResponseJson = await orderResponse.json();
    const orderID = orderResponseJson.orders[0];
     response.orderID = orderID;
    return response;

  }



}module.exports = { APIUtils };