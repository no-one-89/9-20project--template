import axios from 'axios';

function getBlogData(){
  let add = `https://raw.githubusercontent.com/no-one-89/demodata/master/blogdata.json?${Math.random()}`
   return axios.get(add)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}

function getBlogContent(name){
  let add = `https://raw.githubusercontent.com/no-one-89/demodata/master/blogs/${name}.md`
   return axios.get(add)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
export { getBlogData ,getBlogContent}
