function Greetings(addingnames){

    var list = addingnames || [];

    function storingNames(name){
        var name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if(!list.includes(name)){
            list.push(name);
        }else {
            return
        }
    }

    function greet(select, name){
        name = name.charAt(0).toUpperCase() = name .slice(1).toLowerCase()
        if(select === "English") {
            return "Hello, " + name;
        }else if (select === "Sesotho"){
            return "Dumela, " + name;
        }else if(select === "Isixhosa"){
            return "Molo, " + name;
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