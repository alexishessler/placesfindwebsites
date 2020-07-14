const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    place_id: String,
    google_map_id: String,
    google_map_url: String,
    name: String,
    vicinity: String,
    website: String,
    phone: String,
    formatted_address: String,
    lat: String,
    lng: String,
    hasBeenConcted: Boolean,
});

module.exports = mongoose.model('places', placeSchema);



