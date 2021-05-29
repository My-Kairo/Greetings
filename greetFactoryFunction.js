function Greetings(){

    var list = [];

    function storingNames(name){
        var names = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if(!list.includes(names)){
            list.push(names);
        }else {
            return
        }
    }

    function greet(select, Name){
        var naming = Name.charAt(0).toUpperCase() + Name .slice(1).toLowerCase()
        if(select === "English") {
            return "Hello, " + naming;
        }else if (select === "Sesotho"){
            return "Dumela, " + naming;
        }else if(select === "Isixhosa"){
            return "Molo, " + naming;
        }
    }

    function theCounter(){
        return list.length;
    }

    function getTheNames(){
        return list;
    }

    return{
        storingNames,
        greet,
        theCounter,
        getTheNames
    }

}