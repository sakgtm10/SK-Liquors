    function initMap() {
        
        var skLiquorsLocation = { lat: 40.7128, lng: -74.0060 }; 
        

        var map = new google.maps.Map(document.getElementById('map-container'), {
            center: skLiquorsLocation,
            zoom: 15, /
            styles: [
              
            ],
            mapTypeId: 'roadmap' // You can change the map type (e.g., 'terrain', 'satellite')
        });
    
        // Create a custom marker image (you can replace the URL with your own image)
        var markerIcon = {
            url: https:"maps.app.goo.gl/CLKtwVz2kWFZ43YQ7",
            size: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(25, 50),
            scaledSize: new google.maps.Size(50, 50)
        };
    
        // Create a marker to represent SK Liquors on the map
        var marker = new google.maps.Marker({
            position: skLiquorsLocation,
            map: map,
            title: 'SK Liquors',
            icon: markerIcon, // Set the custom marker icon
        });
    
    
    var marker = new google.maps.Marker({
        position: skLiquorsLocation,
        map: map,
        title: 'SK Liquors'
    });
