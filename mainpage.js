
/* I used the Google Maps Javascript API Docs for help with the code below
  Link: https://developers.google.com/maps/documentation/javascript/examples/
*/

function initMap() {

        /* Code below for the hikes */

        var dog_mountain = {lat: 49.369, lng: -122.986};
        var stawamus_chief = {lat: 49.686, lng: -123.143};
        var st_marks_summit = {lat: 49.428, lng: -123.214};
        var mount_cheam = {lat: 49.186, lng: -121.690};
        var garibaldi_lake = {lat: 49.927, lng: -123.060};
        var map_center_point = {lat: 49.542, lng: -122.332};
        var diez_vistas = {lat: 49.338, lng: -122.883};
        var crown_mountain = {lat: 49.367, lng: -123.453};
        var mount_seymour = {lat: 49.393, lng: -122.953};
        var west_lion = {lat: 49.465, lng: -123.201};


        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: map_center_point
        });

/*---------------------------- Code for Marker 1 -------------------------  */

        var dog_mountain_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Dog Mountain</h1>'+
            '<div id="bodyContent">'+
            '<p>"The Dog Mountain Trail is a short, easy hike from Mount Seymour that offers a spectacular view of Vancouver on a clear day. While the trail has minimal elevation gain and is only about 5km return, it should be noted that the path is a bit more technical, requiring careful steps along several sections that are covered with slippery tree roots. Therefore, some hikers may find this trail on the more challenging end of the "easy" rating." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/dog-mountain/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/dog-mountain/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var dog_mountain_infowindow = new google.maps.InfoWindow({
          content: dog_mountain_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker1 = new google.maps.Marker({
          position: dog_mountain,
          map: map,
          title: 'Dog Mountain',
          icon: image

        });
        marker1.addListener('click', function() {
          dog_mountain_infowindow.open(map, marker1);
        });

/*---------------------------- Code for Marker 2 -------------------------  */

        var stawamus_chief_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Stawamus Chief</h1>'+
            '<div id="bodyContent">'+
            '<p>"The park provides rock climbing opportunities of international significance. Hiking trails to The Chief’s three summits offer rewarding views of Howe Sound, Squamish town site and surrounding mountains. This park has opportunities for camping, hiking, rock climbing and scenic viewing atop the Chief." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/stawamus/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/stawamus/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var stawamus_chief_infowindow = new google.maps.InfoWindow({
          content: stawamus_chief_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker2 = new google.maps.Marker({
          position: stawamus_chief,
          map: map,
          title: 'Stawamus Chief',
          icon: image

        });

        marker2.addListener('click', function() {
          stawamus_chief_infowindow.open(map, marker2);
        });

/*---------------------------- Code for Marker 3 -------------------------  */

        var st_marks_summit_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            "<h1 id='firstHeading' class='firstHeading'>St. Mark's Summit</h1>"+
            '<div id="bodyContent">'+
            "<p>'St. Mark's Summit is part of the Howe Sound Crest Trail that spans over 30km from Cypress to a point along the Sea to Sky Highway near Porteau Cove. The section of the trail that St. Mark's Summit is on starts from Cypress Mountain which is the first mountain along this route and offers spectacular views of Howe Sound on a clear day.' " +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/st-marks-summit/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/st-marks-summit/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var st_marks_summit_infowindow = new google.maps.InfoWindow({
          content: st_marks_summit_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker3 = new google.maps.Marker({
          position: st_marks_summit,
          map: map,
          title: "St. Mark's Summit",
          icon: image

        });

        marker3.addListener('click', function() {
          st_marks_summit_infowindow.open(map, marker3);
        });

/*---------------------------- Code for Marker 4 -------------------------  */

        var mount_cheam_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mount Cheam</h1>'+
            '<div id="bodyContent">'+
            '<p>"One of the most spectacular views in the Fraser Valley, Mount Cheam offers a 360-degree panoramic view from Chilliwack and the communities along the Fraser River, Jones Lake, the surrounding peaks, and Mount Baker to the south." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/mount-cheam/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/mount-cheam/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var mount_cheam_infowindow = new google.maps.InfoWindow({
          content: mount_cheam_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker4 = new google.maps.Marker({
          position: mount_cheam,
          map: map,
          title: "Mount Cheam",
          icon: image

        });

        marker4.addListener('click', function() {
          mount_cheam_infowindow.open(map, marker4);
        });

/*---------------------------- Code for Marker 5 -------------------------  */

        var garibaldi_lake_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Garbaldi Lake</h1>'+
            '<div id="bodyContent">'+
            '<p>"Garibaldi boasts turquoise-coloured water nestled between alpine mountains and a spectacular glacier as the backdrop, Garibaldi Lake is one of the most scenic destinations in British Columbia." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/garibaldi-lake/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/garibaldi-lake/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var garibaldi_lake_infowindow = new google.maps.InfoWindow({
          content: garibaldi_lake_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker5 = new google.maps.Marker({
          position: garibaldi_lake,
          map: map,
          title: "Garibaldi Lake",
          icon: image

        });

        marker5.addListener('click', function() {
          garibaldi_lake_infowindow.open(map, marker5);
        });


/*---------------------------- Code for Marker 6 -------------------------  */

        var diez_vistas_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sendero Diez Vistas</h1>'+
            '<div id="bodyContent">'+
            '<p>"Named Diez Vistas for its ten views, this hike offers beautiful scenery overlooking Indian Arm as you make your way around the Buntzen Lake area." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/sendero-diez-vistas/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/sendero-diez-vistas/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var diez_vistas_infowindow = new google.maps.InfoWindow({
          content: diez_vistas_content
        });


        var image = "Assets/hike_icon_40x40.png";
        var marker6 = new google.maps.Marker({
          position: diez_vistas,
          map: map,
          title: "Diez Vistas",
          icon: image

        });

        marker6.addListener('click', function() {
          diez_vistas_infowindow.open(map, marker6);
        });

/*---------------------------- Code for Marker 7 -------------------------  */

        var crown_mountain_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Crown Mountain</h1>'+
            '<div id="bodyContent">'+
            '<p>"The hike to Crown Mountain behind Grouse Mountain is very difficult but on a clear day, you will be rewarded with incredible views of the Capilano Watershed, the Lions, the city of Vancouver in the distance, and many backcountry coastal mountains. The jagged peak, which resembles a crown, towers above several of the other nearby mountains. What makes this trail so difficult is you have to hike down a very steep trail into Crown Pass before hiking up the steep side of Crown Mountain, then return the same route."  ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/crown-mountain/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/crown-mountain/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var crown_mountain_infowindow = new google.maps.InfoWindow({
          content: crown_mountain_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker7 = new google.maps.Marker({
          position: crown_mountain,
          map: map,
          title: "Crown Mountain",
          icon: image

        });

        marker7.addListener('click', function() {
          crown_mountain_infowindow.open(map, marker7);
        });

/*---------------------------- Code for Marker 8 -------------------------  */

        var mount_seymour_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mount Seymour</h1>'+
            '<div id="bodyContent">'+
            '<p>"One of the local Vancouver ski hills in the winter, the summer hike wanders up the mountain, passing over a couple of peaks before reaching a panoramic view of the city and the Coastal Mountain Range." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/mount-seymour/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/mount-seymour/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var mount_seymour_infowindow = new google.maps.InfoWindow({
          content: mount_seymour_content
        });


        var image = "Assets/hike_icon_40x40.png";
        var marker8 = new google.maps.Marker({
          position: mount_seymour,
          map: map,
          title: "Mount Seymour",
          icon: image

        });


        marker8.addListener('click', function() {
          mount_seymour_infowindow.open(map, marker8);
        });

/*---------------------------- Code for Marker 9 -------------------------  */

        var west_lion_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">The Lions Binkert Trail</h1>'+
            '<div id="bodyContent">'+
            '<p>"The Lions are the two most familiar peaks seen from the city of Vancouver. The view from the Lions is truly spectacular, offering a panoramic view of Howe Sound and the Capilano Watershed down to the city of Vancouver." ' +
            '</p>'+
            '<p>Click <a href="https://www.vancouvertrails.com/trails/the-lions-binkert-trail/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="https://www.vancouvertrails.com/trails/the-lions-binkert-trail/" target="_blank">Source</a> '+
            '(VancouverTrails, 2017)</p>'+
            '</div>'+
            '</div>';

        var west_lion_infowindow = new google.maps.InfoWindow({
          content: west_lion_content
        });

        var image = "Assets/hike_icon_40x40.png";
        var marker9 = new google.maps.Marker({
          position: west_lion,
          map: map,
          icon: image
        });

        marker9.addListener('click', function() {
          west_lion_infowindow.open(map, marker9);
        });

        /* Code below for the the camping spots */

        var golden_ears = {lat: 49.472, lng: -122.405};
        var manning_park = {lat: 49.064, lng: -120.790};
        var porpoise_bay = {lat: 49.506, lng: -123.753};
        var sasquatch_provincial_park = {lat: 49.353, lng: -121.706};
        var alice_lake = {lat: 49.782, lng: -123.117};
        var porteau_cove = {lat: 49.557, lng: -123.238};
        var indian_arm = {lat: 49.451, lng: -122.847};
        var desolation_sound = {lat: 50.112, lng: -124.690};

/*---------------------------- Code for Marker 10 -------------------------  */

        var golden_ears_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Golden Ears Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"As one of the largest parks in the province, Golden Ears Provincial Park is prized for its recreational opportunities. The extensive system of trails within the park provides an excellent opportunity for hiking and horseback riding." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/golden_ears/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/golden_ears/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var golden_ears_infowindow = new google.maps.InfoWindow({
          content: golden_ears_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker10 = new google.maps.Marker({
          position: golden_ears,
          map: map,
          icon: image
        });

        marker10.addListener('click', function() {
          golden_ears_infowindow.open(map, marker10);
        });

/*---------------------------- Code for Marker 11 -------------------------  */

        var manning_park_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Manning Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Manning Park is a focus of outdoor recreation that is unique in British Columbia. Located in the heart of the Cascade Mountains it is within a three hour drive from either the Lower Mainland (Vancouver) or the Okanagan. The climate and geography have combined to make this park an all season recreation area. Bisected by Hwy. 3, Manning Park is one of the most popular destination areas in the province. The landscape diversity of this park combined with four seasons’ development and easy access are the prime factors which stimulate visitor interest." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/ecmanning/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/ecmanning/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var manning_park_infowindow = new google.maps.InfoWindow({
          content: manning_park_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker11 = new google.maps.Marker({
          position: manning_park,
          map: map,
          icon: image
        });

        marker11.addListener('click', function() {
          manning_park_infowindow.open(map, marker11);
        });

/*---------------------------- Code for Marker 12 -------------------------  */

        var porpoise_bay_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Porpoise Bay Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Porpoise Bay Provincial Park on the Sunshine Coast offers many opportunities for coastal fun and is a favourite family park. The park is separated from the Strait of Georgia by the isthmus at Sechelt. This park is characterized by second-growth forest, open grassy areas and sandy beaches. This park also makes an excellent base camp for paddlers exploring the Sechelt Inlet." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/porpoise/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/porpoise/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var porpoise_bay_infowindow = new google.maps.InfoWindow({
          content: porpoise_bay_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker12 = new google.maps.Marker({
          position: porpoise_bay,
          map: map,
          icon: image
        });

        marker12.addListener('click', function() {
          porpoise_bay_infowindow.open(map, marker12);
        });
/*---------------------------- Code for Marker 13 -------------------------  */
        var sasquatch_provincial_park_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sasquatch Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Located north of Harrison Hot Springs, Sasquatch Provincial Park is characterized by a series of pocket lakes, a unique second-growth and birch forest, and scenic mountain ridges. Hicks and Deer Lakes are ideal for motor-boating and canoeing while Trout Lake provides a tranquil fishing experience. Visitors can also enjoy camping, hiking, wildlife viewing, and picnicking."' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/sasquatch/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/sasquatch/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var sasquatch_provincial_park_infowindow = new google.maps.InfoWindow({
          content: sasquatch_provincial_park_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker13 = new google.maps.Marker({
          position: sasquatch_provincial_park,
          map: map,
          icon: image
        });


        marker13.addListener('click', function() {
          sasquatch_provincial_park_infowindow.open(map, marker13);
        });

/*---------------------------- Code for Marker 14 -------------------------  */
        var alice_lake_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Alice Lake Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Alice Lake is surrounded by towering mountains, dense forests and grassy areas. There are four fresh water lakes that dominate the landscape and make swimming and fishing very enjoyable pastimes. The trail around Alice Lake is a popular one for an evening stroll and for the more adventurous there is the Four Lakes Trail. There are excellent views of the Squamish River and the Tantalus Range from the DeBeck’s Hill Trail. This is a favourite family park." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/alice_lk/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/alice_lk/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var alice_lake_infowindow = new google.maps.InfoWindow({
          content: alice_lake_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker14 = new google.maps.Marker({
          position: alice_lake,
          map: map,
          icon: image
        });


        marker14.addListener('click', function() {
          alice_lake_infowindow.open(map, marker14);
        });

/*---------------------------- Code for Marker 15 -------------------------  */


        var porteau_cove_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Porteau Cove Provincial Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Situated on the most southerly fjord in North America, Porteau Cove Provincial Park features waterfront campsites with a view over Howe Sound to the mountains beyond. An old ship has been sunk to provide interest for Scuba divers and to attract marine life. There are special facilities for divers. Adjacent train tracks are active and occasional noise disturbance may occur."' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/porteau/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/porteau/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var porteau_cove_infowindow = new google.maps.InfoWindow({
          content: porteau_cove_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker15 = new google.maps.Marker({
          position: porteau_cove,
          map: map,
          icon: image
        });


        marker15.addListener('click', function() {
          porteau_cove_infowindow.open(map, marker15);
        });

/*---------------------------- Code for Marker 16 -------------------------  */

        var indian_arm_content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Indian Arm Park</h1>'+
            '<div id="bodyContent">'+
            '<p>"Indian Arm Park is managed collaboratively by the Tsleil-Waututh Nation and the Province of British Columbia. A management agreement was signed in 1998 between the two parties and stablished a Park Management Board that oversees any issues related to the management, conservation, recreational and cultural heritage objectives for the area." ' +
            '</p>'+
            '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/indian_arm/" target="_blank"> here </a> to find out more! </p>' +
            '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/indian_arm/" target="_blank">Source</a> '+
            '(Province of British Columbia, 2017)</p>'+
            '</div>'+
            '</div>';

        var indian_arm_infowindow = new google.maps.InfoWindow({
          content: indian_arm_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker16 = new google.maps.Marker({
          position: indian_arm,
          map: map,
          icon: image
        });

        marker16.addListener('click', function() {
          indian_arm_infowindow.open(map, marker16);
        });

/*---------------------------- Code for Marker 17 -------------------------  */

      var desolation_sound_content = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Desolation Sound Marine Provincial Park</h1>'+
          '<div id="bodyContent">'+
          '<p>"This park is a boater’s paradise at the confluence of Malaspina Inlet and Homfray Channel. Yachters have been enjoying the spectacular vistas and calm waters for generations. In recent years, kayakers have enjoyed exploring the islands and coves that make up the unique shoreline. Desolation Sound Marine Provincial Park has more than 60 km of shoreline, several islands, numerous small bays and snug coves. The warm waters of the park are ideal for swimming and scuba diving; the forested upland offers a shady refuge of trails and small lakes and designated campsites." ' +
          '</p>'+
          '<p>Click <a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/desolation/" target="_blank"> here </a> to find out more! </p>' +
          '<p><a href="http://www.env.gov.bc.ca/bcparks/explore/parkpgs/desolation/" target="_blank">Source</a> '+
          '(Province of British Columbia, 2017)</p>'+
          '</div>'+
          '</div>';

        var desolation_sound_infowindow = new google.maps.InfoWindow({
          content: desolation_sound_content
        });

        var image = "Assets/Campsite_icon_40x40.png";
        var marker17 = new google.maps.Marker({
          position: desolation_sound,
          map: map,
          icon: image
        });

        marker17.addListener('click', function() {
          desolation_sound_infowindow.open(map, marker17);
        });

  /* ----------------- Current location Pop Up -------------------- */


        var popup_box = new google.maps.InfoWindow;

           if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function(position) {
               var location = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
               };

               popup_box.setPosition(location);
               popup_box.setContent('You are here!');
               popup_box.open(map);
               map.setCenter(location);
             }, function() {
               handleLocationError(true, popup_box, map.getCenter());
             });
           } else {
             handleLocationError(false, popup_box, map.getCenter());
           }
         }
