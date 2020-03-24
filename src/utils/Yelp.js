const apiKey = "-vtpmwtB5rhwO_JKwRWhpE0Z7lwxakUlQGQiWJ21H5S5Aw_NL6VKQPYR8cQ1bXSwJ5P1I1UaqgrrFn2kZzLQq-uWHFbPZLslhOQorCqMBw2_UZ11Z2g-jnmckrJ4XnYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })
            .then((response) => response.json())
            .then(
                (jsonResponse) => {
                    if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map(
                            business => {
                                return {
                                    id: business.id,
                                    imageSrc: business.image_url,
                                    name: business.name,
                                    address: business.location.adress1,
                                    city: business.location.city,
                                    state: business.location.state,
                                    zipCode: business.location.zip_code,
                                    category: business.categories[0].title,
                                    rating: business.rating,
                                    reviewCount: business.review_count
                                }
                            }
                        )
                    }
                }    
              
            )

    }
}

export default Yelp;