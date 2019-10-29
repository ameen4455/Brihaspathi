export const post1 = (url, data) => {
  return fetch(`http://192.168.43.157:8000/api${url}`, {
    method: 'POST',
    body: data,
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get1 = url => {
  return fetch(`http://192.168.43.157:8000/api${url}`, {
    mode: 'cors',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(err => console.log(err));
};

export const post2 = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get2 = url => {
  return fetch(`http://13.233.133.214/api${url}`, {
    mode: 'cors',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(err => console.log(err));
};
