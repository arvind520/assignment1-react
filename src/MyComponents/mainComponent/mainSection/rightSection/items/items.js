import "./items.css";
import { itemsData } from "../../itemsData.js";
import { leftContext } from "../../mainSection";
import { useContext } from "react";
export default function Items(props) {
  let { showValue, sortValue } = props;
  const myLeftContext = useContext(leftContext);
  let { selectedBrand, activeColor, pageNo, setPageNo } = myLeftContext;

  //! filtering the by brands
  let filteredData = [];

  if (selectedBrand === 0) {
    filteredData = filteredData.concat(itemsData);
  } else if (selectedBrand === 1) {
    filteredData = itemsData.filter(function (ele) {
      return ele.brand === "Apple";
    });
  } else if (selectedBrand === 2) {
    filteredData = itemsData.filter(function (ele) {
      return ele.brand === "Beats";
    });
  } else if (selectedBrand === 3) {
    filteredData = itemsData.filter(function (ele) {
      return ele.brand === "Samsung";
    });
  } else if (selectedBrand === 4) {
    filteredData = itemsData.filter(function (ele) {
      return ele.brand === "Siemens";
    });
  }

  //! filtering the data by Colors
  let filterByColors = [];
  if (activeColor === 1) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Blue";
    });
  }
  if (activeColor === 2) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Red";
    });
  }
  if (activeColor === 3) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Black";
    });
  }
  if (activeColor === 4) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Yellow";
    });
  }
  if (activeColor === 5) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Pink";
    });
  }
  if (activeColor === 6) {
    filterByColors = filteredData.filter(function (ele) {
      return ele.color === "Wheat";
    });
  }

  //! sort by Name
  if (sortValue === "name") {
    filterByColors.sort(function (a, b) {
      var nameA = a.productName.toUpperCase();
      var nameB = b.productName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  //! Sort by price increasing
  if (sortValue === "ascending") {
    filterByColors.sort(function (a, b) {
      var nameA = a.offerPrice;
      var nameB = b.offerPrice;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  //! Sort by price decreasing
  if (sortValue === "descending") {
    filterByColors.sort(function (a, b) {
      var nameA = a.offerPrice;
      var nameB = b.offerPrice;
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      return 0;
    });
  }
  //! final data
  console.log(filterByColors);

  //! pagination
  function goToNext() {
    if (pageNo === totaloNumOfPages - 1) {
      setPageNo(totaloNumOfPages - 1);
      return;
    }
    setPageNo(function (last) {
      return last + 1;
    });
  }

  function goToPrev() {
    if (pageNo === 0) {
      setPageNo(0);
      return;
    }
    setPageNo(function (last) {
      return last - 1;
    });
  }
  function goToThePage(pageNumber) {
    setPageNo(pageNumber);
  }

  let totaloNumOfPages = Math.ceil(filterByColors.length / showValue);

  const buildAllPageBtn = () => {
    const listOfBtn = [];
    listOfBtn.push(
      <div className="page" onClick={goToPrev}>
        Prev
      </div>
    );

    for (let i = 0; i < totaloNumOfPages; i++) {
      if (i === pageNo) {
        listOfBtn.push(
          <div
            className="page pageNumberSelected"
            onClick={() => goToThePage(i)}
          >
            {i + 1}
          </div>
        );
      } else {
        listOfBtn.push(
          <div className="page" onClick={() => goToThePage(i)}>
            {i + 1}
          </div>
        );
      }
    }

    listOfBtn.push(
      <div className="page" onClick={goToNext}>
        Next
      </div>
    );

    return listOfBtn;
  };

  console.log(showValue);
  let itemsToBeDisplay = filterByColors.slice(
    pageNo * showValue,
    pageNo * showValue + showValue
  );
  // console.log(itemsToBeDisplay," ",(pageNo * showValue)," ", (pageNo * showValue) + showValue);
  // if (filterByColors.length <= showValue) {
  //   for (let i = 0; i < filterByColors.length; i++) {
  //     itemsToBeDisplay.push(filterByColors[i]);
  //   }
  // } else {
  //   for (let i = 0; i < showValue; i++) {
  //     itemsToBeDisplay.push(filterByColors[i]);
  //   }
  // }

  return (
    <>
      <div className="items__section">
        {itemsToBeDisplay.map(function (item, i) {
          return (
            <div className="container" key={"itemId" + i}>
              <img className="productImg" src={item.imgSrc} alt="" />
              <div className="item__name">{item.productName}</div>
              <img src={item.ratingImg} alt="" />
              <div className="price__value">
                <span className="offerPrice">${item.offerPrice}</span>
                <span className="realPrice">${item.mrp}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="page__number">{buildAllPageBtn()}</div>
    </>
  );
}
