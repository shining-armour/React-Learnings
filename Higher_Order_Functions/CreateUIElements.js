const createUIElements = (arr,example,div) =>{
    const e1 = document.createElement('h4')
    e1.innerText = arr;
    div.append(e1);
  
    const e2 = document.createElement('p')
    e2.innerText = example;
    div.append(e2);
}

  