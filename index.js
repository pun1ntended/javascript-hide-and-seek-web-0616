function getFirstSelector(selector) {
  var sel = document.querySelector(selector);
  return sel
}

function nestedTarget() {
  var sel = document.getElementById('nested').querySelector('div.target');
  return sel
}

function increaseRankBy(n) {
  var selection = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < selection.length; i++) {
    selection[i].innerHTML = (parseInt(selection[i].innerHTML) + n);
  }
  return selection
}

function deepestChild() {
  var currentNode = document.getElementById('grand-node');
  var grandNode = currentNode.querySelectorAll('div');
  for (var i = 0; i < grandNode.length; i ++) {
    if (grandNode[i].children.length === 0) {
      return grandNode[i]
    }
  }
}
