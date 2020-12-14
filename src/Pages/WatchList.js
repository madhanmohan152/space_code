import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './watchlist.css';
import SearchBox from "./SearchBox";
import data from '../Config/watchdata.json';

function WatchList() {
    console.log(data)
    const [visibleState,  setVisibleState] = useState(true);
    const [searchVal, setsearchVal] = useState("")    
    const[ Itemlist, setItemList] = useState(data);   

    function showOrHide(key) {
        setVisibleState(key);
    }

    const SearchElements = (e) => {
        setsearchVal(e.target.value);
    }
    useEffect(() => {

        axios.get('http://34.93.21.66:3000/api/alpaca/list')
            .then(response => {
                setItemList(response)
            })
            .catch((error) => {
                console.error(error);
              });
            
    }, []);

    return (
        <div className="container">
            <div className="col-md-12 p-0">
                <SearchBox onSearchValue={SearchElements} searchVal={searchVal} />
            </div>
            <div className="col-md-12 topsection-wrap  mt-0 px-0">
                <h1 className="pagetitle textcolor">Watchlist</h1>
            </div>
            <div className="col-md-12 ml-auto contact-buttons">
                <p className="btn actionButton desktopaction-left ">COMPANY</p>
                <p className="btn bg-color desktopaction-right mx-5">MARKET PRICE</p>
            </div>
            <div className="col-md-12 topsection-wrap  mt-0 px-0 ">
                <div className="post">
                    {Itemlist === undefined && (
                        <div className="col-12 text-center">
                            <h5 className="text-center textcolor1"> Loading news</h5>{" "}
                        </div>
                    )}
                    {Itemlist !== undefined &&
                        Object.keys(Itemlist).map((key) => {
                            return (
                                <div className={visibleState === key  ? 'hide-class' : null} >
                                    <div className="card recent-detail py-2 col-md-12">
                                        <div className="row no-gutters">
                                            <div className="col-md-1">
                                                <div className="post-img location-thum">
                                                    <img src="https://d1hgna2t11rrei.cloudfront.net/bcrew/bcrewnewsimages/_teaserImage/Image_A005_2020-12-02-064601.png?mtime=20201202121603&amp;focal=none&amp;tmtime=20201202125238" alt="dummy" className="img-fluid rounded" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 newsWrap">
                                                <div className="card-body">
                                                    <h5 className="card-title width-adjust-className">{Itemlist[key].name}</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-2 text-centre desktopiconalign">
                                                <p className="desIcon imgSprite">${Itemlist[key].current}USD</p>
                                                <p className="textcolor1">{Itemlist[key].diffValue}({Itemlist[key].per}%)</p>
                                            </div>
                                            <div className="col-md-1">
                                            <button className="col-md-3 text-centre pl-2 custom-border" onClick={() => showOrHide(key)}>x</button>
                                            </div>
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


export default WatchList
