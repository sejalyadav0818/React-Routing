import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([
    // Sample data
    { id: 1, name: "Service A", price: 50, rating: 1 },
    { id: 2, name: "Service B", price: 20, rating: 5 },
    { id: 3, name: "Service C", price: 80, rating: 10 },
    // ... add more services as needed
  ]);
  const [filteredServices, setFilteredServices] = useState([]);

  const location = useLocation(); // this gives you access to the location object

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); // using location.search instead of window.location.search
    const priceParam = urlParams.get("price");
    const ratingParam = urlParams.get("rating");
    if (priceParam || ratingParam) {
      const filtered = services.filter(
        (service) => service.price <= parseFloat(priceParam) || service.rating <= parseFloat(ratingParam)
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [services, location.search]); // added location.search to the dependency array

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {filteredServices.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price} - Rating: {service.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

//chekc : pass on Query Parameters  Like this : http://localhost:3000/services/?price=4/?rating=10
//learn motre about URLSearchParams : https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams