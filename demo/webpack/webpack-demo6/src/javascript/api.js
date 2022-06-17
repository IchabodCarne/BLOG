import { ElMessage } from "element-plus";

const request = (url, config) => {
  return fetch(url, config)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      ElMessage({
        type: "error",
        message: err.message,
      });
    });
};

export const get = (url) => {
  return request(url, {
    method: "GET",
  });
};

export const post = (url) => {
  return request(url, {
    method: "POST",
  });
};
