import { Fragment, useEffect, useState } from "react";
import { myTasks } from "../assets/constants";

const Code = () => {
    const [check, setCheck] = useState(false);
    const [checkList, setCheckList] = useState([]);

    //Function to check if localStorage has checklist data
    const fetchList = () => {
        const savedTasks = JSON.parse(localStorage.getItem("checklist"));

        if (savedTasks === null || savedTasks.length === 0) {
            localStorage.setItem("checklist", JSON.stringify(myTasks));
        } else {
            setCheckList(savedTasks);
        }
    };

    //Fetching checklist on first load
    useEffect(() => {
        fetchList();
    }, [check]);

    //Function to check/uncheck items
    function checkItem(item) {
        if (item.checked === true) {
            setCheck((item.checked = false));
            const changedTask = checkList.find((obj) => obj.task === item.task);
            Object.assign(changedTask, item);
            localStorage.setItem("checklist", JSON.stringify(checkList));
        } else {
            setCheck((item.checked = true));
            const changedTask = checkList.find((obj) => obj.task === item.task);
            Object.assign(changedTask, item);
            localStorage.setItem("checklist", JSON.stringify(checkList));
        }
    }

    return (
        <Fragment>
            <h1 style={{ marginTop: "100px" }}> Code and Live View </h1>
            <hr />
            <div style={{ marginTop: "20px" }}>
                {checkList.map((item, index) => (
                    <label key={index} onClick={() => checkItem(item)}>
                        <input type="checkbox" defaultChecked={item.checked} />
                        <div
                            style={{ display: "inline" }}
                            dangerouslySetInnerHTML={{ __html: item.task }}
                        ></div>
                    </label>
                ))}
            </div>
        </Fragment>
    );
};

export default Code;
