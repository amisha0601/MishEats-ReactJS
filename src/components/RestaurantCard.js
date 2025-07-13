const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card p-4 w-full max-w-[300px] mx-auto rounded-2xl bg-gradient-to-tr from-cardmix to-navbar shadow-2xl/90 shadow-button"
    >
      <div className="overflow-hidden rounded-xl mb-3">
        <img
          className="res-logo w-full h-[160px] object-cover transition-transform duration-300 hover:scale-105"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
        />
      </div>
      <h3 className="text-2xl font-bold text-text mb-2 line-clamp-1">{name}</h3>
      <h4 className="text-sm text-black font-semibold mb-1">
        ⭐ {avgRating} • {costForTwo}
      </h4>
      <h4 className="text-sm text-black mb-1 line-clamp-1">
        {Array.isArray(cuisines) ? cuisines.join(", ") : "N/A"}
      </h4>
      <h4 className="text-sm text-gray-900 font-semibold">{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
