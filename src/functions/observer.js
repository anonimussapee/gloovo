import { jobList } from '../Componets/Context/';
function visibilityObserve (entries, observer){
  console.log('hello observer');
}
let observer = new IntersectionObserver(visibilityObserve,{
  root: window.document.getElementById(`container-job`),
  rootMargin: "0px",
  threshold: 1.0
});

setTimeout(() => {
  
  jobList.forEach(job=>{
    observer.observe(`#${job.id}`)
    
  })
}, 10);

console.log('observer')