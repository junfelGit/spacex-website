import gql from "graphql-tag";

const ships = gql`
  query Query($input: ShipsInput!) {
    ships(input: $input) {
       id
      class
      name
    }
  }
`;

const ship = gql`
  query Query($shipId: ID!) {
    ship(id: $shipId) {
      id
      name
      class
      image
      active
      missions {
        id
        name
        flight
      }
      abs
      attempted_landings
      course_deg
      home_port
      imo
      mmsi
      model
      position {
        latitude
        longitude
      }
      roles
      speed_kn
      status
      successful_landings
      type
      url
      weight_kg
      weight_lbs
      year_built
    }
  }
`;


const query = { ships, ship };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
