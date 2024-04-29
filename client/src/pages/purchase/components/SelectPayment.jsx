const SelectPayment = ({ payments, selectedPayment, setSelectedPayment }) => {
    return(
        <div className="payment-container">
            {payments && payments.map((item, index) => (
                <button className={selectedPayment && selectedPayment.id == item.id ? "payment-item selected" : "payment-item"}
                    key={index}
                    onClick={()=>{
                        setSelectedPayment(item);
                    }}
                >
                    {item.namePaymentMethod}
                </button>
            ))}
        </div>
    )
}

export default SelectPayment;