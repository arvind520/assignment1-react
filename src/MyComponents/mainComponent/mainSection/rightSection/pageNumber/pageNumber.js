import "./pageNumber.css";
import { useState } from "react";
export default function PageNumber() {
  const [pageNo, setPageNo] = useState(3);

  function pageNoHandler(event) {
    setPageNo(parseInt(event.target.innerText));
  }
  return (
    <>
      <div className="page__number">
        <div
          onClick={pageNoHandler}
          className={
            pageNo === 1 ? "page1 page pageNumberSelected" : "page1 page"
          }
        >
          <p>1</p>
        </div>
        <div
          onClick={pageNoHandler}
          className={
            pageNo === 2 ? "page2 page pageNumberSelected" : "page2 page"
          }
        >
          <p>2</p>
        </div>
        <div
          onClick={pageNoHandler}
          className={
            pageNo === 3 ? "page3 page pageNumberSelected" : "page3 page"
          }
        >
          <p>3</p>
        </div>
        <div
          onClick={pageNoHandler}
          className={
            pageNo === 4 ? "page4 page pageNumberSelected" : "page4 page"
          }
        >
          <p>4</p>
        </div>
        <div
          onClick={pageNoHandler}
          className={
            pageNo === 5 ? "page5 page pageNumberSelected" : "page5 page"
          }
        >
          <p>5</p>
        </div>
      </div>
    </>
  );
}
