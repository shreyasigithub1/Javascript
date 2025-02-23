function main() {
  //Create your constructor funtion with the name Shipment

  //Add the updateStatusAndResources using the object prototype

  //Add the assignResource methods through Object prototype

  //Create the object literal with tthe name TrackingSystem

  function Shipment(id, location, destination, status, resources) {
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources;
  }

  Shipment.prototype.updateStatusAndResources = function (
    newStatus,
    newResources
  ) {
    this.status = newStatus;
    this.resources = newResources;
  };
  Shipment.prototype.assignResources = function (...resource) {
    resource.map((n) => this.resources.push(n));
  };

  const TrackingSystem = {
    shipments: [],
    updateStatus: function (id, newStatus) {
      for (let i = 0; i < this.shipments.length; i++) {
        if (this.shipments[i].id === id) {
          this.shipments[i].status = newStatus;
          return; // Exit the loop once the shipment is updated
        }
      }
      
    },
    viewShipment: function (id) {
      for (let i = 0; i < this.shipments.length; i++) {
        if (this.shipments[i].id === id) {
          const shipment = this.shipments[i];
          console.log(`Shipment Details:
            ID: ${shipment.id}
Status: ${shipment.status}
Resources: ${shipment.resources.join(", ")}       
Location: ${shipment.location}
Destination: ${shipment.destination}`);
          return; // Exit the loop after displaying the shipment
        }
      }
      
    },
  };
  return { Shipment, TrackingSystem };
}

const { Shipment, TrackingSystem } = main();

const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", [
  "Driver",
  "Truck",
]);

shipment1.updateStatusAndResources("Delayed", ["Forklift"]);

shipment1.assignResources("Worker", "Pallets");

const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
  "Forklift",
]);

shipment2.updateStatusAndResources("In transit", ["Driver"]);

TrackingSystem.shipments.push(shipment1, shipment2); //It is an key

TrackingSystem.updateStatus("12345", "Delivered");

TrackingSystem.viewShipment("12345");

//shipment1 ID: 12345
// Status: Delivered
// Resources: Forklift, Worker, Pallets
// Location: New York
// Destination: Los Angeles
