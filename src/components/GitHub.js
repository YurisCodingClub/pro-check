/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const GitHub = () => {
    const githubItems = [
        {
            id: 1,
            checked: false,
            item: "The repository has a README with all the information about the project",
        },
        {
            id: 2,
            checked: false,
            item: "The repository has a link to the live view in the <strong>about section</strong>",
        },
        {
            id: 3,
            checked: false,
            item: "The repository has a short introduction in the <strong>about section</strong> ",
        },
        {
            id: 4,
            checked: false,
            item: "The repository has tags in the <strong>about section</strong>",
        },
        {
            id: 5,
            checked: false,
            item: "Open issues are created and labeled",
        },
        {
            id: 6,
            checked: false,
            item: "A thumbnail is added to the social preview in <strong>GitHub settings</strong>",
        },
        {
            id: 7,
            checked: false,
            item: "The repository is <strong>visible</strong>",
        },
        {
            id: 8,
            checked: false,
            item: "Merged/unused branches are deleted",
        },
    ];

    const [items, setItems] = useState([]);

    const fetchList = () => {
        const githubItemsStored = JSON.parse(
            localStorage.getItem("githubItemsStored")
        );

        if (githubItemsStored === null || githubItemsStored.length === 0) {
            localStorage.setItem(
                "githubItemsStored",
                JSON.stringify(githubItems)
            );
        } else {
            setItems(githubItemsStored);
        }
    };

    useEffect(() => {
        fetchList();
    }, [items]);

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("githubItemsStored", JSON.stringify(listItems));
    };

    return (
        <div style={{ padding: "40px 30px" }}>
            <h2 style={{ fontSize: "32px" }}>GitHub Repositories</h2>
            <hr />
            <ul style={{ margin: "0", padding: "0" }}>
                {items.map((item) => (
                    <li
                        style={{
                            listStyle: "none",
                            fontSize: "16px",
                            lineHeight: "2",
                        }}
                        className="item"
                        key={item.id}
                    >
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={{ display: "inline" }}
                            dangerouslySetInnerHTML={{ __html: item.item }}
                        ></label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHub;
