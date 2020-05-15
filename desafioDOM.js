function addItem() {
    const itemList = document.getElementById("list");
    const newItem = document.createElement("li");
    const text = document.createTextNode(itemNuevo.value);
    newItem.appendChild(text);
    list.appendChild(newItem);
  }

  const function  removeItem() {
    document.getElementById("list").innerHTML = null;
  }

  