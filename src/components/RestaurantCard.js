const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card p-4 w-full max-w-[300px] mx-auto rounded-2xl bg-gradient-to-t from-button to-cardmix shadow-md">
      <div className="overflow-hidden rounded-xl mb-3">
        <img
          className="res-logo w-full h-[160px] object-cover transition-transform duration-300 hover:scale-105"
          src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
            cloudinaryImageId
          }
          alt={name}
        />
      </div>
      <h3 className="text-lg font-bold text-text mb-1 line-clamp-1">{name}</h3>
      <h4 className="text-sm text-black mb-1 line-clamp-1">{cuisines.join(', ')}</h4>
      <h4 className="text-sm text-gray-900 mb-1">⭐ {avgRating} • {costForTwo}</h4>
      <h4 className="text-sm text-gray-900">{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;