function tools(existingNames) {



    var nameList = existingNames || [];

    function storeNames(name) {
        var name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if (!nameList.includes(name)) {
            nameList.push(name);
        } else {
            return
        }
    }

    function greet(selectL, name) {
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        if (selectL === "English") {
            return "Hi, " + name;
        }
        else if (selectL === "Afrikaans") {
            return "Hallo, " + name;
        }
        else if (selectL === "Isixhosa") {
            return "Molo, " + name;
        }

    }

    function counter() {
        return nameList.length
    }



    function getNames() {
        return nameList
    }


    return {
        greet,
        counter,
        storeNames,
        getNames,

    }

}
