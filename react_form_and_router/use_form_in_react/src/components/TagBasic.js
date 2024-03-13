import React, {useState} from "react";

function TagBasic() {
    const [state, setState] = useState({
        description: "Hello can tuan anh"
    })


    return (
        <div>
            <form>
                <textarea name="" id="" cols="30" rows="10">
                    {state.description}
                </textarea>
            </form>
        </div>
    );

}

export default TagBasic;