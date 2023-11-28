import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // const s1 = {
    //     name: "Rishikant goswami",
    //     class: "1a"
    // }

    // const [state, setState] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             name: "Srisha goswami",
    //             class: "Nursary"
    //         })
    //     }, 1000);

    // }

    const notesInitials = [
        {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        }, {
            "_id": "6564b180331a6a9f6b26925c",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes",
            "description": "new notes",
            "tag": "General",
            "date": "2023-11-27T15:10:56.865Z",
            "__v": 0
        },
        {
            "_id": "6564b192331a6a9f6b26925f",
            "user": "6564affb331a6a9f6b26925a",
            "title": "testnotes two",
            "description": "yeppieee test one",
            "tag": "General",
            "date": "2023-11-27T15:11:14.563Z",
            "__v": 0
        },
    ]

    const [notes, setNotes]= useState(notesInitials);
    return ( 
        <NoteContext.Provider value = {{notes, setNotes}}> 
        { props.children } 
        </NoteContext.Provider>
    )
}

export default NoteState;