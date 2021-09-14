import axios from "axios";

function uploadFile(url, contentType, file) {
  let result = "Error";
  axios.get("/upload").then((response) => {
    console.log(response.data);
  });
  axios
    .post(url, {
      data: file,
      contentType: contentType,
    })
    .then((response) => {
      result = response;
    });
  return result;
}

export { uploadFile };
