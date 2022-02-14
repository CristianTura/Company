

const API = 'http://127.0.0.1:8000/api/company/';


export const getData = async (id) => {
    const url = `${API}/${id}`;
    const resp = await fetch(url);
    return await resp.json();
};

export const getDataAll = async () => {
    const url = `${API}`;
    const resp = await fetch(url);
    return await resp.json();
};

export const sendData = async (endpoint, data) => {
    const url = `${API}/${endpoint}`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};

export const updateData = async (endpoint, id, data) => {
    const url = `${API}/${endpoint}/${id}`;
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};

export const deleteData = async (endpoint, id) => {
    const url = `${API}/${endpoint}/${id}`;
    return await fetch(url, {
        method: "DELETE",
    });
};
