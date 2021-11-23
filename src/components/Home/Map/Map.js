import React from 'react';

import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
    Map, Layers, Overlay, Util    //objects
  } from "react-openlayers";

import './Map.css';
const Mapp=()=>{
    var minX = 102.144584655762;
    var minY = 8.38135528564453;
    var maxX = 109.469177246094;
    var maxY = 23.3926944732666;
    var cenX = (minX + maxX) / 2;
    var cenY = (minY + maxY) / 2;
   
        return (
            <div className="Map">
                <Map view={{center:[cenX,cenY],zoom:3}}>
                    <Layers>
                        <layer.Tile></layer.Tile>
                        
                    </Layers>
                   
               

                </Map>

            </div>
            
        );
    

};
export default Mapp;