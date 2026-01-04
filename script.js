let timer;

document.getElementById('input').addEventListener('input', e=>{
  clearTimeout(timer);

  timer = setTimeout(()=>{
    document.getElementById('output').innerText =
      'Final value: ' + e.target.value;
  }, 600);
});
