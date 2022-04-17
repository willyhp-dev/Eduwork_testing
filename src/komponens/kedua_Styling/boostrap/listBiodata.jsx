import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';


export default function ListBiodata(){

    const [Biodata] =useState([
        {index:1,list:'nama',listBiodata:'Willy Handoyo'},
        {index:2,list:'umur',listBiodata:'24'},
        {index:3,list:'tempat lahir',listBiodata:'Pontianak'},
        {index:4,list:'tanggal lahir',listBiodata:'25-01-1998'},
        {index:5,list:'Hobby',listBiodata:'Game Online'},
        {index:6,list:'Pendidikan',listBiodata:'S1 IT'},
        {index:7,list:'Domisili',listBiodata:'Pontianak'},
    ])
    const Grid = ({key,list,listbiodata})=>{
        return(
            <div>
                 <Row key ={key}>
                <Col sm={4}>{list}</Col>
                <Col sm={1}>:</Col>
                <Col sm={7}>{listbiodata}</Col>
                </Row>
            </div>
        )
    }
    return(
        <div>
            {
                Biodata.map(listdata =>
               <Grid key = {listdata.index} 
                    list = {listdata.list}
                    listbiodata = {listdata.listBiodata} />
                    )
            }
        </div>
    )
    
}

