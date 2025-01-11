function main(){
    //Create your constructor funtion with the name Shipment
    
    //Add the updateStatusAndResources using the object prototype
    
    //Add the assignResource methods through Object prototype
    
    //Create the object literal with tthe name TrackingSystem
    
    function Shipment(id,location,destination,status,resources){
     function updateStatusandResources(status,resourceArray){

     }  
     function assignResources(){}
    }




    return {Shipment,TrackingSystem};
    //do not modify any other code.
    }

    const TrackingSystem ={}
    
    
    
    
    
    
    
    const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route",["Driver", "Truck"]);


        shipment1.updateStatusAndResources("Delayed", ["Forklift"]); 

        shipment1. assignResources("Worker", "Pallets");

        const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit",["Forklift"]);

        shipment2.updateStatusAndResources("In transit", ["Driver"]);

        TrackingSystem.shipments.push(shipment1, shipment2);

        TrackingSystem.updateStatus("12345", "Delivered");

        TrackingSystem.viewShipment ("12345");
        
        
        
        //shipment1 ID: 12345
        // Status: Delivered
        // Resources: Forklift, Worker, Pallets
        // Location: New York
        // Destination: Los Angeles