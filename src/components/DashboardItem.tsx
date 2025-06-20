import "./dashboard.css";

function DashboardItem(props: any) {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.info}</p>
    </div>
  );
}

export default DashboardItem;
