import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utilities/axiosInstance';
import "./ProductDetailPage.css"

const ProductDetailPage = () => {
    const { parentId, productId } = useParams()
    const [allProducts, setAllProducts] = useState([])

    const [product, setProduct] = useState()

    const [selectedColor, setSelectedColor] = useState()
    const [selectedStorage, setSelectedStorage] = useState()
    const [selectedCondition, setSelectedCondition] = useState()

    const [availableConditions, setAvailableConditions] = useState([])
    const [availableColors, setAvailableColors] = useState([])
    const [availableStorages, setAvailableStorages] = useState([])

    useEffect(() => {
        axiosInstance.get(`/allSameParentProducts/${parentId}`)
            .then(res => {
                const products = res.data
                setAllProducts(products)

                // setting up product and product options 
                const selectedProduct = products.find((p) => p._id === productId)
                setProduct(selectedProduct)
                setSelectedColor(selectedProduct?.color)
                setSelectedStorage(selectedProduct?.storage)
                setSelectedCondition(selectedProduct?.condition)

                const colors = new Set()
                const conditions = new Set()
                const storages = new Set()

                products.forEach(p => {
                    colors.add(p?.color.name + " " + p?.color.value)
                    conditions.add(p?.condition)
                    storages.add(p?.storage)
                })

                const finalColors = Array.from(colors).map(str => {
                    const [name, value] = str.split(" ")
                    return { name, value }
                })

                setAvailableColors(finalColors)
                setAvailableConditions(Array.from(conditions))
                setAvailableStorages(Array.from(storages))

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // this useEffect to find proudct when select new option 
    useEffect(() => {
        // const newProduct = allProducts.find((p) => p.)
    }, [selectedColor, selectedCondition, selectedStorage])

    console.log(availableColors, availableConditions, availableStorages)
    console.log(product)
    console.log(selectedColor, selectedCondition, selectedStorage)

    return (
        <section>
            <div className='productSection'>
                <div className='productImg'>
                    <img src={product?.image} />
                </div>
                <div className='options'>
                    <div className='name-price'>
                        <h1>{product?.productName} - {product?.storage} -
                            {product?.color?.name} - {product?.description}
                        </h1>
                        <p>
                            <span>special price: </span>${product?.price}
                        </p>
                    </div>

                    <div className='filter-button-container'>
                        <p>Condition</p>
                        <div className='filter-buttons'>
                            {availableConditions.map(condition => (
                                <button>
                                    {condition}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Storage (GB)</p>
                        <div className='filter-buttons'>
                            {availableStorages.map(storage => (
                                <button>
                                    {storage}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='filter-button-container'>
                        <p>Color</p>
                        <div className='filter-buttons'>
                            {availableColors.map(color => (
                                <button className='color'>
                                    <div style={{backgroundColor: color?.value}}></div>
                                    {color.name}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <div className='advices'>
                this is the advice part
            </div>
        </section>
    );
};

export default ProductDetailPage;