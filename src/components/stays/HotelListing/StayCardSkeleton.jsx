import "./StayCardSkeleton.css";

const StayCardSkeleton = () => {

    return (
        <div className="stay-skeleton">

            <div className="skeleton-image"/>

            <div className="skeleton-content">

                <div className="skeleton-line large"/>

                <div className="skeleton-line medium"/>

                <div className="skeleton-line small"/>

                <div className="skeleton-buttons"/>

            </div>

        </div>
    );

};

export default StayCardSkeleton;