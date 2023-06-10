import { createContext, useState } from "react";

const BookValue = createContext();

 function Provider({children})  {
    const [count , setCount] = useState(5);

    const valuesToShare = {
        count , 
        incrementCount : () => {
            setCount(count+1);
        }
    }

    return (
    <BookValue.Provider value={valuesToShare}>
        {children}
    </BookValue.Provider>
    )
 }
export { Provider };
export default BookValue;