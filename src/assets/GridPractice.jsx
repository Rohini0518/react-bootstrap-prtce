export default function GridPractice() {
  return (
    <div className="container border">
      <div className="row g-6 border">
        <div className="col  border">Water</div>
        <div className="col border">Sleep</div>
      </div>
      <div className="row  border">
        <div className="col-2  border">2</div>
        <div className="col offset-2border">8</div>
      </div>
      <div className="row   border">
        <div className="col order-2 border">first</div>
        <div className="col-4 border">14</div>
      </div>
      <div className="row border">
        <div className="col-4 border">9</div>
        <div className="col border">10</div>
      </div>
      <div className="row ">
        <div className="col-9 border">2 Columns</div>
        <div className="col-4 border bg-success">4 Columns</div>
        <div className="col-6 border bg-warning">6 Columns</div>
      </div>
    </div>
  );
}
