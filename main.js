console.log('Hello World!');

fetch('https://api.spacexdata.com/v5/launches/latest')
.then(res => {
  return res.json();
})
.then(data => {
  console.log(data);
  
  const launchInfo  =  document.getElementById('container');
    // Get the mission patch image URL
        const missionPatch = data.links.patch.small;
        
                // Optionally, get additional images from Flickr if available
       const flickrImages = data.links.flickr.original;
       const flickrImageMarkup = flickrImages.map(url => `<img src="${url}" alt="Launch Image" style="width: 100%; max-width: 300px;">`).join('');
       const markup = `
             <img src="${missionPatch}" alt="${data.name} {
             }" class="center-img">
          <div>${flickrImageMarkup}</div>
          <p class="learn">Details: ${data.flight_number}</p>
            <p class=""> Date: ${new Date(data.date_utc).toLocaleString()}</p>
          <h1>Mission: ${data.name}</h1>
          
        
          <p>Rocket: ${data.rocket}</p>
          <p>Launchpad: ${data.launchpad}</p>
         
          
 `;
        launchInfo.innerHTML = markup;
      })
      .catch(error => console.error('Error fetching data:', error));
 

