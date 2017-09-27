const Node = require('./node.js');

const LinkedList = function(){
      let length = 0;
      let root = new Node(undefined,null);
      let last node = root;
}

function has (node){
      let start = root;
      for(let r=0; r<length; r++){
            if(start.getValue()==node.getValue()){
                  return true;
            }
            else{
                  start = start.getNext();
                  return false;
            }
            function add(node){
                  lastnode.getNext(node);
                  lastnode = node;
            }
            function remove(node){
                  let temp = new Node(undefined,NULL);
                  let found = root;
                  let last;
                  while(found.getValue() !=node.getValue()){
                        last = found;
                        found = found.getNext();
                        temp.setValue(found.getNext().getValue());
                        temp.setValue(found.getNext().getValue());

                        last.setNext(temp);
                  }
                  return {length,has,add,remove}
            }
            module.exports = LinkedList
}
