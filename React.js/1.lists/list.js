const listElement = React.createElement(
    "ul",
    null,
    React.createElement(
        "li",
    {className:"car",style:{color:"blue"}},//second attribute is class
    "car"
    ),
    React.createElement("li",{className:"jeep"},"Jeep")
    );

    //looping by map method

    const mobiles = ["oneplus", "apple", "samsung", "realme","redmi"];
    const mobileLoop = mobiles.map((mobile,index) => {
        return React.createElement("li",{key: mobile + index }, mobile);
    });

    const allItems = React.createElement("div",null,listElement,mobileLoop);

    ReactDOM.render(allItems,document.getElementById("container"));