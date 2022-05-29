import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import Styles from "./orderSummary.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import AddToCartButton from "../../components/Button/AddToCartBatton";
import Button from "../../components/Button/Button";

const DELIVERY_FEE = 20;
const TAXES = 10;

const OrderSumary = () => {
  const cart = useSelector((state) => state.cart);

  const savings = Object.values(cart).reduce(
    (sum, item) => sum + item.discount * item.qty,
    0
  );
  const totalVal = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar hideCart />
      <div className={`${Styles.orderSummarySection}`}>
        <div className={`${Styles.headerSummary}`}>
          <Link className={`${Styles.backCont}`} to="/">
            <AiOutlineArrowLeft size={"20px"} />
            <span className={`${Styles.backToHome}`}>Back To Home</span>
          </Link>
          <h1 className={`${Styles.orderSummaryCount}`}>
            Order Summary ({Object.keys(cart).length} item
            {Object.keys(cart).length > 1 ? "s" : ""})
          </h1>
        </div>
        <section className={`${Styles.orderItemsSection}`}>
          <div className={`${Styles.orderItemsCont}`}>
            <div className={`${Styles.orderItems}`}>
              <div className={`${Styles.tableHeader} d-flex align-item-center`}>
                <div className={`${Styles.sno} ${Styles.col}`}> S.NO. </div>
                <div className={`${Styles.item} ${Styles.col}`}> ITEMS </div>
                <div className={`${Styles.qty} ${Styles.col}`}>QTY</div>
              </div>

              {Object.entries(cart).map(([id, item], i) => (
                <div
                  key={id}
                  className={`${Styles.row} d-flex align-item-center`}
                >
                  <div className={`${Styles.sno} ${Styles.col}`}>{i + 1}.</div>
                  <div className={`${Styles.item} ${Styles.col}`}>
                    {" "}
                    {item.name}{" "}
                  </div>
                  <div className={`${Styles.qty} ${Styles.col}`}>
                    {" "}
                    <AddToCartButton item={item} />{" "}
                  </div>
                </div>
              ))}

              <hr color="#ecf0f1" />
              <Link className={`${Styles.backCont} ${Styles.add}`} to="/">
                <AiOutlinePlus size={"20px"} />
                <span className={`${Styles.backToHome}`}>Add More items </span>
              </Link>
            </div>
          </div>
          <div className={`${Styles.priceDetailsCont}`}>
            {Object.keys(cart).length > 0 && (
              <div className={`${Styles.priceDetails}`}>
                <h3> Pricing Details </h3>
                <hr color="#e0e6e9" />

                {Object.entries(cart).map(([id, item], i) => (
                  <div
                    className={`${Styles.row} d-flex align-item-center`}
                    key={id}
                  >
                    <div>
                      {item.qty} X ${item.price}.00
                    </div>
                    <div> ${item.price * item.qty}.00 </div>
                  </div>
                ))}
                <hr color="#e0e6e9" />

                {!!savings && (
                  <div className={`${Styles.row} d-flex align-item-center`}>
                    <div> Total Savings </div>
                    <div className={`${Styles.textSuccess}`}>
                      - ${savings}.00
                    </div>
                  </div>
                )}
                <div className={`${Styles.row} d-flex align-item-center`}>
                  <div> Delivery Fee </div>
                  <div> ${DELIVERY_FEE}.00 </div>
                </div>
                <div className={`${Styles.row} d-flex align-item-center`}>
                  <div> Taxes & Fees </div>
                  <div> ${TAXES}.00 </div>
                </div>

                <hr color="#e0e6e9" />

                <div
                  className={`${Styles.row} ${Styles.textBold} d-flex align-item-center`}
                >
                  <div> To Pay </div>
                  <div> ${totalVal + DELIVERY_FEE + TAXES - savings}.00 </div>
                </div>

                <Button
                  variant="primary"
                  onClick={() => window.alert("Order Placed Successfully")}
                >
                  Place Order
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderSumary;
