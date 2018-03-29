
// this - public
// var private
  var Bike = function(name) {
  
    // Only change code below this line.
    // private
    var gear = 2;
    
    // public methods
    this.getGear = function(){
      return gear;
    };
    
    this.setGear = function(gearSet){
      gear = gearSet;
    };

    this.name = name;
  
  }; 

  var myBike = new Bike("Altair");
  console.log(myBike.name + " " + myBike.gear); // Altair undefined
  console.log(myBike.getGear());    // 2