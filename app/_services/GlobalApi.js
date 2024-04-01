import request, { gql } from "graphql-request";

const MASTER_URl =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
        bgColor {
          hex
        }
      }
    }
  `;

  const result = await request(MASTER_URl, query);
  return result;
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URl, query);
  return result;
};

export default {
  getCategory,
  getAllBusinessList,
};