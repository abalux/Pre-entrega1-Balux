import React from 'react'

const categories = [
    {
        id: 1,
        name: "Skirts",
        img: "https://i.pinimg.com/564x/91/9f/28/919f28516eb5c38d2e76994d418884ae.jpg",
    },
    {
        id: 2,
        name: "Dresses",
        img: "https://i.pinimg.com/564x/62/8e/87/628e878369b65ddbb63b32ba961864f8.jpg",
    },
    {
        id: 3,
        name: "Coats",
        img: "https://i.pinimg.com/236x/a7/29/32/a72932583a6eb320f8d10a5902f000f0.jpg",
    },
    {
        id: 4,
        name: "Shirts",
        img: "https://i.pinimg.com/236x/5b/7a/96/5b7a96fc7f14d0a99213d04ca6952ca2.jpg",
    }
];
function ItemListContainer({ greetings }) {
    return (
        <>
            <h2>{greetings}</h2>

            {categories.map(item => (
                <div key={item.id} className="card" style={{ width: '18rem' }}>
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}

        </>
    );
}
export default ItemListContainer;
