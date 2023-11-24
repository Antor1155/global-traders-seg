import React, { useEffect } from 'react';
import "./LeftSlider.css"

const LeftSlider = ({handleHideButton}) => {


    return (
        <div id='left-slider' className='hidden' onClick={handleHideButton}>

            <div id='hide-show-toggle' className='hidden'
            onClick={(event)=>{event.stopPropagation()}}
            >
                <div className='toggle-title'>
                    <h2>Our best warrenty</h2>
                    <button
                        onClick={handleHideButton}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                </div>

                <div className='toggle-info'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus natus! Autem itaque porro error laboriosam? Harum nobis omnis corrupti tempore tenetur possimus est modi laborum? Deserunt, modi asperiores optio laudantium nostrum iure fugit. Ratione reiciendis rem nulla ab, sapiente dolores nihil fuga non at quasi totam. Non nesciunt voluptatibus quam cum odio, molestias exercitationem enim modi quod fugit praesentium necessitatibus repudiandae dignissimos sit, totam quis quisquam culpa ipsam, atque voluptas facere architecto? Facere ratione odio, aut error, recusandae quisquam inventore modi, libero quae distinctio nulla quod laboriosam saepe enim! Eaque sed, magni molestias placeat veniam cumque atque labore, vel tempora facilis corporis voluptas quae reprehenderit possimus rem laudantium eligendi dolore obcaecati! Exercitationem inventore, molestiae soluta, reprehenderit distinctio deserunt itaque laboriosam nobis quidem eligendi dolorum repellat recusandae laborum quos impedit, sed facilis. Repellat, adipisci! Sint distinctio recusandae repudiandae qui voluptatem harum nulla voluptatibus nisi obcaecati praesentium dignissimos quibusdam totam ea minus deleniti, voluptatum rem sit sed aliquid repellat est nihil velit vero? Odio, molestiae dolorem? Quisquam quidem fugiat quae delectus, libero beatae modi in voluptates alias tempora minima veniam adipisci, quibusdam odio reiciendis animi dolores odit? Repellat odit iste, laudantium nam consequatur alias voluptates aut excepturi quibusdam in commodi quisquam harum laborum molestiae tenetur placeat facilis? Assumenda iure corrupti in quibusdam quam qui tenetur quo aliquid debitis culpa, unde voluptate quas perspiciatis quisquam dignissimos ab at consequatur non a repudiandae. Corrupti, vel quas? Laudantium, aut saepe dolorem possimus velit, in cum voluptatem perferendis mollitia, illo voluptatibus ea. Quasi, quod. Soluta ab possimus quibusdam tenetur a consectetur? Quae nostrum eligendi beatae perferendis dolorem ratione exercitationem laborum suscipit eveniet sint quia ipsum ipsa quas omnis doloribus natus illo facilis, rerum minima optio. Voluptatem repudiandae laborum ea nam labore velit consequuntur dolores? Voluptatem impedit provident quis minima unde nihil iusto maiores aliquid placeat repellat necessitatibus, aspernatur sed praesentium dignissimos ex ad alias sit cumque architecto id aliquam laboriosam error? Alias qui hic debitis velit consectetur libero odit facilis, quidem praesentium quae dolore nobis autem culpa expedita!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftSlider;