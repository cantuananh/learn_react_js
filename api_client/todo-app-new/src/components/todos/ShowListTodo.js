import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import DeleteModal from "./DeleteModal";
import axios from "axios";
import ShowModal from "./ShowModal";
import EditModal from "./EditModal";

function showListTodo({datas, getAllData}) {
    let count = 0;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deleteId, setDeleteId] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [viewId, setViewId] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dataViewDetail, setDataViewDetail] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openViewModal, setOpenViewModal] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editData, setEditData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleClickButtonEdit = async (id) => {
        setOpenEditModal(true);
        try {
            const response = await axios.get(`http://localhost:3001/todos/${id}`)
            const data = response.data;
            setEditData(data);

        } catch (error) {
            alert(error);
        }
    }
    const handleClickButtonDelete = (id) => {
        setOpenDeleteModal(true);
        setDeleteId(id);
    }

    const handleClickViewButton = async (id) => {
        setViewId(id);
        setOpenViewModal(true);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            if (viewId !== "") {
                try {
                    const response = await axios.get(`http://localhost:3001/todos/${viewId}`);
                    const data = response.data;
                    setDataViewDetail(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, [viewId])

    return (
        <>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Todo</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(datas) && datas.length > 0 ? (
                        datas.map(item => (
                            <tr key={item.id}>
                                <td>{count++}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Done" : "Doing"}</td>
                                <td>
                                    <button className={"btn btn-primary"} style={{marginRight: "5px"}}
                                            onClick={() => handleClickViewButton(item.id)}>View
                                    </button>
                                    <button className={"btn btn-warning"} style={{marginRight: "5px"}}
                                            onClick={() => handleClickButtonEdit(item.id)}>Edit
                                    </button>
                                    <button className={"btn btn-danger"}
                                            onClick={() => handleClickButtonDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <>
                            <tr>
                                <td colSpan={4}>No data</td>
                            </tr>
                        </>
                    )
                }
                </tbody>
            </Table>
            <EditModal openEditModal={openEditModal}
                       setOpenEditModal={setOpenEditModal} setEditData={setEditData} editData={editData}
                       getAllData={() => getAllData()}/>
            <ShowModal openViewModal={openViewModal} setOpenViewModal={setOpenViewModal}
                       dataViewDetail={dataViewDetail}/>
            <DeleteModal openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}
                         getAllData={() => getAllData()} deleteId={deleteId}/>
        </>
    );
}

export default showListTodo;
