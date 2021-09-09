export const RoverMocks = {
    photos: [
        {
            id: 123,
            sol: 1000,
            camera: {
                id: 22,
                name: "MAST",
                rover_id: 5,
                full_name: "Mast Camera"
            },
            img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
            earth_date: "2015-05-30",
            rover: {
                id: 5,
                name: "Curiosity",
                landing_date: "2012-08-06",
                launch_date: "2011-11-26",
                status: "active"
            }
        },
        {
            id: 456,
            sol: 1000,
            camera: {
                id: 22,
                name: "MAST",
                rover_id: 5,
                full_name: "Mast Camera"
            },
            img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg",
            earth_date: "2015-05-30",
            rover: {
                id: 5,
                name: "Curiosity",
                landing_date: "2012-08-06",
                launch_date: "2011-11-26",
                status: "active"
            }
        }
    ]
}

export const RoverImageMock = {
    id: 102693,
    sol: 1000,
    camera: { id: 20, name: "FHAZ", rover_id: 5, full_name: "Front Hazard Avoidance Camera" },
    img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
    earth_date: "2015-05-30",
    rover: { id: 5, name: "Curiosity", landing_date: "2012-08-06", launch_date: "2011-11-26", status: "active" }
}
