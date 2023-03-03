const deletePost = async(api, dataInput) => {
    try {
      const response = await fetch(api, {
        method: 'DELETE',
        headers: {"Content-type": "application/json;charset=UTF-8"}
      });
  
      console.log(response)
      const result = await response.json();
      if(result){
        console.log(result.tests)
      }
    } catch(error) {
      console.log(error)
  
    }
  };

  export default deletePost;