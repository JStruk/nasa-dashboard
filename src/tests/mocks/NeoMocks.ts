export const NeoMocks = {
    links: {
        next: "",
        prev: "",
        self: ""
    },
    element_count: 2,
    near_earth_objects: {
        "2021-09-02": [
            {
                links: {
                    self: "http://www.neowsapp.com/rest/v1/neo/3292015?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic"
                },
                id: "3292015",
                neo_reference_id: "3292015",
                name: "(2005 TA)",
                nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3292015",
                absolute_magnitude_h: 27.2,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 1,
                        estimated_diameter_max: 2
                    },
                    meters: {
                        estimated_diameter_min: 3,
                        estimated_diameter_max: 4
                    },
                    miles: {
                        estimated_diameter_min: 5,
                        estimated_diameter_max: 6
                    },
                    feet: {
                        estimated_diameter_min: 7,
                        estimated_diameter_max: 8
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2021-09-02",
                        close_approach_date_full: "2021-Sep-02 18:19",
                        epoch_date_close_approach: 1630606740000,
                        relative_velocity: {
                            kilometers_per_second: "14.7668148167",
                            kilometers_per_hour: "53160.5333402521",
                            miles_per_hour: "33031.8880635583"
                        },
                        miss_distance: {
                            astronomical: "0.3340495668",
                            lunar: "129.9452814852",
                            kilometers: "49973103.667702716",
                            miles: "31051846.7258448408"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://www.neowsapp.com/rest/v1/neo/3394709?api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic"
                },
                id: "3394709",
                neo_reference_id: "3394709",
                name: "(2007 VB188)",
                nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3394709",
                absolute_magnitude_h: 26.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0146067964,
                        estimated_diameter_max: 0.0326617897
                    },
                    meters: {
                        estimated_diameter_min: 14.6067964271,
                        estimated_diameter_max: 32.6617897446
                    },
                    miles: {
                        estimated_diameter_min: 0.0090762397,
                        estimated_diameter_max: 0.020295089
                    },
                    feet: {
                        estimated_diameter_min: 47.92256199,
                        estimated_diameter_max: 107.1581062656
                    }
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: "2021-09-02",
                        close_approach_date_full: "2021-Sep-02 05:45",
                        epoch_date_close_approach: 1630561500000,
                        relative_velocity: {
                            kilometers_per_second: "11.1493389531",
                            kilometers_per_hour: "40137.6202310041",
                            miles_per_hour: "24939.9563040925"
                        },
                        miss_distance: {
                            astronomical: "0.2113137681",
                            lunar: "82.2010557909",
                            kilometers: "31612089.609433947",
                            miles: "19642841.6326325886"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
        ]
    }
}
