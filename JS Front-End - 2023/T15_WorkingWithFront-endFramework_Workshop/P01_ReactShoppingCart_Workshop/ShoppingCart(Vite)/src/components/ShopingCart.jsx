import { useState } from "react"

export default function ShopingCart(){
    const [products, setProducts]=useState([]);

    const totalPrice=products
    .filter((item)=>item.isBought)
    .reduce(((value,currentItem)=>value+currentItem.cost),0);

    return <section className="shopping-cart__container">
        <form>
            <div className="shopping-cart__form-control"><input type="text" name="item-name" placeholder="Name"/></div>
            <div className="shopping-cart__form-control"><input type="number" name="item-cost" placeholder="Cost" /></div>
            <div className="shopping-cart__form-control"><input type="text" name="item-image" placeholder="Place image url here" /></div>
            <div className="shopping-cart__form-control">
            <button type="submit" disabled="">
                <span>Add</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" className="svg-inline--fa fa-cart-shopping " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
            </button>
            </div>
        </form>
        <section className="shopping-cart__items-list">
            <article className="shopping-cart__item-container" style={{ textDecoration: "none" }}>
            <img className="shopping-cart__item-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Oat_milk_glass_and_bottles.jpg" alt="Item image" />
            <p className="shopping-cart__item-name">Milk</p>
            <p className="shopping-cart__item-cost">2.5$</p>
            <div className="shopping-cart__item-actions">
                <button className="shopping-cart__item--buy-btn">
                    <span>Buy</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="svg-inline--fa fa-dollar-sign " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M146 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3C4.9 411.4-2.4 392.5 4.8 376.3s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C105.4 279.3 70.4 270 44.4 253c-14.2-9.3-27.5-22-35.8-39.6C.3 195.4-1.4 175.4 2.5 154.1C9.7 116 38.3 91.2 70.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
                    </svg>
                </button>
                <button className="shopping-cart__item--remove-btn">
                    <span>Remove</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button>
            </div>
            </article>
            <article className="shopping-cart__item-container" style={{ textDecoration: "none"}}>
            <img className="shopping-cart__item-img" src="https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg" alt="Item image" />
            <p className="shopping-cart__item-name">Bread</p>
            <p className="shopping-cart__item-cost">1.2$</p>
            <div className="shopping-cart__item-actions">
                <button className="shopping-cart__item--buy-btn">
                    <span>Buy</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="svg-inline--fa fa-dollar-sign " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M146 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3C4.9 411.4-2.4 392.5 4.8 376.3s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C105.4 279.3 70.4 270 44.4 253c-14.2-9.3-27.5-22-35.8-39.6C.3 195.4-1.4 175.4 2.5 154.1C9.7 116 38.3 91.2 70.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
                    </svg>
                </button>
                <button className="shopping-cart__item--remove-btn">
                    <span>Remove</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button>
            </div>
            </article>
            <article className="shopping-cart__item-container" style={{textDecoration: "none"}}>
            <img className="shopping-cart__item-img" src="https://img.taste.com.au/oI-2zjyU/taste/2007/04/eggs-182316-1.jpg" alt="Item image" />
            <p className="shopping-cart__item-name">Eggs</p>
            <p className="shopping-cart__item-cost">6.45$</p>
            <div className="shopping-cart__item-actions">
                <button className="shopping-cart__item--buy-btn">
                    <span>Buy</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="svg-inline--fa fa-dollar-sign " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M146 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3C4.9 411.4-2.4 392.5 4.8 376.3s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C105.4 279.3 70.4 270 44.4 253c-14.2-9.3-27.5-22-35.8-39.6C.3 195.4-1.4 175.4 2.5 154.1C9.7 116 38.3 91.2 70.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
                    </svg>
                </button>
                <button className="shopping-cart__item--remove-btn">
                    <span>Remove</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ paddingLeft: 8 }}>
                        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button>
            </div>
            </article>
        </section>
        <div className="shopping-cart__total-price">
            <h1>Total Price: 0$</h1>
        </div>
    </section>
}