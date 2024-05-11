import TimeItem from "./TimeItem";

const CollectionTimeItem = ({ grouped }) => {
  return (
    <div className="time-date-container">
      {grouped &&
        Object.entries(grouped).map(([key, value]) => {
          return <TimeItem name={key} item={value} />;
        })}
      {Object.keys(grouped).length == 0 && (
        <div className="warning-time-date">Chưa có lịch chiếu !</div>
      )}
    </div>
  );
};

export default CollectionTimeItem;
