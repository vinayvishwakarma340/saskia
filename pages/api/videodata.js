export const videodata = async (body) => {
    var myHeaders = new Headers();
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 266c2bf86d70751f59ce1ae64d7353754eee1562"
    );
    
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify(body);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    // Using a fetch here but could be any async operation to an external source
    const response = await fetch(
        "https://api.sashyundai.com/sh/admin/LiveVideoList",
      requestOptions
    );
    if (!response.ok) {
    }
    try {
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error); // you may also
    }
  };
  