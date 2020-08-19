const fetch = require("node-fetch")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  try {
    // Fetch the data
    const res = await fetch(`https://api.mediehuset.net/overlook/countries`)

    // Transform the data into json
    const data = await res.json()
     // console.log(data);
     // Map over the results array, calling action.createNode on each item in the array
    data.items.forEach(item => {
      const node = {
        ...item, // Copy all of the properties from the item object
        id: createNodeId(`${item.id}`), // Needs to be unique
        internal: {
          type: "Countries",
          contentDigest: createContentDigest(item), // Pass in the game object to make sure it's unique
        },
      }
      // Create the actual data node
      actions.createNode(node)
    })
  } catch (error) {
    console.log(error)
  }
}
