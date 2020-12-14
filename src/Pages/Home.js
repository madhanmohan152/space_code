import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';
import './Home.css'
import Itemlist from './datafile.json';



function Home() {
    const [data, setItemlist] = useState(Itemlist);


    useEffect(() => {

        axios.get('http://34.93.21.66:3000/api/alpaca/list')
            .then(response => {
                setItemlist(response)
            })
            .catch((error) => {
                console.error(error);
              });
            
    }, []);

    return (
        <div className="container customContainer">
            {/* <button onClick={handleQuestions}> Contious with google</button> */}
            <div className="col-md-12 topsection-wrap  mt-0 px-0">
                <h1 className="pagetitle textcolor">Popular Stock</h1>
            </div>
            <div class="col-md-12 ml-auto contact-buttons">
                <p class="btn actionButton desktopaction-left ">COMPANY</p>
                <p class="btn bg-color desktopaction-right">MARKET PRICE</p>
            </div>

            <div className="col-md-12 topsection-wrap  mt-0 px-0 ">
                <div className="post">
                    {Itemlist === undefined && (
                        <div className="col-12 text-center">
                            <h5 className="text-center textcolor1"> Loading news</h5>{" "}
                        </div>
                    )}
                    {Itemlist !== undefined &&
                        Object.keys(data).map((key) => {
                            return (
                                <div>
                                    <div class="card recent-detail py-2 col-10">
                                        <div class="row no-gutters">
                                            <div class="col-1 col-lg-1">
                                                <div class="post-img location-thum">
                                                    <img src="https://d1hgna2t11rrei.cloudfront.net/bcrew/bcrewnewsimages/_teaserImage/Image_A005_2020-12-02-064601.png?mtime=20201202121603&amp;focal=none&amp;tmtime=20201202125238" alt="dummy" className="img-fluid rounded" />
                                                </div>
                                            </div>
                                            <div class="col-8 col-lg-9 newsWrap">
                                                <div class="card-body">
                                                    <h5 class="card-title width-adjust-class">{data[key].name}</h5>

                                                </div>
                                            </div>
                            <div class="col-4 col-lg-2 desktopiconalign"><p class="desIcon imgSprite">${data[key].current}USD</p><p className = "textcolor1">{data[key].diffValue}({data[key].per}%)</p></div>
                                        </div>
                                    </div>
                                </div>




                            );
                        })}
                </div>
            </div>
           
        </div>
    )

}
export default Home

