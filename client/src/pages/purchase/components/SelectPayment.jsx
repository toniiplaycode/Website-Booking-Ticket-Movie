const SelectPayment = () => {
    return(
        <div className="payment-container">
            <button className="payment-item selected">MOMO</button>
            <button className="payment-item">MASTER CARD</button>
            <button className="payment-item">VN PAY</button>
            <button className="payment-item">ZALO PAY</button>
        </div>
    )
}

export default SelectPayment;